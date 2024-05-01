import React from 'react';
import './Info.css';

export const Info = () => {

    return(
        <>
        <div className="info-container">
            <div className="info-wrap">
                    <div className="info-txt">
                        <h1>Quienes somos</h1>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempora explicabo voluptas quam? Tempore eum sunt temporibus provident, fugiat voluptas blanditiis aspernatur beatae laudantium rem. Nemo accusamus optio qui cumque!
                        Optio quae laborum voluptatibus nisi ipsum corrupti! Repudiandae vitae itaque quasi cumque possimus aspernatur, provident inventore unde ad labore hic vel quia 
                        </p>
                    </div>
                    <div className="img-hov">
                    <img
                        src="https://t3.ftcdn.net/jpg/06/00/98/62/360_F_600986226_vZqxpraF9mTn0RZdOD8TgDOVMtAR21uZ.jpg" 
                        alt="Image"
                        className='info-img'
                    />
                    </div>
            </div> 
        </div> 
        </>
    )
};