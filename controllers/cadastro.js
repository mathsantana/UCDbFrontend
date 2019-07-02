import {cadastrarUsuario} from "../model/modelUsers.js";
import "../components/navbar.js"

let $buttonCadastrar = document.getElementById("submitCadastro");

$buttonCadastrar.addEventListener("click", function () {
    let newUser = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value,
        "firstName": document.getElementById("fName").value,
        "lastName": document.getElementById("lName").value
    };

    console.log("Apertou!");

    cadastrarUsuario(newUser);

});