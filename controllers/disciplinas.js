import {getDisciplinas} from "../model/modelDisciplinas.js"
import "../components/navbar.js";
import "../components/disciplinas.js";

let $canvas = document.getElementById('disciplinas');

renderDisciplinas();
let $substring = document.getElementById("substring");
$substring.addEventListener("input", () => {
    if (document.getElementById("substring").value.length >= 3) {
        $canvas.innerText = "";
        renderDisciplinas(substring.value);
    } else if (document.getElementById("substring").value.length == 0) {
        $canvas.innerText = "";
        renderDisciplinas();
    }
}); 


async function renderDisciplinas(substring = false) {
    let data;
    if (substring) data = await getDisciplinas(substring);
    else data = await getDisciplinas();
    let disciplina;

    for (disciplina of data) {
        let $d = document.createElement("disciplina-ps");
        $d.setAttribute("name", disciplina.nome);
        $d.setAttribute("id", disciplina.id);

        $canvas.appendChild($d);
    }
}