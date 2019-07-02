import {getDisciplinas} from "../model/modelDisciplinas.js"
import "../components/navbar.js";
import "../components/disciplinas.js";

renderDisciplinas();


async function renderDisciplinas() {
    let data = await getDisciplinas();
    let disciplina;

    console.log(data);

    let $canvas = document.getElementById('disciplinas');

    for (disciplina of data) {
        let $d = document.createElement("disciplina-ps");
        $d.setAttribute("name", disciplina.nome);
        $d.setAttribute("id", disciplina.id);

        $canvas.appendChild($d);
    }
}