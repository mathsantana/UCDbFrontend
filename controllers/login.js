import {authToken, token} from '../model/modelUsers.js';

let $button = document.getElementById("submit");

$button.addEventListener("click", function() {
    console.log("Apertou")
    let login = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
    }

    mostrarLogin(login);

});

async function mostrarLogin(login) {
    await authToken(login);
    console.log(token);
};


