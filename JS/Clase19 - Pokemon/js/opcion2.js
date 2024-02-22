document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("previous-page").textContent = "<";
  document.getElementById("next-page").textContent = ">";
  document.getElementById("previous-page").style.display = "none";

  const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
  let pokemonsList = document.getElementById("pokemon-list");
  let limit = 20;
  let offset = 0;
  let totalPages = 0;
  let currentPage = 1;
  // console.log(params);
  function fetchPokemons(params) {
    pokemonsList.innerHTML = "<h1>Cargando Pokemons</h1>";
    fetch(`${BASE_URL}?${params}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        totalPages = Math.ceil(data.count / limit);
        totalElements = data.count;
        updatePaginationControls();
        let promiseArray = data.results.map((pokemon) => {
          // console.log(pokemon);
          return fetch(pokemon.url);
        });
        // console.log(promiseArray);
        Promise.all(promiseArray)
          .then((allResponses) => {
            // console.log(allResponses);
            return Promise.all(allResponses.map((r) => r.json()));
          })
          .then((dataObj) => {
            pokemonsList.textContent = "";
            createCard(dataObj);
          })
          .catch((er) => {
            alert("Fallo la peticion");
          });
      })
      .catch((er) => {
        alert("Fallo la peticion");
      })
      .finally(() => {});
  }

  function createCard(pokemons) {
    let nodePokemons = pokemons.map((pokemon) => {
      let card = document.createElement("div");
      card.classList.add("col-md-3", "mb-4");
      let cardContent = document.createElement("div");
      cardContent.classList.add("card", "h-100");
      let img = document.createElement("img");
      img.src = `${pokemon.sprites.front_default}`;
      cardContent.append(img);
      card.append(cardContent);
      return card;
    });

    pokemonsList.append(...nodePokemons);
  }

  function goNext() {
    offset = offset + limit;
    currentPage = currentPage + 1;
    fetchPokemons(
      new URLSearchParams({
        limit,
        offset,
      })
    );
    updatePaginationControls();
  }
  function goBack() {
    offset = offset - limit;
    currentPage = currentPage - 1;
    fetchPokemons(
      new URLSearchParams({
        limit,
        offset,
      })
    );
    updatePaginationControls();
  }

  function setLimit(e) {
    limit = parseInt(e.target.value);
    offset = 0;
    currentPage = 1;
    fetchPokemons(
      new URLSearchParams({
        limit,
        offset,
      })
    );
    updatePaginationControls();
  }

  function goTo(page) {
    // console.log(page);
    offset = (page - 1) * limit;
    currentPage = page;
    fetchPokemons(
      new URLSearchParams({
        limit,
        offset,
      })
    );
  }

  function goFirst() {
    offset = 0;
    currentPage = 1;
    fetchPokemons(
      new URLSearchParams({
        limit,
        offset,
      })
    );
  }

  function goLast() {
    offset = totalPages * limit - limit;
    currentPage = totalPages;
    fetchPokemons(
      new URLSearchParams({
        limit,
        offset,
      })
    );
  }

  function updatePaginationControls() {
    if (offset === 0) {
      document.getElementById("previous-page").style.display = "none";
    } else {
      document.getElementById("previous-page").style.display = "inline-block";
    }

    if (currentPage == totalPages) {
      document.getElementById("next-page").style.display = "none";
    } else {
      document.getElementById("next-page").style.display = "inline-block";
    }

    let controls = [];
    let goFirstControl = "";
    if (currentPage !== 1) {
      goFirstControl = document.createElement("button");
      goFirstControl.textContent = "<<";
      goFirstControl.addEventListener("click", () => {
        goFirst();
      });
    }

    let goLastControl = "";
    if (currentPage !== totalPages) {
      goLastControl = document.createElement("button");
      goLastControl.textContent = ">>";
      goLastControl.addEventListener("click", () => {
        goLast();
      });
    }

    disabledControl = document.createElement("button");
    disabledControl.textContent = "...";

    document.getElementById("page-info").textContent = "";
    for (let index = 0; index < totalPages; index++) {
      let pageControl = document.createElement("button");
      pageControl.textContent = index + 1;
      if (currentPage === index + 1) {
        pageControl.style.backgroundColor = "green";
      }
      pageControl.addEventListener("click", () => {
        goTo(index + 1);
      });
      controls.push(pageControl);
    }
    let inicioStart = Math.max(0, currentPage - 1);
    let finStart = Math.min(controls.length - 1, inicioStart + 3);

    let inicioEnd = Math.max(0, totalPages - 4);
    let finEnd = Math.min(controls.length - 1, inicioEnd + 4);
    document
      .getElementById("page-info")
      .append(
        goFirstControl,
        ...controls.slice(inicioStart, finStart),
        disabledControl,
        ...controls.slice(inicioEnd, finEnd),
        goLastControl
      );
  }

  document.getElementById("next-page").addEventListener("click", goNext);
  document.getElementById("previous-page").addEventListener("click", goBack);
  document.getElementById("limit").addEventListener("change", setLimit);

  fetchPokemons(
    new URLSearchParams({
      limit,
      offset,
    })
  );
});
