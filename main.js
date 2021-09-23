const pokeContainer = document.getElementById("poke_container");
const number_of_pokemons = 151;
const pokemonTypes = {
  fire: "Fire",
  grass: "Grass",
  electric: "Electric",
  water: "Water",
  ground: "Ground",
  rock: "Rock",
  fairy: "Fairy",
  poison: "Poison",
  bug: "Bug",
  dragon: "Dragon",
  psychic: "Psychic",
  flying: "Flying",
  fighting: "Fighting",
  normal: "Normal",
};
const main_types = Object.keys(pokemonTypes);

const fetchPokemons = async () => {
  for (let i = 1; i <= number_of_pokemons; i++) {
    await getPokemon(i);
  }
};
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
};

fetchPokemons();

function createPokemonCard(pokemon) {
  const pokemonDiv = document.createElement("div");
  pokemonDiv.classList.add("pokemon-card");
  const pokeTypes = pokemon.types.map((el) => el.type.name);
  const type = main_types.find((type) => pokeTypes.indexOf(type) > -1);
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const typeConverter = type[0].toUpperCase() + type.slice(1);
  if (typeConverter === "Grass") {
    pokemonDiv.classList.add("grass");
  } else if (typeConverter === "Fire") {
    pokemonDiv.classList.add("fire");
  } else if (typeConverter === "Water") {
    pokemonDiv.classList.add("water");
  } else if (typeConverter === "Bug") {
    pokemonDiv.classList.add("bug");
  } else if (typeConverter === "Poison") {
    pokemonDiv.classList.add("poison");
  } else if (typeConverter === "Flying") {
    pokemonDiv.classList.add("flying");
  } else if (typeConverter === "Normal") {
    pokemonDiv.classList.add("normal");
  } else if (typeConverter === "Electric") {
    pokemonDiv.classList.add("electric");
  } else if (typeConverter === "Ground") {
    pokemonDiv.classList.add("ground");
  } else if (typeConverter === "Fairy") {
    pokemonDiv.classList.add("fairy");
  } else if (typeConverter === "Fighting") {
    pokemonDiv.classList.add("fighting");
  } else if (typeConverter === "Psychic") {
    pokemonDiv.classList.add("psychic");
  } else if (typeConverter === "Rock") {
    pokemonDiv.classList.add("rock");
  } else if (typeConverter === "Dragon") {
    pokemonDiv.classList.add("dragon");
  }
  const pokeInnerHTML = `
        <div class="image-container">
            <img class="normal" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"/>
            <img class="shiny" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png"/>
        </div>
        <div class="info">
            <span class="number">${pokemon.id}. </span>
            <span class="name">${name}</span>
            <div>
                <span class="type">${typeConverter}</span>
            </div>
            <a target="_blank" class="pokemon-info" href="https://bulbapedia.bulbagarden.net/wiki/${name}_(Pokémon)">+info</a>
        </div>
    `;
  pokemonDiv.innerHTML = pokeInnerHTML;

  pokeContainer.appendChild(pokemonDiv);
}
