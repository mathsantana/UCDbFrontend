import {getPerfilDisciplina, giveLike, giveComment} from "../model/modelPerfilDisciplinas.js";
import "../components/navbar.js";
import "../components/comment.js";
import "../components/reply.js";

let $mural = document.getElementById("listComments");
let $bttnLike = document.getElementById("bttnLike");
let $bttnComment = document.getElementById("bttnComment");
let $nLikes = document.getElementById("nLikes");
let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id');

renderPage();

$bttnLike.addEventListener("click", () => { sendLike();});
$bttnComment.addEventListener("click", () => { sendComment();});

async function renderPage() {
    console.log(id);
    if (id) {
        let perfilDisciplina = await getPerfilDisciplina(id, sessionStorage.getItem("email"),
        sessionStorage.getItem("token"));

        document.title = `${perfilDisciplina.id} - ${perfilDisciplina.disciplina.nome}`;

        document.getElementById("id").innerText = `${perfilDisciplina.id} - ${perfilDisciplina.disciplina.nome}`;
        
        $nLikes.innerText = `${perfilDisciplina.likes}`;

        console.log(perfilDisciplina.usuarioCurtiu);

        renderLike(perfilDisciplina);

        renderComments(true, perfilDisciplina)

    }
    else {
        alert("Nenhuma disciplina selecionada!")
        setTimeout(() => { window.location.assign("/home.html"); }, 2000);
    }

}

async function sendLike() {
    console.log("apertou");
    let newLike = await giveLike(id, sessionStorage.getItem("email"), sessionStorage.getItem("token"));
    renderLike(newLike);
}

async function sendComment() {
    let text = document.getElementById("inputComment").value;
    if (!text) {
        alert("Comentário sem texto!")
    } else {
        let textJson = { "text": text };
        let newComment = await giveComment(id, sessionStorage.getItem("email"), sessionStorage.getItem("token"),
        textJson);
        renderComments();
    }
}

async function renderComments(firstTime = false, perfilDisciplina) {
        $mural.innerHTML = "";
        if (!firstTime) perfilDisciplina = await getPerfilDisciplina(id, sessionStorage.getItem("email"),
        sessionStorage.getItem("token"));

        let listComments = perfilDisciplina.comments;
        listComments.sort(compareIdComment);
        listComments.forEach(comment => {
            if (!comment.comentarioApagado) {
                createComment(comment, $mural);
                if (comment.reply.length != 0) {
                    let $ul = document.createElement("UL");
                    let listReply = comment.reply.sort(comparePerfil);
                    let reply;
                    for (reply of listReply) {
                        if(!reply.comentarioApagado){
                            const $r = createReply(reply);
                            $ul.appendChild($r);
                        }  
                    }
                    $mural.appendChild($ul);
                }
            }
        });
}

function renderLike(perfilDisciplina) {
    $nLikes.innerHTML = perfilDisciplina.likes;
    if (perfilDisciplina.usuarioCurtiu){
        $bttnLike.innerText = "Liked";
        $bttnLike.style = "background-color: green";
    } else {
        $bttnLike.innerText = "Like";
        $bttnLike.style = "background-color: none";
    }
}

function createComment(comment) {
    console.log(comment);
    let $c = document.createElement("comment-ps");
    $c.setAttribute('user', `${comment.user.firstName} ${comment.user.lastName}`);
    $c.setAttribute('text', comment.text);
    $c.setAttribute('date', comment.date);
    $c.setAttribute('idcomment', comment.id);
    $c.setAttribute('idperfil', id);
    $c.setAttribute('email', comment.user.email);
    $mural.appendChild($c);
}

function createReply(reply) {
    console.log(reply);
    let $r = document.createElement("reply-ps");
    $r.setAttribute('user', reply.user);
    $r.setAttribute('text', reply.text);
    $r.setAttribute('date', reply.date);
    $r.setAttribute('idPerfil', id);
    $r.setAttribute('email', reply.user);
    $r.setAttribute('idComment', reply.parent);
    $r.setAttribute('idReply', reply.comments_id);
    return $r;
}

function compareIdComment(a, b) {
    let c = a.id;
    let d = b.id;

    if(c > d) return -1;
    else if (c < d) return 1;
    else return 0;

}

function comparePerfil(a, b) {
    let c = Date.parse(a.date);
    let d = Date.parse(b.date);

    if(c > d) return -1;
    else if (c < d) return 1;
    else return 0;
}

export {renderComments};