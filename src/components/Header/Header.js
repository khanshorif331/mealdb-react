import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <nav className='nav'>
            <div>
                <h1>The Fake MealDB</h1>
            </div>
            <div className='navigation'>
                <a href="#home">Home</a>
                <a href="#meals">Meals</a>
                <a href="#about">About Us</a>
                <a href="#contact"><input type="text" /><button>Search</button></a>
            </div>
        </nav>
    );
};

export default Header;<h1>This is the header</h1>