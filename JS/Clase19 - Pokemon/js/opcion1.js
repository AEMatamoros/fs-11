let pokemonsList = document.getElementById("pokemon-list");

function fetchPokemons() {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.results.forEach((pokemon) => {
        // console.log(pokemon);
        fetchPokemonData(pokemon.url);
      });
    });
}

function fetchPokemonData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      createCard(data);
    });
}

function createCard(pokemon) {
  const card = document.createElement("div");
  card.classList.add("col-md-3", "mb-4");
  const cardContent = document.createElement("div");
  cardContent.classList.add("card", "h-100");
  const img = document.createElement("img");
  img.src = `${pokemon.sprites.front_default}`;

  cardContent.append(img);
  card.append(cardContent);
  pokemonsList.append(card);

  // pokemonsList.innerHTML += `<div class="card col-md-3 mb-4 " style="width: 18rem">
  //                               <img class="card-img-top" src="${pokemon.sprites.front_default}" alt="Card image cap" />
  //                               <div class="card-body h-100">
  //                                 <h5 class="card-title">Card title</h5>
  //                                 <p class="card-text">
  //                                   Some quick example text to build on the card title and make up the
  //                                   bulk of the card's content.
  //                                 </p>
  //                                 <a href="#" class="btn btn-primary">Go somewhere</a>
  //                               </div>
  //                           </div>`;
}

fetchPokemons();
