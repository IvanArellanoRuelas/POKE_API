import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Pokemones.css';
export default function Pokemones() {
  const [pokemones, setPokemones] = useState([]);

  const fetchCharacters = async () => {
    const result = await fetch('https://pokeapi.co/api/v2/pokemon');
    const { results } = await result.json();
    setPokemones(() => results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div id="seleccionador">
      <h1>Selecciona un Pokemon</h1>
      <div style={{ display: 'grid' }}>
        {pokemones.map((pokemon) => {
          return (
            <Link
              to={`/Pokemones/${pokemon.name}`}
              key={`Pokemones-${pokemon.name}`}
            >
              {pokemon.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
