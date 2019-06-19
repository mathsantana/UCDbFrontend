let token;

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

export {authToken, token};