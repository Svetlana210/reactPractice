import { useState } from "react";
import { ImSearch } from "react-icons/im";
import locale from "./locale.json";
import useLang from "../../shared/useLang";
// import { toast } from "react-toastify";

const styles = { form: { marginBottom: 20 } };

const PokemonForm = ({ onSubmit }) => {
  const [pokemonName, setPokemonName] = useState("");

  const { lang } = useLang();
  const find = locale.find[lang];

  const handleNameChange = (event) => {
    setPokemonName(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (pokemonName.trim() === "") {
      alert("Enter the name of pokemon");
      return;
    }

    onSubmit(pokemonName);
    setPokemonName("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
      />
      <button type="submit">
        <ImSearch style={{ marginRight: 8 }} />
        {find}
      </button>
    </form>
  );
};

export default PokemonForm;
