import React from "react";

export default function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <div className="img-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-img"
        />
      </div>
      <div className="card-body">
        <div className="card-title">
          <h3> {pokemon.name} </h3>
          <span> #{pokemon.id} </span>
        </div>
        <div className="pokemon-type">
          {" "}
          {pokemon.types.map((type, index) => {
            return (
              <div key={index} className="type-details">
                {" "}
                {type.type.name}{" "}
              </div>
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
}
