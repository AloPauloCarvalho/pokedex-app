import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Feed from '../components/Feed'


const Home = () => {

    const[pokemons, setPokemons] = useState([]);
    const[offSet, setOffSet] = useState(() => {
        const storedOffSet = sessionStorage.getItem('offSet');
        return storedOffSet ? parseInt(storedOffSet, 10) : 0;
    });

    useEffect(() =>{
        async function fetchPokemon() {
            const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offSet}`;

            const res = await fetch(apiUrl);
            const data = await res.json();

            setPokemons(data.results);
        }

        fetchPokemon();
    }, [offSet]);

    return (
        <div className='Home'>
            <Header />
            <Feed pokemons={pokemons}/>
            <div className="pagination">
                <button className="btn">Previous</button>
                <button className="btn">Next</button>
            </div>
        </div>
    )
}

export default Home