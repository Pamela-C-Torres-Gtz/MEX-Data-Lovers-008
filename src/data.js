window.pokemongo = {
  filterData(data, condition)  {
    let tiposDePokemon;
    if (typeof condition === "str") 
    {
      tiposDePokemon = data.filter(tipos =>{
        return tipos.type.indexOf(condition) !== -1;
       })
          
    }
    else {
      tiposDePokemon = data.filter(candy =>{
        return candy.candy_count===(condition);
      })  
  }
  return tiposDePokemon; 
}
};



  /*
 window.pokemongoOrdenar = {

  sortData: (data, sortBy, sortOrder) => {
    if (sortBy === "name" && sortOrder === "a-z"){
      data.sort((a,b) =>{
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        //a debe ser igual b
        return 0;
      } )
     return data;

    } 

    if (sortBy === "name" && sortOrder === "z-a"){
      data.sort((a,b) =>{
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        //a debe ser igual b
        return 0;
        
      } )
     return data;

    } 
    

    if (sortBy === "number" && sortOrder === "1-151"){
      data.sort((a,b) =>{
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        //a debe ser igual b
        return 0;
        
      } )
     return data;
  }
},*/
