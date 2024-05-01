import React from 'react';
import './Contact.css';

export const Contact = () => {

    return(
        <>
        <div className="contact-zone">
            <h1>Contacto</h1>
            <div className="card-zone">
                <div className='card'>
                    <div className="card-top">
                        <h1>Ubicacion</h1>       
                    </div>
                    <div className="card-content">
                        <p>
                            Noya 3259
                            B1824, Lanús Oeste
                            Entre Quintana y Miguel Cane
                        </p>
                    </div>
                </div>
                <div className='card'>
                    <div className="card-top">
                        <h1>Horario de atencion</h1>
                    </div>
                    <div className="card-content">
                        <p>
                            Lunes a Sábado
                            de 09:00 a 20:00
                        </p>
                    </div>
                </div>
                <div className='card'>
                    <div className="card-top">
                        <h1>Telefonos</h1>
                    </div>
                    <div className="card-content">
                        <p>4242-9134</p>
                        <p>4247-6861</p>
                        <p>11-5943-8114</p>                    
                    </div>
                </div>
                <div className='card'>
                    <div className="card-top">
                        <h1>Redes Sociales</h1>
                    </div>
                    <div className="card-content">
                        <div className="btn-container">   
                            <a href="#"><button className='contact-btn'>WhatsApp</button></a>
                            <a href="#"><button className='contact-btn'>Instagram</button></a>
                            <a href="#"><button className='contact-btn'>Facebook</button></a>
                            <a href="#"><button className='contact-btn'>Mail</button></a>
                        </div>                     
                    </div>
                </div>
            </div>
            <div className="map-zone">
                <p>ACA VA EL MAPA</p>
            </div>
        </div>
        </>
    )
};