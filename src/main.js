const parapintar = document.getElementById('cardInformation')
const showData = () => {
  let items = ''; //Variable vacía donde se imprimira cada elemento del data
  POKEMON.pokemon.forEach(element => {
    const num = element.num
    const name = element.name
    const img = element.img
    const type = element.type[0]
    
  
      items +=`<div class= "card-item">
      
      <p class ="poke-num"> # ${num}</p>
      <p class ="poke-name">${name}</p>
      <figure class ="poke-img">
        <img src="${img}" alt= " " />
        </figure>
        <p class ="poke-type">${type}</p>
    </div>`
      
    });
    // containerCard.innerHTML = items;
    parapintar.innerHTML = items
}
showData();



    /*ejecucion de ordenar
    const paraordenar= document.getElementById("container_organized"); //pinta el listado ordenado
    const orderData= () => { 
    let div_container ='';
      document.getElementById("selectOrder").addEventListener("change", () => {
       
        POKEMON.pokemon.forEach(element => {
     if (document.getElementById("selectOrder").value === "a-z" || document.getElementById("selectOrder").value === "z-a") {
      document.getElementById("container_organized").innerHTML +=` 
      
      <h5 class="header"><b>#${window.pokemongo.sortData(POKEMON.pokemon, "name", document.getElementById("selectOrder").value)[i].num}</b></h5>
      <div class="card horizontal">
        <div class="card-image">
          <img src=${window.pokemongo.sortData(POKEMON.pokemon, "name", document.getElementById("selectOrder").value)[i].num}.png" alt="${window.pokemongo.sortData(POKEMON.pokemon, "name", document.getElementById("selectOrder").value)[i].img}">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <h5> ${window.pokemongo.sortData(POKEMON.pokemon, "name", document.getElementById("selectOrder").value)[i].name}</h5>
          </div>
          <div class="card-action">
              <button class="card_container waves-effect waves btn modal-trigger  " href="#modal1" >Ficha pokemon</button>
          </div>
        </div>
      </div>
    </div>`    
  }
   div_container(window.pokemongo.sortData(POKEMON.pokemon, "name", document.getElementById("selectOrder").value),card_Pokemon); 
   }
  });
}
    orderData();
  */