//funcion ordenar de ordenar
window.pokemongo = {
  sortData: (data, sortBy, sortOrder) => { //Ordenar por alfabeto de menor a mayo
    if (sortBy === "name" && sortOrder === "a-z"){
      data.sort((a,b) =>{
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      } )
     return data;

    }

    if (sortBy === "name" && sortOrder === "z-a"){
      data.sort((a,b) =>{
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      } )
     return data
    }

    if (sortBy === "number" && sortOrder === "1-151"){
      data.sort((a,b) =>{
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0; 
      } )
     return data;
  }
  }
}