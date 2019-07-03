
async function getDisciplinas(substring = false) {
    let url;
    if (!substring) url = "http://ucdb-final.herokuapp.com/api/v1/disciplinas/";
    else url = `http://ucdb-final.herokuapp.com/api/v1/disciplinas/${substring}`;
    try {
        let response = await fetch(url,
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