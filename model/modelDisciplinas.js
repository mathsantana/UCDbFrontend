
async function getDisciplinas() {
    try {
        let response = await fetch("http://ucdb-final.herokuapp.com/api/v1/disciplinas/",
            {
                method: 'GET',
                headers:  {
                    'Access-Control-Allow-Origin':'*',
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache',
                },
                mode: "cors"
            }
        );
        
        if (!response.ok) {
            throw response;
        }

        let data = response.json();
        return data;

    } catch(error) {

    }
}

export {getDisciplinas};