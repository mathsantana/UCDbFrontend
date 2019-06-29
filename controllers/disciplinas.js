import {getDisciplinas} from "../model/modelDisciplinas.js"

renderDisciplinas();


async function renderDisciplinas() {
    let data = await getDisciplinas();
    let disciplina;

    console.log(data);

    let canvas = document.getElementById('disciplinas');

    for (disciplina of data) {
        let listNode = document.createElement("LI");
        let content = document.createTextNode(`${disciplina.id} - ${disciplina.nome}`);

        listNode.appendChild(content);
        canvas.appendChild(listNode);
    }
}