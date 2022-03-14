import React from "react";

export default function Navbar() {
  let imgURL =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div>
        <div>
          <img alt="poke-api-logo" src={imgURL} className="nav-bar-logo" />
        </div>
      </div>
    </nav>
  );
}
