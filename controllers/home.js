import {getAllPerfilDisciplina} from "../model/modelPerfilDisciplinas.js";
import "../components/navbar.js"
import "../components/disciplinas.js"


renderPerfilDisciplinas();


async function renderPerfilDisciplinas() {
    let $disciplinas = document.getElementById("perfilDisciplinas");
    let listPerfilDisciplinas = await getAllPerfilDisciplina(sessionStorage.getItem("token"));
    for (const perfil of listPerfilDisciplinas) {
        let $d = document.createElement("disciplina-ps");
        $d.setAttribute("login", "");
        $d.setAttribute("name", perfil.disciplina.nome);
        $d.setAttribute("id", perfil.id);
        $d.setAttribute("likes", perfil.likes);
        $disciplinas.appendChild($d);
    }

}
