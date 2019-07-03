//mostrar la data
const parapintar = document.getElementById('cardInformation')
const showData = () => {
  let items = ''; //Variable vacía donde se imprimira cada elemento del data
  POKEMON.pokemon.forEach(element => {
    const num = element.num
    const name = element.name
    const img = element.img
    const type = element.type[0]
    
      items +=`<div>
      <h3>${num}</h3>
      <h4>${name}</h4>
      <figure>
        <img src=${img} alt="">
        </figure>
        <h5>${type}</h5>
    </div>`
      
    });
    // containerCard.innerHTML = items;
    parapintar.innerHTML = items
}
showData();





// intereaccion con lo de map

 // interaccion del boton filtrar por tipo de pokemon

//  document.getElementById("selectType").addEventListener("change",() =>{
//  document.getElementById("containerOrganized").innerHTML = " "  
    
//    let tipo =document.getElementById("selectType").value;
    
//      for (let i = 0; i <window.pokemongo.filterData(.pokemon, tipo).length ; i++){   

//      document.getElementById("containerOrganized").innerHTML += ` 
//     //  ${window.pokemongo.filterData(POKEMON.pokemon, tipo)[i].num}
//     //  ${window.pokemongo.filterData(POKEMON.pokemon, tipo)[i].img}.png">
//     //  ${window.pokemongo.filterData(POKEMON.pokemon, tipo)[i].name}
//     //  ${window.pokemongo.filterData(POKEMON.pokemon, tipo)[i].type} `  
//     //  }
//      console.log(tipo);