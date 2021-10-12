import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./mytoolslist.css";

function Tools(props){
    return (
        <div>
            <Container>

                <h2>
                    {props.sendlanguage === "en" ? "Software" : ""}
                    {props.sendlanguage === "fr" ? "Logiciel" : ""}
                    {props.sendlanguage === "sp" ? "Programas" : ""}   
                </h2>

                <Row  >
                    <Col sm="2">
                        <div><a href="http://www.ccsinfo.com/content.php?page=compilers">PIC C</a></div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "CCS developed the first C Compiler for Microchip microcontrollers over 20 years ago and continues to provide software solutions to developers of embedded applications using PIC MCU and PIC24/dsPIC DSC devices. CCS compilers are easy to use and quick to learn. For the less experienced programmer, a detailed textbook explaining the C language and how it may be applied to PIC® microcontrollers." : ""}
                            {props.sendlanguage === "fr" ? "CCS a développé le premier compilateur C pour les microcontrôleurs Microchip il y a plus de 20 ans et continue de fournir des solutions logicielles aux développeurs d'applications embarquées utilisant des dispositifs PIC MCU et PIC24/dsPIC DSC. Les compilateurs CCS sont faciles à utiliser et rapides à apprendre. Pour le programmeur moins expérimenté, un manuel détaillé expliquant le langage C et comment il peut être appliqué aux microcontrôleurs PIC®. " : ""}
                            {props.sendlanguage === "sp" ? "CCS desarrolló el primer compilador C para microcontroladores Microchip hace más de 20 años y continúa brindando soluciones de software a los desarrolladores de aplicaciones integradas que utilizan dispositivos PIC MCU y PIC24 / dsPIC DSC. Los compiladores CCS son fáciles de usar y rápidos de aprender. Para el programador menos experimentado, un libro de texto detallado que explica el lenguaje C y cómo se puede aplicar a los microcontroladores PIC®. " : ""}
                            
                        </div>
                    </Col>                    
                </Row>

                <hr />

                <Row  >
                    <Col sm="2">
                        <div><a href="https://www.labcenter.com/simulation/">Proteus</a></div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "The most exciting and important feature of Proteus VSM is its ability to simulate the interaction between software running on a microcontroller and any analogue or digital electronics connected to it. The micro-controller model sits on the schematic along with the other elements of your product design. It simulates the execution of your object code (machine code), just like a real chip. If the program code writes to a port, the logic levels in circuit change accordingly, and if the circuit changes the state of the processor's pins, this will be seen by your program code, just as in real life." : ""}
                            {props.sendlanguage === "fr" ? "La caractéristique la plus intéressante et la plus importante de Proteus VSM est sa capacité à simuler l'interaction entre le logiciel exécuté sur un microcontrôleur et toute électronique analogique ou numérique qui lui est connectée. Le modèle de microcontrôleur se trouve sur le schéma avec les autres éléments de la conception de votre produit. Il simule l'exécution de votre code objet (code machine), à la manière d'une véritable puce. Si le code du programme écrit sur un port, les niveaux logiques du circuit changent en conséquence, et si le circuit change l'état des broches du processeur, cela sera vu par votre code de programme, comme dans la vraie vie. " : ""}
                            {props.sendlanguage === "sp" ? "La característica más emocionante e importante de Proteus VSM es su capacidad para simular la interacción entre el software que se ejecuta en un microcontrolador y cualquier electrónica analógica o digital conectada a él. El modelo de microcontrolador se encuentra en el esquema junto con los otros elementos del diseño de su producto. Simula la ejecución de su código objeto (código de máquina), como un chip real. Si el código del programa se escribe en un puerto, los niveles lógicos en el circuito cambian en consecuencia, y si el circuito cambia el estado de los pines del procesador, esto se verá en el código del programa, al igual que en la vida real. " : ""}
                            
                        </div>
                    </Col>                    
                </Row>

                <h2>
                    {props.sendlanguage === "en" ? "Hardware" : ""}
                    {props.sendlanguage === "fr" ? "Instruments" : ""}
                    {props.sendlanguage === "sp" ? "Instrumentos" : ""}    
                </h2>

                <Row  >
                    <Col sm="2">
                        <div><a href="https://www.amazon.com/Pic-Programmer/s?k=Pic+Programmer">Programador de PICs</a></div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "A device called a programmer is usually used to transfer code from a computer to the PIC. Most of the PICs that Microchip distributes today incorporate ICSP (In Circuit Serial Programming) or LVP (Low Voltage Programming), allowing the PIC to be programmed directly into the target circuit. " : ""}
                            {props.sendlanguage === "fr" ? "Un appareil appelé programmeur est généralement utilisé pour transférer le code d'un ordinateur vers le PIC. La plupart des PIC que Microchip distribue aujourd'hui incorporent ICSP (In Circuit Serial Programming) ou LVP (Low Voltage Programming), permettant au PIC d'être programmé directement dans le circuit cible. " : ""}
                            {props.sendlanguage === "sp" ? "Para transferir el código de un ordenador al PIC normalmente se usa un dispositivo llamado programador. La mayoría de PIC que Microchip distribuye hoy en día incorporan ICSP (In Circuit Serial Programming, programación serie incorporada) o LVP (Low Voltage Programming, programación a bajo voltaje), lo que permite programar el PIC directamente en el circuito destino. " : ""}
                        </div>
                    </Col>                    
                </Row>

                <hr />

                <Row  >
                    <Col sm="2">
                        <div><a href="https://www.arduino.cc/">Arduino</a></div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "Arduino is an open-source electronics platform based on easy-to-use hardware and software. Arduino boards are able to read inputs - light on a sensor, a finger on a button, or a Twitter message - and turn it into an output - activating a motor, turning on an LED, publishing something online. You can tell your board what to do by sending a set of instructions to the microcontroller on the board. To do so you use the Arduino programming language (based on Wiring), and the Arduino Software (IDE), based on Processing." : ""}
                            {props.sendlanguage === "fr" ? "Arduino est une plate-forme électronique open source basée sur du matériel et des logiciels faciles à utiliser. Les cartes Arduino sont capables de lire les entrées - lumière sur un capteur, un doigt sur un bouton ou un message Twitter - et les transformer en sortie - activer un moteur, allumer une LED, publier quelque chose en ligne. Vous pouvez dire à votre carte quoi faire en envoyant un ensemble d'instructions au microcontrôleur sur la carte. Pour ce faire, vous utilisez le langage de programmation Arduino (basé sur le câblage) et le logiciel Arduino (IDE), basé sur le traitement. " : ""}
                            {props.sendlanguage === "sp" ? "Arduino es una plataforma electrónica de código abierto basada en hardware y software fáciles de usar. Las placas Arduino pueden leer entradas (luz en un sensor, un dedo en un botón o un mensaje de Twitter) y convertirlo en una salida, activando un motor, encendiendo un LED, publicando algo en línea. Puede decirle a su tablero qué hacer enviando un conjunto de instrucciones al microcontrolador en el tablero. Para hacerlo, utiliza el lenguaje de programación Arduino (basado en Wiring) y el Software Arduino (IDE), basado en Processing. " : ""}
                        </div>
                    </Col>                    
                </Row>

                <h2>
                    {props.sendlanguage === "en" ? "Tools" : ""}
                    {props.sendlanguage === "fr" ? "Outils" : ""}
                    {props.sendlanguage === "sp" ? "Herramientas" : ""}
                </h2>

                <Row  >
                    <Col sm="2">
                        <div><a href="https://www.amazon.com/s?k=Solderless+Breadboard">Protoboard</a></div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "A breadboard is a rectangular plastic board with lots of little holes in it. These holes allow you to easily insert electronic components to prototype (that is, build and test an early version of) an electronic circuit, such as with a battery, a switch, a resistor, and an LED (light-emitting diode). " : ""}
                            {props.sendlanguage === "fr" ? "Une Protoboard est une planche en plastique rectangulaire avec beaucoup de petits trous. Ces trous vous permettent d'insérer facilement des composants électroniques pour prototyper (c'est-à-dire construire et tester une première version) d'un circuit électronique, par exemple avec une batterie, un interrupteur, une résistance et une LED (diode électroluminescente). " : ""}
                            {props.sendlanguage === "sp" ? "Una Protoboard es una tabla rectangular de plástico con un montón de pequeños agujeros en ella. Estos agujeros permiten insertar fácilmente componentes electrónicos para hacer un prototipo (es decir, construir y probar una versión temprana de) un circuito electrónico, como por ejemplo con una batería, un interruptor, una resistencia y un LED (diodo emisor de luz)." : ""}
                        </div>
                        <div>
                            {props.sendlanguage === "en" ? "It is a simple tool used to easily connect electrical components and cables to each other. Only certain types of components and cables are applicable for breadboard use. As long as the components have through-hole pins (as opposed to surface mount), they are probably applicable for breadboards. " : ""}
                            {props.sendlanguage === "fr" ? "C'est un outil simple utilisé pour connecter facilement des composants électriques et des câbles entre eux. Seuls certains types de composants et de câbles sont applicables à l'utilisation de la maquette. Tant que les composants ont des broches traversantes (par opposition au montage en surface), ils sont probablement applicables pour les maquettes. " : ""}
                            {props.sendlanguage === "sp" ? "Es una herramienta simple que se utiliza para conectar fácilmente los componentes eléctricos y los cables entre sí. Sólo ciertos tipos de componentes y cables son aplicables para el uso de la protoboard. Siempre que los componentes tengan pasadores con agujeros pasantes (a diferencia del montaje en superficie), probablemente sean aplicables para las protoboard." : ""}
                        </div>
                    </Col>                    
                </Row>

                <hr />

                <Row  >
                    <Col sm="2">
                        <div><a href="https://www.amazon.com/s?k=multimeter">
                            {props.sendlanguage === "en" ? "Multimeter " : ""}
                            {props.sendlanguage === "fr" ? "Multimètre " : ""}
                            {props.sendlanguage === "sp" ? "Multimetro" : ""}
                        </a></div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "A multimeter, also called a multimeter1 or tester, is a portable electrical instrument for directly measuring active electrical quantities, such as currents and potentials (voltages), or passive, such as resistances, capacities, and others. Measurements can be made for direct or alternating current and in various measurement ranges each. There are analogical ones and later digital ones whose function is the same, with some added variant, have been introduced." : ""}
                            {props.sendlanguage === "fr" ? "Un multimètre, également appelé multimètre1 ou testeur, est un instrument électrique portable permettant de mesurer directement des quantités électriques actives, telles que des courants et des potentiels (tensions), ou passives, telles que des résistances, des capacités, etc. Les mesures peuvent être effectuées pour un courant continu ou alternatif et dans différentes plages de mesure chacune. Il existe des analogiques et plus tard des numériques dont la fonction est la même, avec quelques variantes ajoutées, ont été introduits. " : ""}
                            {props.sendlanguage === "sp" ? "Un multímetro, también denominado polímetro1​ o tester, es un instrumento eléctrico portátil para medir directamente magnitudes eléctricas activas, como corrientes y potenciales (tensiones), o pasivas, como resistencias, capacidades y otras. Las medidas pueden realizarse para corriente continua o alterna y en varios márgenes de medida cada una. Los hay analógicos y posteriormente se han introducido los digitales cuya función es la misma, con alguna variante añadida. " : ""}
                        </div>
                    </Col>                    
                </Row>

                <hr />

                <Row  >
                    <Col sm="2">
                        <div><a href="https://www.amazon.com/s?k=power+supply+variable">
                            {props.sendlanguage === "en" ? "Power supply" : ""}
                            {props.sendlanguage === "fr" ? "Source de courant " : ""}
                            {props.sendlanguage === "sp" ? "Fuente de alimentacion" : ""}
                            
                        </a></div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "In electronics, the power supply or power source is the device that converts alternating current (AC) into one or more direct currents (DC), which feed the different circuits of the electronic device to which it is connected (computer, television, printer, router, etc.). " : ""}
                            {props.sendlanguage === "fr" ? "En électronique, l'alimentation ou source d'alimentation est l'appareil qui convertit le courant alternatif (AC) en un ou plusieurs courants continus (DC), qui alimentent les différents circuits de l'appareil électronique auquel il est connecté (ordinateur, télévision, imprimante, routeur, etc.). " : ""}
                            {props.sendlanguage === "sp" ? "En electrónica, la fuente de alimentación o fuente de potencia es el dispositivo que convierte la corriente alterna (CA), en una o varias corrientes continuas (CC), que alimentan los distintos circuitos del aparato electrónico al que se conecta (computadora, televisor, impresora, router, etc.). " : ""}
                        </div>
                    </Col>                    
                </Row>

                <hr />

                <Row  >
                    <Col sm="2">
                        <div><a href="https://www.amazon.com/s?k=signal+generator">
                            {props.sendlanguage === "en" ? "Signal generator " : ""}
                            {props.sendlanguage === "fr" ? "Générateur de signal" : ""}
                            {props.sendlanguage === "sp" ? "Generador de señales" : ""}
                            
                        </a></div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "A signal, function or waveform generator is an electronic laboratory device that generates both analog and digital periodic or non-periodic signal patterns. It is commonly used in the design, testing and repair of electronic devices; although it can also have artistic uses and be used in medicine. " : ""}
                            {props.sendlanguage === "fr" ? "Un générateur de signal, de fonction ou de forme d'onde est un appareil électronique de laboratoire qui génère à la fois des modèles de signaux analogiques et numériques périodiques ou non périodiques. Il est couramment utilisé dans la conception, les tests et la réparation d'appareils électroniques ; bien qu'il puisse aussi avoir des usages artistiques et être utilisé en médecine. " : ""}
                            {props.sendlanguage === "sp" ? "Un generador de señales, de funciones o de formas de onda es un dispositivo electrónico de laboratorio que genera patrones de señales periódicas o no periódicas tanto analógicas como digitales. Se emplea normalmente en el diseño, prueba y reparación de dispositivos electrónicos; aunque también puede tener usos artísticos y ser empleado en la medicina. " : ""}
                        </div>
                    </Col>                    
                </Row>

                <hr />

                <Row  >
                    <Col sm="2">
                        <div><a href="https://www.amazon.com/s?k=oscilloscope">
                            {props.sendlanguage === "en" ? "Oscilloscope" : ""}
                            {props.sendlanguage === "fr" ? "Oscilloscope " : ""}
                            {props.sendlanguage === "sp" ? "Osciloscopio" : ""}
                        </a></div>
                    </Col>
                    <Col>
                        <div>
                            {props.sendlanguage === "en" ? "An oscilloscope is an electronic display instrument for the graphical representation of electrical signals that can vary over time. It is widely used in signal electronics, often in conjunction with a spectrum analyzer. " : ""}
                            {props.sendlanguage === "fr" ? "Un oscilloscope est un instrument d'affichage électronique pour la représentation graphique de signaux électriques qui peuvent varier dans le temps. Il est largement utilisé dans l'électronique de signal, souvent en conjonction avec un analyseur de spectre. " : ""}
                            {props.sendlanguage === "sp" ? "Un osciloscopio es un instrumento de visualización electrónico para la representación gráfica de señales eléctricas que pueden variar en el tiempo. Es muy usado en electrónica de señales, frecuentemente junto a un analizador de espectro. " : ""}
                        </div>
                        <br /><br />
                    </Col>                    
                </Row>

            </Container>

        </div>
    )
}

export default Tools;