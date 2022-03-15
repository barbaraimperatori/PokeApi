import React from "react";
import PokemonCard from "./PokemonCard";

export default function Pokedex({ pokemon }) {
  return (
    <div>
      <div className="pokedex-header">
        <h1> Pokedex </h1>
        <div>Pagination</div>
      </div>
      <div className="pokedex-list">
        {pokemon.map((pokemon, index) => {
          return <PokemonCard pokemon={pokemon} key={pokemon.name} />;
        })}
      </div>
    </div>
  );
}
