const url = "http://137.184.108.252:5000/api"
const email = "";
const senha = "";

document.getElementById("buscar_cidades").addEventListener("click", () => {
    fetch(url + "/login", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: senha
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => {
        console.log("Ultimo toke: " + json.token);
        fetch(url + "/cidades", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-access-token": json.token
            }
        })
        .then(res => res.json())
        .then(cidades => {
            myTable = document.getElementById("tabela_cidades");

            cidades.forEach(cidade => {
                let row = myTable.insertRow(myTable.length)
                let id_cell = row.insertCell(0);
                let nome_cell = row.insertCell(1);
                id_cell.innerHTML = cidade.id;
                nome_cell.innerHTML = cidade.nome;
                console.log(cidade);
            });
        })
    });
});