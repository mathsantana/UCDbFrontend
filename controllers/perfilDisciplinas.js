import {getPerfilDisciplina, giveLike, giveComment} from "../model/modelPerfilDisciplinas.js";

let $ulComments = document.getElementById("listComments");
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
        console.log("Oi");
        let perfilDisciplina = await getPerfilDisciplina(id, sessionStorage.getItem("email"),
        sessionStorage.getItem("token"));

        document.title = `${perfilDisciplina.id} - ${perfilDisciplina.disciplina.nome}`;

        document.getElementById("id").innerText = `${perfilDisciplina.id} - ${perfilDisciplina.disciplina.nome}`;
        
        $nLikes.innerText = `${perfilDisciplina.likes}`;

        console.log(perfilDisciplina.usuarioCurtiu);

        renderLike(perfilDisciplina);

        let listComments = perfilDisciplina.comments;
        listComments.forEach(comment => {
            createComment(comment);
        });

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
        createComment(newComment);
    }
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
    let $li = document.createElement("LI");
    let $p1 = document.createElement("P");
    $p1.innerHTML = `${comment.user.firstName} ${comment.user.lastName}`;
    let $p2 = document.createElement("P");
    $p2.innerHTML = `${comment.text}`;
    let $p3 = document.createElement("P");
    $p3.innerHTML = `${comment.date}`;
    $li.appendChild($p1);
    $li.appendChild($p2);
    $li.appendChild($p3);
    $ulComments.appendChild($li);
}