let token;

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
        let e = await error.json();
        console.log(e.message);
    }
}


async function authToken (login) {

    try {
        let r = await fetch('http://localhost:8080/api/v1/auth/login', 
        {
            method: 'POST',
            headers:  {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            },
            body:JSON.stringify(login),
            mode: "cors"
        });
        if (!r.ok) {
            throw r;
        }
        let data = await r.json();
        token = data.token;
    } catch (error) {
        let e = await error.json();
        console.log(e.message);
    }
   
}

async function cadastrarUsuario(user) {

    let response = await requestPOST("http://localhost:8080/api/v1/users/", user);

    if (!response) {
        throw new ErrorEvent("Request null");
    }
    
    let data = await response.json();
    
    console.log("Cadastro realizado!");
    console.log(data);

}

export {authToken, token, cadastrarUsuario};