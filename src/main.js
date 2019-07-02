//mostrar la data

`const showData = () => {
  let items = ''; //Variable vacía donde se imprimira cada elemento del data
  POKEMON.pokemon.forEach(element => {
      items +=
      `<div class="data-card">
              <div class="card">
                  <div class="img">
                       <img class="character-img" src="${element.image}" />
                  </div>
                  <div class="info">
                      <p class="character-name"> ${element.name}</p>
                      <p>Numero: ${element.species}</p>
                      <p>Nombre ${element.origin.name}</p>
                       ${element.type.forEach((item)=>{
                      <p>Typo del pokemon ${element.name}: ,item </p>
                   </div>
            </div>
          </div>`
  });
  containerCard.innerHTML = items;
}
showData();`



// intereaccion con lo de map

 // interaccion del boton filtrar por tipo de pokemon

 document.getElementById("selectType").addEventListener("change",() =>{
 document.getElementById("containerOrganized").innerHTML = " "  
    
   let tipo =document.getElementById("selectType").value;
    
     for (let i = 0; i <window.pokemongo.filterData(.pokemon, tipo).length ; i++){   

     document.getElementById("containerOrganized").innerHTML += ` 
     ${window.pokemongo.filterData(POKEMON.pokemon, tipo)[i].num}</b>
     ${window.pokemongo.filterData(POKEMON.pokemon, tipo)[i].img}.png">
     ${window.pokemongo.filterData(thepokemon.pokemon, tipo)[i].name}
     ${window.pokemongo.filterData(thepokemon.pokemon, tipo)[i].type} `  
     }
     console.log(tipo);