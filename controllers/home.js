import {getAllPerfilDisciplina} from "../model/modelPerfilDisciplinas.js";
import "../components/navbar.js"
import "../components/disciplinas.js"

let listId = [];
renderPerfilDisciplinas()
.then(() => {
    document.getElementById("bttnSearch").addEventListener("click", () => {
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

$('input[type=radio][name=rank]').change(function() {

    renderPerfilDisciplinas(this.value);
});



async function renderPerfilDisciplinas(value = "id") {
    let $disciplinas = document.getElementById("perfilDisciplinas");
    $disciplinas.innerHTML = "";
    let listPerfilDisciplinas = await getAllPerfilDisciplina(value);
    for (const perfil of listPerfilDisciplinas) {
        listId.push(perfil.id);
        let $d = document.createElement("disciplina-ps");
        $d.setAttribute("login", "");
        $d.setAttribute("name", perfil.disciplina.nome);
        $d.setAttribute("id", perfil.id);
        $disciplinas.appendChild($d);
    }

}
