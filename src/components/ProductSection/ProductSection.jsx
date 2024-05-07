import React from 'react';
import './ProductSection.css';
import { FaDog, FaCat, FaFishFins } from "react-icons/fa6";
import { MdOutlinePestControlRodent } from "react-icons/md";

export const ProductSection = () => {

    return(
        <>
        <div className="product-container">
            <div className="product-wrap">
                <h1>Vea nuestros productos</h1>
                <p>Seleccione su animal</p>
                <div className="product-icons">
                    <a href="/products/dogs" className='p-icon-out'><FaDog className="p-icon" size={50}/></a>
                    <a href="/products/cat" className='p-icon-out'><FaCat className="p-icon" size={50}/></a>
                    <a href="/products/rod" className='p-icon-out'><MdOutlinePestControlRodent className="p-icon" size={50}/></a>
                    <a href="/products/fish" className='p-icon-out'><FaFishFins className="p-icon" size={50}/></a>
                </div>
                <a href="/products"><button className='product-sec-btn'>Ver todos los productos</button></a>
            </div> 
        </div> 
        </>
    )
};