import {authToken} from '../model/modelUsers.js';
import "../components/navbar.js"

let $button = document.getElementById("submit");

$button.addEventListener("click", function() {
    console.log("Apertou")
    let login = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
    }

    logar(login);

});

async function logar(login) {
    let data = await authToken(login);
   
    if (data) {
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('token', data.token);
        setInterval(() => {window.location.assign("/home.html");}, 1000);
    }
};


