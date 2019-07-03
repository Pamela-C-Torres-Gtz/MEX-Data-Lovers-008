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
      <h3> # ${num}</h3>
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
