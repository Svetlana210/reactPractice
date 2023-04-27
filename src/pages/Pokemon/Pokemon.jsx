import { useState } from "react";

import PokemonForm from "../../components/Pokemon/Form";
import PokemonInfo from "../../components/Pokemon/PokemonView";

const PokemonView = () => {
  const [pokemonName, setPokemonName] = useState("");

  const handleFormSubmit = (pokemonName) => {
    setPokemonName(pokemonName);
  };

  return (
    <>
      <PokemonForm onSubmit={handleFormSubmit} />
      <PokemonInfo pokemonName={pokemonName} />
    </>
  );
};
export default PokemonView;
