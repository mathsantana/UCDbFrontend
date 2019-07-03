import {getAllPerfilDisciplina, getPerfilDisciplina} from "../model/modelPerfilDisciplinas.js";
import "../components/navbar.js"
import "../components/disciplinas.js"

let listId = [];
renderPerfilDisciplinas()
.then(() => {
    document.getElementById("bttnSearch").addEventListener("click", () => {
        console.log(listId);
        let id = document.getElementById("searchId").value;
        if (id.length > 0) {
            if (listId.includes(Number(id))) {
                window.location.assign(`/perfildisciplina.html?id=${id}`);
            } else {
                alert("ID de disciplina inválido");
            }
        } else {
            alert("Digite algum ID");
        }
    });
});




async function renderPerfilDisciplinas() {
    let $disciplinas = document.getElementById("perfilDisciplinas");
    let listPerfilDisciplinas = await getAllPerfilDisciplina(sessionStorage.getItem("token"));
    for (const perfil of listPerfilDisciplinas) {
        listId.push(perfil.id);
        let $d = document.createElement("disciplina-ps");
        $d.setAttribute("login", "");
        $d.setAttribute("name", perfil.disciplina.nome);
        $d.setAttribute("id", perfil.id);
        $d.setAttribute("likes", perfil.likes);
        $disciplinas.appendChild($d);
    }

}
