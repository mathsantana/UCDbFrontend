let $button = document.getElementById("submit");
let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

$button.addEventListener("click", function() {
    console.log("Apertou")
    let login = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
    }

    fetch('http://localhost:8080/api/v1/auth/login', 
        {
            method: 'POST',
            headers: myHeaders,
            body: login,
            mode: 'cors'
        }
    ).then( r => {
        console.log(r);
    });

});

/* $button.click(() => {
   
}) */


function submitLogin() {
    
};


