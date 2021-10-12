import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function Glosary(props){
    return (
        <div>
            <Container>
                <Row  style={{marginTop: "15px"}}>
                    <Col sm="2">
                        <div>
                            {props.sendlanguage === "en" ? "Microcontroller " : ""}
                            {props.sendlanguage === "fr" ? "Microcontrôleur " : ""}
                            {props.sendlanguage === "sp" ? "Microcontrolador" : ""}
                        </div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "A microcontroller (abbreviated µC, UC or mCU) is a programmable integrated circuit, capable of executing the orders recorded in its memory. It is composed of several functional blocks that fulfill a specific task. A microcontroller includes within it the three main functional units of a computer: central processing unit, memory, and input / output peripherals. " : ""}
                            {props.sendlanguage === "fr" ? "Un microcontrôleur (en abrégé µC, UC ou mCU) est un circuit intégré programmable, capable d'exécuter les ordres enregistrés dans sa mémoire. Il est composé de plusieurs blocs fonctionnels qui remplissent une tâche spécifique. Un microcontrôleur comprend en son sein les trois principales unités fonctionnelles d'un ordinateur : unité centrale de traitement, mémoire et périphériques d'entrée/sortie. " : ""}
                            {props.sendlanguage === "sp" ? "Un microcontrolador (abreviado µC, UC o mCU) es un circuito integrado programable, capaz de ejecutar las órdenes grabadas en su memoria. Está compuesto de varios bloques funcionales que cumplen una tarea específica. Un microcontrolador incluye en su interior las tres principales unidades funcionales de una computadora: unidad central de procesamiento, memoria y periféricos de entrada/salida. " : ""}
                            
                        </div>
                    </Col>                    
                </Row>

                <Row  style={{marginTop: "15px"}}>
                    <Col sm="2">
                        <div>
                            {props.sendlanguage === "en" ? "Memory" : ""}
                            {props.sendlanguage === "fr" ? "Mémoire " : ""}
                            {props.sendlanguage === "sp" ? "Memoria" : ""}  
                        </div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "A memory chip is an integrated circuit made out of millions of capacitors and transistors that can store data or can be used to process code." : ""}
                            {props.sendlanguage === "fr" ? "Une puce mémoire est un circuit intégré composé de millions de condensateurs et de transistors qui peuvent stocker des données ou peuvent être utilisés pour traiter du code. " : ""}
                            {props.sendlanguage === "sp" ? "Un chip de memoria es un circuito integrado hecho de millones de condensadores y transistores que pueden almacenar datos o pueden usarse para procesar código. " : ""}
                        </div>
                    </Col>                    
                </Row>

                <Row style={{marginTop: "15px"}} >
                    <Col sm="2">
                        <div>EEPROM</div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "EEPROM or stands for Electrically Erasable Programmable Read-Only Memory. It is a type of ROM memory that can be electrically programmed, erased and reprogrammed, unlike the EPROM that has to be erased by a device that emits ultraviolet rays. " : ""}
                            {props.sendlanguage === "fr" ? "EEPROM ou signifie mémoire morte programmable effaçable électriquement. C'est un type de mémoire ROM qui peut être programmée, effacée et reprogrammée électriquement, contrairement à l'EPROM qui doit être effacée par un appareil émettant des rayons ultraviolets." : ""}
                            {props.sendlanguage === "sp" ? "EEPROM o son las siglas de Electrically Erasable Programmable Read-Only Memory (ROM programable y borrable eléctricamente). Es un tipo de memoria ROM que puede ser programada, borrada y reprogramada eléctricamente, a diferencia de la EPROM que ha de borrarse mediante un aparato que emite rayos ultravioleta." : ""}
                        </div>
                    </Col>                    
                </Row>

                <Row style={{marginTop: "15px"}} >
                    <Col sm="2">
                        <div>RAM</div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "Random Access Memory (RAM) is used as the working memory of computers and other devices for the operating system, programs, and most software. All the instructions executed by the central processing unit (CPU) and other units of the computer are loaded into RAM, as well as containing the data that the different programs manipulate. " : ""}
                            {props.sendlanguage === "fr" ? "La mémoire vive (RAM) est utilisée comme mémoire de travail des ordinateurs et autres périphériques pour le système d'exploitation, les programmes et la plupart des logiciels. Toutes les instructions exécutées par l'unité centrale (CPU) et les autres unités de l'ordinateur sont chargées dans la RAM, en plus de contenir les données que les différents programmes manipulent. " : ""}
                            {props.sendlanguage === "sp" ? "La memoria de acceso aleatorio (Random Access Memory, RAM) se utiliza como memoria de trabajo de computadoras y otros dispositivos para el sistema operativo, los programas y la mayor parte del software. En la RAM se cargan todas las instrucciones que ejecuta la unidad central de procesamiento (CPU) y otras unidades del computador, además de contener los datos que manipulan los distintos programas." : ""} 
                        </div>
                    </Col>                    
                </Row>

                <Row style={{marginTop: "15px"}} >
                    <Col sm="2">
                        <div>Pins</div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "In computing, a port is an interface through which different types of data can be sent and received. " : ""}
                            {props.sendlanguage === "fr" ? "En informatique, un port est une interface à travers laquelle différents types de données peuvent être envoyés et reçus. " : ""}
                            {props.sendlanguage === "sp" ? "En informática, un puerto es una interfaz a través de la cual se pueden enviar y recibir los diferentes tipos de datos." : ""}
                        </div>
                    </Col>                    
                </Row>

                <Row style={{marginTop: "15px"}} >
                    <Col sm="2">
                        <div>Line</div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "Indicates a series of internal characteristics of the microcontroller. For more information, visit this site: " : ""}
                            {props.sendlanguage === "fr" ? "Indique une série de caractéristiques internes du microcontrôleur. Pour plus d'informations, visitez ce site : " : ""}
                            {props.sendlanguage === "sp" ? "Indica una serie de características internas del microcontrolador. Para mas informacion, visite este sitio:" : ""}
                        </div>
                        <div><a href="https://microchipdeveloper.com/faq:70">Microchip Developer Help</a></div>
                    </Col>                    
                </Row>

                <Row style={{marginTop: "15px"}} >
                    <Col sm="2">
                        <div>
                            {props.sendlanguage === "en" ? "ADC (analog to digital converter)" : ""}
                            {props.sendlanguage === "fr" ? "ADC (Convertisseur analogique-numérique)" : ""}
                            {props.sendlanguage === "sp" ? "ADC (Conversor analógico a digital)" : ""}
                        </div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "In electronics, an analog-to-digital converter (ADC, A/D, or A-to-D) is a system that converts an analog signal, such as a sound picked up by a microphone or light entering a digital camera, into a digital signal. " : ""}
                            {props.sendlanguage === "fr" ? "En électronique, un convertisseur analogique-numérique (ADC, A/D ou A-to-D) est un système qui convertit un signal analogique, tel qu'un son capté par un microphone ou une lumière entrant dans un appareil photo numérique, en un signal numérique. " : ""}
                            {props.sendlanguage === "sp" ? "En electrónica, un convertidor de analógico a digital (ADC, A / D o A-to-D) es un sistema que convierte una señal analógica, como un sonido captado por un micrófono o una luz que ingresa a una cámara digital, en una señal digital. " : ""}  
                        </div>
                    </Col>                    
                </Row>

                <Row  style={{marginTop: "15px"}}>
                    <Col sm="2">
                        <div>
                            {props.sendlanguage === "en" ? "RES (resolution)" : ""}
                            {props.sendlanguage === "fr" ? "RES (résolution )" : ""}
                            {props.sendlanguage === "sp" ? "RES (resolución )" : ""}
                        </div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "The ADC resolution is defined as the smallest incremental voltage that can be recognized and thus causes a change in the digital output. It is expressed as the number of bits output by the ADC. Therefore, an ADC which converts the analog signal to a 12-bit digital value has a resolution of 12 bits." : ""}
                            {props.sendlanguage === "fr" ? "La résolution ADC est définie comme la plus petite tension incrémentale pouvant être reconnue et provoque ainsi une modification de la sortie numérique. Il est exprimé en nombre de bits émis par l'ADC. Par conséquent, un CAN qui convertit le signal analogique en une valeur numérique de 12 bits a une résolution de 12 bits. " : ""}
                            {props.sendlanguage === "sp" ? "La resolución del ADC se define como el voltaje incremental más pequeño que se puede reconocer y, por lo tanto, causa un cambio en la salida digital. Se expresa como el número de bits emitidos por el ADC. Por lo tanto, un ADC que convierte la señal analógica en un valor digital de 12 bits tiene una resolución de 12 bits." : ""}
                        </div>
                    </Col>                    
                </Row>


                <Row  style={{marginTop: "15px"}}>
                    <Col sm="2">
                        <div>
                            {props.sendlanguage === "en" ? "COMP (Comparator)" : ""}
                            {props.sendlanguage === "fr" ? "COMP (comparateur)" : ""}
                            {props.sendlanguage === "sp" ? "COMP (comparador)" : ""}
                        </div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "A comparator is an electronic circuit, either analog or digital, capable of comparing two input signals and varying the output depending on which is greater. " : ""}
                            {props.sendlanguage === "fr" ? "Un comparateur est un circuit électronique, analogique ou numérique, capable de comparer deux signaux d'entrée et de faire varier la sortie en fonction de celui qui est le plus grand. " : ""}
                            {props.sendlanguage === "sp" ? "Un comparador es un circuito electrónico, ya sea analógico o digital, capaz de comparar dos señales de entrada y variar la salida en función de cuál es mayor. " : ""}   
                        </div>
                    </Col>                    
                </Row>

                <Row style={{marginTop: "15px"}} >
                    <Col sm="2">
                        <div>Timer</div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? 'The steady stream of pulses that a timer counts is usually called the timer "clock."  The steady time output signals that a timer can be configured to produce are usually called "ticks."' : ""}
                            {props.sendlanguage === "fr" ? 'Le flux continu d\'impulsions qu\'une minuterie compte est généralement appelé "horloge" de la minuterie. Les signaux de sortie à temps constant qu\'une minuterie peut être configurée pour produire sont généralement appelés « ticks ». ' : ""}
                            {props.sendlanguage === "sp" ? 'El flujo constante de pulsos que cuenta un temporizador generalmente se denomina "reloj" del temporizador. Las señales de salida de tiempo constante que se puede configurar para producir un temporizador se denominan normalmente "tics". ' : ""}
                        </div>
                    </Col>                    
                </Row>

                <Row style={{marginTop: "15px"}} >
                    <Col sm="2">
                        <div>Serial</div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "This field indicates if the microcontroller allows serial communication and, if so, what type of serial communication. Serial communication is a communication protocol between devices that is standard on almost any computer. " : ""}
                            {props.sendlanguage === "fr" ? "Ce champ indique si le microcontrôleur autorise la communication série et, si oui, quel type de communication série. La communication série est un protocole de communication entre les appareils qui est standard sur presque tous les ordinateurs. " : ""}
                            {props.sendlanguage === "sp" ? "Este campo indica si el microcontrolador permite la comunicación serial y, en tal caso, que tipo de cominucacion serial. La comunicación serial es un protocolo de comunicación entre dispositivos que se incluye de manera estándar en prácticamente cualquier computadora." : ""}
                        </div>
                    </Col>                    
                </Row>

                <Row style={{marginTop: "15px"}} >
                    <Col sm="2">
                        <div>Model</div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "Represents the family to which the microcontroller corresponds. " : ""}
                            {props.sendlanguage === "fr" ? "Représente la famille à laquelle correspond le microcontrôleur. " : ""}
                            {props.sendlanguage === "sp" ? "Representa la familia a la que corresponde el microcontrolador." : ""}
                        </div>
                    </Col>                    
                </Row>

                <Row style={{marginTop: "15px"}} >
                    <Col sm="2">
                        <div>Packages</div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "Indicates the physical appearance that the microcontroller will have. " : ""}
                            {props.sendlanguage === "fr" ? "Indique l'apparence physique qu'aura le microcontrôleur." : ""}
                            {props.sendlanguage === "sp" ? "Indica el aspecto físico que tendrá el microcontrolador." : ""}
                        </div>
                    </Col>                    
                </Row>

                <Row style={{marginTop: "15px"}} >
                    <Col sm="2">
                        <div>Speed</div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "Every microcontroller requires a circuit that indicates the working speed, it is the so-called oscillator or clock. This generates a high frequency square wave that is used as a signal to synchronize all the operations of the system. This value indicates the maximum speed of the external oscillator that the microcontroller supports. " : ""}
                            {props.sendlanguage === "fr" ? "Chaque microcontrôleur nécessite un circuit qui indique la vitesse de travail, c'est ce qu'on appelle l'oscillateur ou l'horloge. Cela génère une onde carrée à haute fréquence qui est utilisée comme signal pour synchroniser toutes les opérations du système. Cette valeur indique la vitesse maximale de l'oscillateur externe pris en charge par le microcontrôleur. " : ""}
                            {props.sendlanguage === "sp" ? "Todo microcontrolador requiere de un circuito que le indique la velocidad de trabajo, es el llamado oscilador ó reloj. Éste genera una onda cuadrada de alta frecuencia que se utiliza como señal para sincronizar todas las operaciones del sistema. Este valor indica la velocidad máxima del oscilador externo que el microcontrolador soporta." : ""}
                            
                        </div>
                    </Col>                    
                </Row>

                <Row style={{marginTop: "15px"}} >
                    <Col sm="2">
                        <div>
                            {props.sendlanguage === "en" ? "OSC (internal oscillator)" : ""}
                            {props.sendlanguage === "fr" ? "OSC (oscillateur interne )" : ""}
                            {props.sendlanguage === "sp" ? "OSC (oscilador interno )" : ""}
                        </div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "Some microcontrollers have an internal oscillator that avoids the need to connect an external physical oscillator to synchronize the microcontroller instructions. This value indicates the maximum speed at which the internal oscillator works. " : ""}
                            {props.sendlanguage === "fr" ? "Certains microcontrôleurs ont un oscillateur interne qui évite d'avoir à connecter un oscillateur physique externe pour synchroniser les instructions du microcontrôleur. Cette valeur indique la vitesse maximale à laquelle fonctionne l'oscillateur interne. " : ""}
                            {props.sendlanguage === "sp" ? "Algunos microcontroladores cuentan con un oscilador interno que evita la necesidad de conectar un oscilador fisico externo para sincronizar las instrucciones del microcontrolador. Este valor indica la velocidad maxima a la que trabaja el oscilador interno." : ""}
                        </div>
                    </Col>                    
                </Row>
            </Container>
        </div>
    )
}

export default Glosary;