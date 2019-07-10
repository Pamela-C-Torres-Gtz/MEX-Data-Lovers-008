
  /*resolucion de duda por parte de jonh el 9 de julio 2019
  
  

  const printPkemons = (dataPok) =>{
    let str = '';
    dataPok.forEch(pokemon => {
     str += `<div>
     <h3>${pokemon.name}</h3>
     <p>${pokemon.type}</p>
     <p>${pokemon.egg}</p>
     <img src =${pokemon.img}> 
 </div>`
    });
  }

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
    });
  }*/
+
  window.pokemon = {
    filterData(data, condition) {
    let valueUser;//let tiposDePokemon;
    if (valueUser == 'str')
    {
      const selectEvolution = newData.filter(havenext_evolution => havenext_evolution.next_evolution)
      parapintar(selectEvolution)
    } else if (valueUser == 'prev_evolution') {
      const selectEvolution = newData.filter(havenext_evolution => havenext_evolution.next_evolution )
      parapintar(selectEvolution)
    };
    }
  };
  return tiposDePoke;