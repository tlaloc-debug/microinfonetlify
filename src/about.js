import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./about.css";

function About(props){
    return (
        <div>   
            <div style={{display: "flex", justifyContent: "center"}}>    
                <div className={"main-container"}>
                    <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
                        <div className={"myphoto"}></div>
                    </div>
                    <div className={"text"}>
                        {props.sendlanguage === "en" ? "Hello, my name is Erick Diaz." : ""}
                        {props.sendlanguage === "fr" ? "Bonjour, je m'appelle Erick Diaz." : ""}
                        {props.sendlanguage === "sp" ? "Hola, mi nombre es Erick Diaz." : ""}
                        
                    </div><br />
                    <div className={"text"}>
                        {props.sendlanguage === "en" ? "I am a Full-Stack Web Developer, canadian resident and currently living in Laval, Quebec. " : ""}
                        {props.sendlanguage === "fr" ? "Je suis un développeur Web Full-Stack, résident canadien et actuellement j'habite  à Laval, Québec. " : ""}
                        {props.sendlanguage === "sp" ? "Soy un desarrollador Web Full-Stack, residente canadiense y actualmente resido en Laval, Quebec." : ""}
                    </div><br />
                    <div className={"text"}>
                        {props.sendlanguage === "en" ? "My career as a developer begins in Mexico, where I finished my Mechatronics engineering to later embark on the world of work. " : ""}
                        {props.sendlanguage === "fr" ? "Ma carrière de développeur commence au Mexique, où j'ai terminé mon baccalaureat en genie mecanique pour me lancer plus tard dans le monde du travail. " : ""}
                        {props.sendlanguage === "sp" ? "Mi trayectoria como desarrollador comienza en Mexico, en donde terminé mi ingenieria Mecatronica para despues embarcarme en el mundo laboral." : ""}
                    </div><br />
                    <div className={"text"}>
                        {props.sendlanguage === "en" ? "After two years of working in this field, I decided to emigrate to Canada, where I had the opportunity to do a DEP in welding and currently I have more than three years of experience in this field. " : ""}
                        {props.sendlanguage === "fr" ? "Après deux ans de travail dans ce domaine, j'ai décidé d'émigrer au Canada, où j'ai eu l'opportunité de faire un DEP en soudure et actuellement j'ai plus de trois ans d'expérience dans ce domaine. " : ""}
                        {props.sendlanguage === "sp" ? "Despues de dos anos de trabajar en este dominio, decidí emigrara a Canada, en donde tuve la oportubidad de hacer un DEP en soldadura y actualmente cuento con mas de tres anos de experiencia en este campo." : ""}   
                    </div><br />
                    <div className={"text"}>
                        {props.sendlanguage === "en" ? "During this time I have learned on my own different development languages such as HTML, CSS, JavaScript for the Front-End and PHP, NodeJS, Python for the Back-End. " : ""}
                        {props.sendlanguage === "fr" ? "Pendant ce temps j'ai appris par moi-même différents langages de développement tels que HTML, CSS, JavaScript pour le Front-End et PHP, NodeJS, Python pour le Back-End. " : ""}
                        {props.sendlanguage === "sp" ? "Durante este tiempo he aprendido por mi cuenta distintos lenguajes de desarrollo como HTML, CSS, JavaScript para el Front-End y PHP, NodeJS, Python para el Back-End." : ""}
                        
                    </div><br />
                    <div className={"text"}>
                        {props.sendlanguage === "en" ? "As well as the operation of different frameworks such as React and Django. " : ""}
                        {props.sendlanguage === "fr" ? "Ainsi que le fonctionnement de différents frameworks tels que React et Django. " : ""}
                        {props.sendlanguage === "sp" ? "Asi como el funcionamiento de distintos frameworks como React y Django." : ""}
                    </div><br />
                </div>
            </div>    
        </div>
    )
}

export default About;