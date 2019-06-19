import {authToken, token} from '../model/modelAuth.js';

let $button = document.getElementById("submit");
let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

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


