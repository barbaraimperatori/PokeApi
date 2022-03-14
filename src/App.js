import React, { useState, useEffect } from "react";
import "./styles/styles.css";
import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";

import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");
  const [loading, setLoading] = useState(true);
  const [mainURL, setMainURL] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(mainURL, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextURL(res.data.next);
        setPrevURL(res.data.previous);
        console.log(res.data.results);
        // setPokemon(res.data.results.map((p) => p.name));
      });

    //cancel the request when we make a new one
    return () => cancel();
  }, [mainURL]);

  function nextPage() {
    setMainURL(nextURL);
  }

  function prevPage() {
    setMainURL(prevURL);
  }

  if (loading) return "Loading...";

  return (
    <>
      <Navbar />
      <div className="app">
        <SearchBar />
      </div>
      {/* <PokemonList pokemon={pokemon} /> */}
      <Pagination
        nextPage={nextURL ? nextPage : null}
        prevPage={prevURL ? prevPage : null}
      />
    </>
  );
}

export default App;
