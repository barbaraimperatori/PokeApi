import React, { useState, useEffect } from "react";
import "./styles/styles.css";
import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Pokedex from "./components/Pokedex";

import { getPokemonDetails, getPokemonList } from "./services/api";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");
  const [loading, setLoading] = useState(true);
  // const [mainURL, setMainURL] = useState("https://pokeapi.co/api/v2/pokemon");

  // useEffect(() => {
  //   setLoading(true);
  //   let cancel;
  //   axios
  //     .get(mainURL, {
  //       cancelToken: new axios.CancelToken((c) => (cancel = c)),
  //     })
  //     .then((res) => {
  //       setLoading(false);
  //       setNextURL(res.data.next);
  //       setPrevURL(res.data.previous);
  //       console.log(res.data.results);
  //       // setPokemon(res.data.results.map((p) => p.name));
  //     });

  //   //cancel the request when we make a new one
  //   return () => cancel();
  // }, [mainURL]);

  const fetchPokemonList = async () => {
    try {
      const data = await getPokemonList();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonDetails(pokemon.url);
      });
      // waits for all the results of the promises (every pokemon detail url)
      const result = await Promise.all(promises);
      setPokemon(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  // function nextPage() {
  //   setMainURL(nextURL);
  // }

  // function prevPage() {
  //   setMainURL(prevURL);
  // }

  // if (loading) return "Loading...";

  return (
    <>
      <Navbar />
      <div className="app">
        <SearchBar />
        <Pokedex pokemon={pokemon} />
      </div>

      {/* <Pagination
        nextPage={nextURL ? nextPage : null}
        prevPage={prevURL ? prevPage : null}
      /> */}
    </>
  );
}

export default App;
