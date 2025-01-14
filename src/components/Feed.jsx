import React from 'react';
import Card from '../components/Card'
import "../css/Feed.css"
import { Link } from 'react-router-dom';

const Feed = ({ pokemons }) => {
  return (
    <section className="pokemon-feed">
      {pokemons.map((pokemon, index) => (
        <Link to={`/${pokemon.name}`} key={pokemon.name}>
          <Card data={pokemon} />
        </Link>
      ))}
    </section>
  )
}

export default Feed