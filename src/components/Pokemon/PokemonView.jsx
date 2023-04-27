import { useState, useEffect } from "react";
import PokemonDataView from "./DataView";
import PokemonErrorView from "./ErrorView";
import PokemonPendingView from "./PendingView";
import pokemonAPI from "../../services/pokemon-api";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

const PokemonInfo = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!pokemonName) {
      // Первый рендер, pokemonName это пустая строка, не делаем fetch и ниже ничего не выполняется
      return;
    }

    setStatus(Status.PENDING);

    pokemonAPI
      .fetchPokemon(pokemonName)
      .then((pokemon) => {
        // Порядок важен!!!! Сначала кладем данные, потом статус.
        setPokemon(pokemon);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <div>Enter the name of pokemon</div>;
  }

  if (status === Status.PENDING) {
    return <PokemonPendingView />;
  }

  if (status === Status.REJECTED) {
    return <PokemonErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return <PokemonDataView pokemon={pokemon} />;
  }
};
export default PokemonInfo;
