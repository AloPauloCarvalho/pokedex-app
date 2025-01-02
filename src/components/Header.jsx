import React from 'react';
import logo from '../assets/logo.png';
import Button from '../components/Button';
import '../css/Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <img src={logo} alt="Pokedex Logo Image" />
                <div className="search-container">
                    <input type="text" placeholder='Search by name or ID' />
                    <Button label={'Search'}/>
                </div>
            </nav>
        </header>
    )
}

export default Header