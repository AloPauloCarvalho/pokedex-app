import React from 'react'

const Card = ({data}) => {
    
    return (
        <div className="card">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
                alt="pokemon" />
            <div className="text">
                <h4 className="name">
                    <span className="pokeId">1. </span>
                    Bulbasaur
                </h4>
            </div>
        </div>
    )
}

export default Card