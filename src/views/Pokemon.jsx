/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Pokemon.css';

export default function Pokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  const fetchCharacter = async () => {
    console.log(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const results = await result.json();
    setPokemon(() => results);
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <div id="Resultado">
      <div id="contenido">
        <h1>{pokemon?.name}</h1>
        <p>Peso:{pokemon?.weight}</p>
        <p>Altura:{pokemon?.height}</p>
        <p>hp:{pokemon?.stats[0].base_stat}</p>
        <p>Attack:{pokemon?.stats[1].base_stat}</p>
        <p>Defense:{pokemon?.stats[2].base_stat}</p>
        <p>Special Attack:{pokemon?.stats[3].base_stat}</p>
        <p>Special Defense:{pokemon?.stats[4].base_stat}</p>
        <p>Speed:{pokemon?.stats[5].base_stat}</p>
      </div>
      <dv id="imagen">
        <img src={pokemon?.sprites.front_default}></img>
      </dv>
    </div>
  );
}
