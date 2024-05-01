import React from 'react';
import './Navbar.css';

export const Navbar = () => {

    return(
        <>
        <nav>
            <div className="nav-left">
                <p>AAA</p>
            </div>
            <div className="nav-right">
                <ol>
                    <a href="#" className="nav-li">Servicios</a>
                    <a href="#" className="nav-li">Productos</a>
                    <a href="#" className="nav-li">Nosotros</a>
                    <a href="#" className="nav-li">Contacto</a>
                </ol>
            </div>
        </nav>
        </>
    )
};