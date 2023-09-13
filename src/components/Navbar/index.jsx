import React from 'react';
import "./navbar.css";

export const Navbar = () => {
    return (
        <div className="container">
            <nav className='nav'>
                <div className='nav_brand'>
                    <a className='nav_link' href='#'>LOGO</a> 
                </div>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Conocenos</a></li>
                        <li><a href="#">Vacantes</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
            </nav>
        </div>   
    );
}

export default Navbar;