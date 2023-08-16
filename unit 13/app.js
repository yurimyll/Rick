let id_personagem = 0;
let bnt = document.getElementById("verMais");
bnt.onclick = Atualizar;
Atualizar()
function Atualizar (){
    id_personagem += 1;
    fetch('https://rickandmortyapi.com/api/character/' +id_personagem)
    .then(data => {return data.json()})
    .then(json => {
        document.getElementById('name').innerHTML = json.name;
        document.getElementById('status').innerHTML = json.status;
        document.getElementById('species').innerHTML = json.species;
        document.getElementById("gender").innerHTML = json.gender;
        document.getElementById("perfil").src = json.image;

        let local = document.getElementById("localization");
        local.innerHTML = json.origin.name + "-" + json.location.name;

    });

}