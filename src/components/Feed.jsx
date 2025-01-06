import React from 'react';
import Card from '../components/Card'
import "../css/Feed.css"

const Feed = ({pokemons}) => {
  return (
    <section className="pokemon-feed">
      {pokemons.map((pokemon, index) => (
        <Card data={pokemon} />
      ))}
    </section>
  )
}

export default Feed