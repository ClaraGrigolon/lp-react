import React from 'react';
import './Header.css'

function Header(){
    return(
        <>
            <header className='header'>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Caracteristicas</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
export default Header;