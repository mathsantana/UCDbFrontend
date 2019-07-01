async function getAllPerfilDisciplina(token) {
    try {
        let r = await fetch("http://ucdb-final.herokuapp.com/api/v1/perfil/likes/", 
        {
            method: 'GET',
            headers:  {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Authorization': `Bearer ${token}`
            },
            mode: "cors"
        });
        if (!r.ok) {
            throw r;
        }
        let listPerfilDisciplina = await r.json();
        return listPerfilDisciplina;
    } catch (error) {
        if (!error) throw ErrorEvent("Servidor não disponível");
        else {
        let e = await error.json();
        alert(e.message);
        sessionStorage.setItem("token", "");
        sessionStorage.setItem("email", "");
        setInterval(window.location.assign("/index.html"), 2000);
        }
    }
}

async function getPerfilDisciplina(id, user, token) {
    try {
        let r = await fetch(`http://ucdb-final.herokuapp.com/api/v1/perfil/codigo/${id}/${user}`, 
        {
            method: 'GET',
            headers:  {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Authorization': `Bearer ${token}`
            },
            mode: "cors"
        });
        if (!r.ok) {
            throw r;
        }
        let PerfilDisciplina = await r.json();
        return PerfilDisciplina;
    } catch (error) {
        if (!error) throw ErrorEvent("Servidor não disponível");
        else {
        let e = await error.json();
        alert(e.message);
        sessionStorage.setItem("token", "");
        sessionStorage.setItem("email", "");
        setInterval(window.location.assign("/index.html"), 2000);
        }
    }
}

async function giveLike(id, user, token) {
    try {
        let r = await fetch(`http://ucdb-final.herokuapp.com/api/v1/perfil/curtir/${id}/${user}`, 
        {
            method: 'POST',
            headers:  {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Authorization': `Bearer ${token}`
            },
            mode: "cors"
        });
        if (!r.ok) {
            throw r;
        }
        let newLike = await r.json();
        return newLike;
    } catch(error) {
        let e = await error.json();
        alert(e.message);
    }
}

async function giveComment(id, user, token, text) {
    try {
        let r = await fetch(`http://ucdb-final.herokuapp.com/api/v1/perfil/comentar/${id}/${user}`, 
        {
            method: 'POST',
            headers:  {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(text),
            mode: "cors"
        });
        if (!r.ok) {
            throw r;
        }
        let newComment = await r.json();
        return newComment;
    } catch(error) {
        let e = await error.json();
        alert(e.message);
    }
}

export {getAllPerfilDisciplina, getPerfilDisciplina, giveLike, giveComment};