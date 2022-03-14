import React, { useState } from "react";

import { searchPokemon } from "../services/api";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOnClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input placeholder="Search Pokemon" onChange={handleOnChange} />
      </div>
      <div className="search-bar-btn">
        <button onClick={handleOnClick}> Search </button>
      </div>
      {/* <div>
        {pokemon && (
          <div>
            <div> Name: {pokemon.name} </div>
            <div> Weight: {pokemon.weight} </div>
            <img alt="pokemon-img" src={pokemon.sprites.front_default} />
          </div>
        )}
      </div> */}
    </div>
  );
}
