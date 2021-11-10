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
                        {props.sendlanguage === "en" ? "Hello, my name is John Doe." : ""}
                        {props.sendlanguage === "fr" ? "Bonjour, je m'appelle John Doe." : ""}
                        {props.sendlanguage === "sp" ? "Hola, mi nombre es John Doe." : ""}
                        
                    </div><br />
                    <div className={"text"}>
                        {props.sendlanguage === "en" ? "I'm an electronic engineer who has a deep passion for programming and circuits design using microcontrollers." : ""}
                        {props.sendlanguage === "fr" ? "Je suis un ingénieur en électronique passionné par la programmation et la conception de circuits à l'aide de microcontrôleurs." : ""}
                        {props.sendlanguage === "sp" ? "I'm an electronic engineer who has a deep passion for programming and circuits design using microcontrollers." : ""}
                    </div><br />
                    <div className={"text"}>
                        {props.sendlanguage === "en" ? "My career as programmer starts at university where i had the change to learn what a microcontroller can do amd how to use them." : ""}
                        {props.sendlanguage === "fr" ? "Ma carrière de programmeur a commencé à l'université où j'ai eu la chance d'apprendre ce qu'un microcontrôleur peut faire et comment les utiliser." : ""}
                        {props.sendlanguage === "sp" ? "Mi carrera como programador comienza en la universidad, donde tuve el cambio para aprender qué puede hacer un microcontrolador y cómo usarlo." : ""}
                    </div><br />
                    <div className={"text"}>
                        {props.sendlanguage === "en" ? "After finishing my studies I started to work for a small company developing all kind of circuits and thanks to all this hard work I ended up having a really strong knowledge about all that is related to microcontrollers." : ""}
                        {props.sendlanguage === "fr" ? "Après avoir terminé mes études, j'ai commencé à travailler pour une petite entreprise développant toutes sortes de circuits et grâce à tout ce travail acharné, j'ai fini par avoir une très bonne connaissance de tout ce qui est lié aux microcontrôleurs." : ""}
                        {props.sendlanguage === "sp" ? "Después de terminar mis estudios comencé a trabajar para una pequeña empresa desarrollando todo tipo de circuitos y gracias a todo este arduo trabajo terminé teniendo un conocimiento muy fuerte sobre todo lo relacionado con los microcontroladores." : ""}   
                    </div><br />
                    <div className={"text"}>
                        {props.sendlanguage === "en" ? "My curiosity for programming lead me to create this site where I want to show all my expertise hoping that all this information may help the people who is starting in this beautiful world." : ""}
                        {props.sendlanguage === "fr" ? "Ma curiosité pour la programmation m'a amené à créer ce site où je souhaite montrer toute mon expertise en espérant que toutes ces informations puissent aider les personnes qui débutent dans ce beau monde." : ""}
                        {props.sendlanguage === "sp" ? "Mi curiosidad por la programación me llevó a crear este sitio donde quiero mostrar toda mi experiencia esperando que toda esta información pueda ayudar a las personas que se están iniciando en este hermoso mundo." : ""}
                        
                    </div><br />
                    <div className={"text"}>
                        {props.sendlanguage === "en" ? "If you have any question or need help with a project fell free to contact me through the Contact section." : ""}
                        {props.sendlanguage === "fr" ? "Si vous avez des questions ou avez besoin d'aide pour un projet, n'hésitez pas à me contacter via la section Contact." : ""}
                        {props.sendlanguage === "sp" ? "Si tienes alguna pregunta o necesitas ayuda con un proyecto, no dudes en ponerte en contacto conmigo a través de la sección Contacto." : ""}
                    </div><br />
                </div>
            </div>    
        </div>
    )
}

export default About;