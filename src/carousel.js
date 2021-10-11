import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './alice-carousel.css';
import "./carousel.css";

function Carousel(props) {
    return (
        <div>
            <AliceCarousel autoPlay autoPlayInterval="5000" animationDuration="1000" infinite="true" disableButtonsControls="true"  >
                <div className={"photo photo1"}>
                    {props.sendlanguage === "en" ? "All the information you need on one page " : ""}
                    {props.sendlanguage === "fr" ? "Toutes les informations dont vous avez besoin sur une seule page " : ""}
                    {props.sendlanguage === "sp" ? "Toda la información que necesitas en una página" : ""}      
                </div>
                <div className={"photo photo2"}>
                    {props.sendlanguage === "en" ? "Providing the optimal tools for your project" : ""}
                    {props.sendlanguage === "fr" ? "Fournir les outils optimaux pour votre projet" : ""}
                    {props.sendlanguage === "sp" ? "Brindando las herramientas optima para tu proyecto" : ""} 
                </div>
                <div className={"photo3"}>
                    <div className={"photo3left"}></div>
                    <div className={"text-photo3"} >
                        <div >
                            {props.sendlanguage === "en" ? "The human touch " : ""}
                            {props.sendlanguage === "fr" ? "La touche humaine " : ""}
                            {props.sendlanguage === "sp" ? "El toque humano" : ""}
                            
                        </div>
                        <div >
                            {props.sendlanguage === "en" ? "of technology" : ""}
                            {props.sendlanguage === "fr" ? "de la technologie" : ""}
                            {props.sendlanguage === "sp" ? "de la tecnología" : ""}  
                        </div>
                    </div>
                    <div className={"photo3right"}></div>
                </div>
            </AliceCarousel>                  
        </div>
    )
}

export default Carousel;