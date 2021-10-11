import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./home.css";

function Home(props){
    
    return (
        <div>
            <Container>
                <hr />
                <Row xs="1" sm="10"  className={"row justify-content-center main-text"} >
                    <Col sm="2" >
                        <div className={"pic image"}></div>
                    </Col>
                    <Col sm="7" >
                        <h4>
                            {props.sendlanguage === "en" ? "What is a microcontroller?" : ""}
                            {props.sendlanguage === "fr" ? "Qu'est-ce qu'un microcontrôleur?" : ""}
                            {props.sendlanguage === "sp" ? "¿Que es un microcontrolador?" : ""}
                        </h4>
                        <div>
                            {props.sendlanguage === "en" ? "A microcontroller (abbreviated µC, UC or mCU) is a programmable integrated circuit, capable of executing the orders recorded in its memory. It is composed of several functional blocks that fulfill a specific task. A microcontroller includes within it the three main functional units of a computer: central processing unit, memory, and input / output peripherals. " : ""}
                            {props.sendlanguage === "fr" ? "Un microcontrôleur (en abrégé µC, UC ou mCU) est un circuit intégré programmable, capable d'exécuter les ordres enregistrés dans sa mémoire. Il est composé de plusieurs blocs fonctionnels qui remplissent une tâche spécifique. Un microcontrôleur comprend en son sein les trois principales unités fonctionnelles d'un ordinateur : unité centrale de traitement, mémoire et périphériques d'entrée/sortie. " : ""}
                            {props.sendlanguage === "sp" ? "Un microcontrolador (abreviado µC, UC o mCU) es un circuito integrado programable, capaz de ejecutar las órdenes grabadas en su memoria. Está compuesto de varios bloques funcionales que cumplen una tarea específica. Un microcontrolador incluye en su interior las tres principales unidades funcionales de una computadora: unidad central de procesamiento, memoria y periféricos de entrada/salida." : ""}
                             
                        </div>
                    </Col>                    
                </Row>
                <hr />
                <Row  xs="1" sm="10"  className={"row justify-content-center main-text"}>
                    <Col sm="6">
                        <h4>
                            {props.sendlanguage === "en" ? "Microcontroller applications " : ""}
                            {props.sendlanguage === "fr" ? "Applications de microcontrôleur " : ""}
                            {props.sendlanguage === "sp" ? "Aplicaciones de los microcontroladores" : ""}   
                        </h4>
                        <div>
                            {props.sendlanguage === "en" ? "Microcontrollers have many applications in digital systems. For example for the design of automatic temperature controllers, dispensing machines, biomedical devices. In the entertainment industry as toys. Even in aerospace applications, measurement systems, instrumentation systems. Also for example for the development and automation of scientific experiments. Even to automate processes, slot machines, microwave ovens, washing machines, audio controllers, video controllers. Finally, such as fingerprint readers, cameras, cell phones and so on, we can talk about endless applications where microcontrollers are useful. " : ""}
                            {props.sendlanguage === "fr" ? "Les microcontrôleurs ont de nombreuses applications dans les systèmes numériques. Par exemple pour la conception de régulateurs automatiques de température, de distributeurs, de dispositifs biomédicaux. Dans l'industrie du divertissement comme jouets. Même dans les applications aérospatiales, les systèmes de mesure, les systèmes d'instrumentation. Aussi par exemple pour le développement et l'automatisation d'expériences scientifiques. Même pour automatiser les processus, les machines à sous, les fours à micro-ondes, les machines à laver, les contrôleurs audio, les contrôleurs vidéo. Enfin, comme les lecteurs d'empreintes digitales, les appareils photo, les téléphones portables, etc., nous pouvons parler d'applications infinies où les microcontrôleurs sont utiles. " : ""}
                            {props.sendlanguage === "sp" ? "Los microcontroladores tienen un muchas aplicaciones en los sistemas digitales. Por ejemplo para el diseño de controladores de temperatura automáticos, maquinas dispensadoras, dispositivos biomédicos. En la industria del entretenimiento como juguetes. Incluso en aplicaciones aeroespaciales, sistemas de medición, sistemas de instrumentación. También por ejemplo para el desarrollo y automatización de experimentos científicos. Incluso para automatizar procesos, maquinas tragamonedas, hornos de microondas, lavadoras, controladores de audio, controladores de video. Finalmente como lectores de huellas digitales, cámaras, celulares y así sucesivamente podemos platicar un sin fin de aplicaciones en donde los microcontroladores son útiles." : ""}
                            
                        </div>
                    </Col>
                    <Col sm="3">
                        <div className={"aplication image"}></div>
                    </Col>                    
                </Row>
                <hr />
                <Row  xs="1" sm="10"  className={"row justify-content-center main-text"}>
                    <Col sm="2">
                        <div className={"program image"}></div>
                    </Col> 
                    <Col sm="7">
                        <h4>
                            {props.sendlanguage === "en" ? "How do you program a microcontroller? " : ""}
                            {props.sendlanguage === "fr" ? "Comment programmer un microcontrôleur ? " : ""}
                            {props.sendlanguage === "sp" ? "¿Como se programa un microcontrolador?" : ""}
                        </h4>
                        <div>
                            {props.sendlanguage === "en" ? "To program a microcontroller we need a computer and a pic programmer. There are several programming languages such as assembler, C ++ and python as well as different programs that facilitate the programming of the pic, the most common being PIC C. The programmer of pics is connected through the USB port of the computer and the program is loaded directly from the computer to the microcontroller. " : ""}
                            {props.sendlanguage === "fr" ? "Pour programmer un microcontrôleur, nous avons besoin d'un ordinateur et d'un programmeur d'images. Il existe plusieurs langages de programmation tels que assembleur, C++ et python ainsi que différents programmes qui facilitent la programmation du pic, le plus courant étant le PIC C. Le programmeur de pics est connecté via le port USB de l'ordinateur et le programme est chargé directement de l'ordinateur au microcontrôleur. " : ""}
                            {props.sendlanguage === "sp" ? "Para prorgramar un microcontrolador necesitamos una computadora y un programador de pics. Existen diversos lenguajes de programacion como ensamblador, C++ y python asi como distintos programas que nos facilitan la programacion del pic, siendo el mas comun PIC C. El programador de pics se conecta mediante el puerto USB de la computadora y se carga directamente el programa desde la computadora al microcontrolador." : ""}
                            
                        </div>
                    </Col>
                                   
                </Row>
                <hr />
                <Row  xs="1" sm="10"  className={"row justify-content-center main-text"}>
                    <Col sm="7">
                        <h4>
                            {props.sendlanguage === "en" ? "Can you simulate a microcontroller? " : ""}
                            {props.sendlanguage === "fr" ? "Pouvez-vous simuler un microcontrôleur ? " : ""}
                            {props.sendlanguage === "sp" ? "¿Se puede simular un microcontrolador?" : ""}
                            
                        </h4>
                        <div>
                            {props.sendlanguage === "en" ? "There are several tools that allow the simulation of a microcontroller in the computer, in case of not having a real microcontroller. The most powerful circuit simulation software is Proteus, it has a large number of electronic components as well as a large number of microcontrollers. " : ""}
                            {props.sendlanguage === "fr" ? "Il existe plusieurs outils qui permettent la simulation d'un microcontrôleur dans l'ordinateur, en cas de ne pas avoir de vrai microcontrôleur. Le logiciel de simulation de circuit le plus puissant est Proteus, il possède un grand nombre de composants électroniques ainsi qu'un grand nombre de microcontrôleurs. " : ""}
                            {props.sendlanguage === "sp" ? "Existen diversas herramientas que permiten la simulacion de un micrcocontrolador en la computadora, en caso de no contar con un microcontrolador real. El software de simulacion de circuitos mas poderoso es Proteus, cuenta con una gran cantidad de componentes electronicos asi como un gran numero de microcontroladores. " : ""}
                            
                        </div>
                        <div>
                            {props.sendlanguage === "en" ? "If you want to know more, visit the following link:" : ""}
                            {props.sendlanguage === "fr" ? "Si vous voulez en savoir plus, visitez le lien suivant:" : ""}
                            {props.sendlanguage === "sp" ? "Si deseas saber mas, visita el siguiente link:" : ""}
                           
                        </div>
                        <div><a href="https://www.labcenter.com/">Sitio Web Labcenter Electronics</a></div>
                    </Col>
                    <Col sm="2">
                        <div className={"circuit image"}></div>
                    </Col> 
                                   
                </Row>
                <hr />
                <Row  xs="1" sm="10"  className={"row justify-content-center main-text"}>
                    <Col sm="2">
                        <div className={"arduino image"}></div>
                    </Col> 
                    <Col sm="7">
                        <h4>
                            {props.sendlanguage === "en" ? "Cards on the market" : ""}
                            {props.sendlanguage === "fr" ? "Cartes dans le marché" : ""}
                            {props.sendlanguage === "sp" ? "Tarjetas comerciales" : ""}
                        </h4>
                        <div>
                            {props.sendlanguage === "en" ? "There are several cards on the market that have a microcontroller and all the necessary components preassembled that allow the interaction of the microcontroller with the computer without the need for a pics prigram. These cards have a didactic purpose and their objective is to facilitate the valuable learning of the use of microcontrollers. These cards allow direct connection both to the USB port of the computer and to the pins of the pic so it is possible to program and test the circuit practically at the same time. " : ""}
                            {props.sendlanguage === "fr" ? "Il existe plusieurs cartes sur le marché qui ont un microcontrôleur et tous les composants nécessaires pré-assemblés qui permettent l'interaction du microcontrôleur avec l'ordinateur sans avoir besoin d'un programme d'images. Ces cartes ont un but didactique et leur objectif est de faciliter l'apprentissage précieux de l'utilisation des microcontrôleurs. Ces cartes permettent une connexion directe à la fois au port USB de l'ordinateur et aux broches de la photo ainsi il est possible de programmer et tester le circuit pratiquement en même temps. " : ""}
                            {props.sendlanguage === "sp" ? "Existen diversas tarjetas en el mercado que cuentan con un microcontrolador y con todos los componentes necesarios prensamblados que ermiten la interaccion del microcontrolador con la computadora sin la necesidad de un prigramador de pics. Dichas tarjetas tienen una finalidad diddctica y su objetivo es facilitar el priceso de aprendizaje del manejo de los microcontroladores. Estas tarjetas permiten la conexion directa tanto al puerto USB de la computadora como a los pines del pic por lo que es posible programar y probar el circuito practicamente al mismo tiempo. " : ""}
                        </div>
                        <div>
                            {props.sendlanguage === "en" ? "The most common board of this type is the Arduino." : ""}
                            {props.sendlanguage === "fr" ? "La carte la plus courante de ce type est l'Arduino." : ""}
                            {props.sendlanguage === "sp" ? "La tarjeta mas comun de este tipo es el Arduino." : ""}
                            
                        </div>
                    </Col>
                                   
                </Row>  
            </Container>
        </div>
    )
}

export default Home;