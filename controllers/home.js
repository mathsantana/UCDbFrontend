import {getAllPerfilDisciplina} from "../model/modelPerfilDisciplinas.js";

let $sair = document.getElementById("sair");

$sair.addEventListener("click",() => {limparDados();});

renderPerfilDisciplinas();


async function renderPerfilDisciplinas() {
    let $ul = document.getElementById("perfilDisciplinas");
    let listPerfilDisciplinas = await getAllPerfilDisciplina(sessionStorage.getItem("token"));
    for (const perfil of listPerfilDisciplinas) {
        let $a = document.createElement("A");
        $a.setAttribute("href", `/perfildisciplina/?id=${perfil.id}`)
        let $li = document.createElement("LI");
        let $p1 = document.createElement("P");
        let $p2 = document.createElement("P");
        $p1.innerText = `${perfil.id} - ${perfil.disciplina.nome}`;
        $li.appendChild($p1);
        $p2.innerText = `Nº de likes: ${perfil.likes}`;
        $li.appendChild($p2);
        $a.appendChild($li);
        $ul.appendChild($a);
    }

}

function limparDados() {
    sessionStorage.setItem("token", "");
    sessionStorage.setItem("email", "");
}