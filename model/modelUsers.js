async function requestPOST(url, body) {
    try {
        let r = await fetch(url, 
        {
            method: 'POST',
            headers:  {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            },
            body:JSON.stringify(body),
            mode: "cors"
        });
        if (!r.ok) {
            throw r;
        }
        return r;
    } catch (error) {
        if (!error) throw ErrorEvent("Servidor não disponível");
        let e = await error.json();
        alert(e.message);
    }
}


async function authToken (login) {

    try {
        let response = await requestPOST('http://ucdb-final.herokuapp.com/api/v1/auth/login', login);
        if (!response.ok) {
            throw response;
        }
        let data = await response.json();
        return {
            "email": login.email,
            "token": data.token
        };
    } catch (error) {
        if (!error) throw ErrorEvent("Servidor não disponível");
        let e = await error.json();
        alert(e.message);
    }
   
}

async function cadastrarUsuario(user) {

    let response = await requestPOST("http://ucdb-final.herokuapp.com/api/v1/users/", user);

    if (!response) {
        throw new ErrorEvent("Request null");
    }
    
    let data = await response.json();
    
    alert("Cadastro realizado!");
}

export {authToken, cadastrarUsuario};