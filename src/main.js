  const parapintar = document.getElementById('cardInformation')
  const dataPoke= POKEMON.pokemon 
  const selectTypePK= document.getElementById('selectType')
  const selectEvolution= document.getElementById('evolution')
  const newArray = []
  const newData = []
  
  const showData/* const print pokemons*/ = () => {
    let items = ''; //Variable vacía donde se imprimira cada elemento del data
    dataPoke.forEach(element => {
    const num = element.num
    const name = element.name
    const img = element.img
    const type = element.type[0]
    
  
      items +=`<div class= "col-4 card-item">
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

/*/Funcion y yamado de filtrado por tipo de pokemon
selectTypePK.addEventListener("change",() =>{
document.getElementById("container_organized").innerHTML = " "

let tipoPk = selectTypePK.value

const showType = () => {
  for (let index = 0; index < btnPok.length; index ++)
  {
   btnPok[index].addEventListener('click', ()=>{
    const idTarget= event.target.id
    const newArray=dataPok.filter(pokemon != 0> pokemon.type[0] === 'fire')//crear una nueva variable   
    newData = newArray
    printPokemon(newData)
   })
  }
  pickEgg.addEventListener('change', () =>{
    const valueUser = pickEgg.value
    
    if (valueUser =='tiene'){
      const pokemonEgg = newData.filter(havegg => havegg.egg)
      printPokemon(pokemonEgg)
    } else if(valueUser == 'Not in Eggs') {
       const pokemonEgg = newData.filter(havegg => havegg.egg )
       printPokemon(pokemonEgg)
    };
abrirFicha(window.pokemon.filterData(POKEMON.pokemon, tipo), card_Pokemon);
}
showType()*/
