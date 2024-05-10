import React, {useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./search.css";
import Glassanimation from "./glass-animation.js";
import Diagramanimation from "./diagram-animation.js";
import Picsanimation from "./pics-animation.js";
import * as Scroll from 'react-scroll';

function Find(props){

    const scroller = Scroll.scroller;
    const Element  = Scroll.Element;

    const [picSearch, setpicSearch] = useState("");
    const [List, setList]= useState([]);

    const [memory, setmemory] = useState(0);
    const [eeprom, seteeprom] = useState(0);
    const [ram, setram] = useState(0);
    const [pins, setpins] = useState(0);
    const [chanels, setchanels] = useState(0);
    const [resolution, setresolution] = useState(0);
    const [maxspeed, setmaxspeed] = useState(0);

    const [timer8, settimer8] = useState(false);
    const [timer16, settimer16] = useState(false);
    const [serial, setserial] = useState(false);
    const [intosc, setintosc] = useState(false);

    const searchPic = () => {
        axios.post("https://all-in-one-proxy-3187fcbdcf4f.herokuapp.com/https://connectto-cdf4284ddfed.herokuapp.com/searchpicname", {picName: picSearch}).then((response1)=>{
            
            if (response1.data==="done"){
                axios.get("https://all-in-one-proxy-3187fcbdcf4f.herokuapp.com/https://connectto-cdf4284ddfed.herokuapp.com/searchpic").then((response2)=>{
                        setList(response2.data);
                        console.log(response2.data)
                        scroller.scrollTo("results", {
                            duration: 600,
                            smooth: true,
                          });
                    }) 
            }})
        }

    const advanceSearch = () => {
        axios.post("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/advancesearchname", {
                        picMemory: memory,
                        picEeprom: eeprom,
                        picRam: ram,
                        picPins: pins,
                        picChanels: chanels,
                        picResolution: resolution,
                        picMax: maxspeed,
                        picTimer8: timer8,
                        picTimer16: timer16,
                        picSerial: serial,
                        picIntosc: intosc
                    }).then((response1)=>{
            
            if (response1.data==="done"){
                axios.get("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/advancesearch").then((response2)=>{
                        setList(response2.data);
                        scroller.scrollTo("results", {
                            duration: 600,
                            smooth: true,
                          });
                    }) 
            }})
        }
    
    const searchFamily = (familydata) => {
        
        axios.post("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/searchfamilyname", {picFamily: familydata}).then((response1)=>{
            
            if (response1.data==="done"){
                axios.get("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/searchfamily").then((response2)=>{
                        setList(response2.data);
                        scroller.scrollTo("results", {
                            duration: 600,
                            smooth: true,
                          });
                    }) 
            }})
        }

    const scrollToSearch = () =>  {
        scroller.scrollTo("startSearch", {
            duration: 600,
            smooth: true,
          })
        }

    const memoryChange = (mymemory) => {
        if (isNaN(Number(mymemory))) {
            document.getElementById("memoryinput").style.color="red";
        } else {
            document.getElementById("memoryinput").style.color="black";
            setmemory(mymemory)
        }
    }

    const eepromChange = (myeeprom) => {
        if (isNaN(Number(myeeprom))) {
            document.getElementById("eeprominput").style.color="red";
        } else {
            document.getElementById("eeprominput").style.color="black";
            seteeprom(myeeprom)
        }
    }

    const ramChange = (myram) => {
        if (isNaN(Number(myram))) {
            document.getElementById("raminput").style.color="red";
        } else {
            document.getElementById("raminput").style.color="black";
            setram(myram)
        }
    }

    const pinsChange = (mypins) => {
        if (isNaN(Number(mypins))) {
            document.getElementById("pinsinput").style.color="red";
        } else {
            document.getElementById("pinsinput").style.color="black";
            setpins(mypins)
        }
    }

    const chanelsChange = (mychanels) => {
        if (isNaN(Number(mychanels))) {
            document.getElementById("chanelsinput").style.color="red";
        } else {
            document.getElementById("chanelsinput").style.color="black";
            setchanels(mychanels)
        }
    }

    const resolutionChange = (myresolution) => {
        if (isNaN(Number(myresolution))) {
            document.getElementById("resolutioninput").style.color="red";
        } else {
            document.getElementById("resolutioninput").style.color="black";
            setresolution(myresolution)
        }
    }

    const speedChange = (myspeed) => {
        if (isNaN(Number(myspeed))) {
            document.getElementById("speedinput").style.color="red";
        } else {
            document.getElementById("speedinput").style.color="black";
            setmaxspeed(myspeed)
        }
    }

    return (
        <div>
            <Container>
                <Element name="startSearch"></Element>
                <Row xs="1" sm="4" className={"searchname"} >
                    <Col className={"search-picture"}>
                        <div className={"search-picture-animation"}>
                            <Glassanimation />
                        </div>
                    </Col>

                    <Col>
                        <div className={"search-title"}>
                            {props.sendlanguage === "en" ? "Search by Name" : ""}
                            {props.sendlanguage === "fr" ? "Recherche par nom" : ""}
                            {props.sendlanguage === "sp" ? "Buscar por nombre" : ""}
                        </div>
                        <div style={{marginTop: "20px"}}>
                            {props.sendlanguage === "en" ? "Make an inquiry to find the characteristics of a specific microcontroller, for example PIC18F4550. " : ""}
                            {props.sendlanguage === "fr" ? "Faites une enquête pour trouver les caractéristiques d'un microcontrôleur spécifique, par exemple PIC18F4550. " : ""}
                            {props.sendlanguage === "sp" ? "Haga una consulta par aencontrar las caracteristicas de un microcontrollador especifico, por ejemplo PIC18F4550." : ""}
                        </div>
                        
                    </Col>

                    <Col>
                        <div style={{marginTop: "50px"}}>
                            <input  type="text" onChange={(ev)=>{setpicSearch(ev.target.value)}} />
                            <button onClick={searchPic} >
                                {props.sendlanguage === "en" ? "search" : ""}
                                {props.sendlanguage === "fr" ? "chercher" : ""}
                                {props.sendlanguage === "sp" ? "buscar" : ""}    
                            </button><br/><br/>
                        </div>
                    </Col>                         
                </Row>
            </Container>
            

            <Container>
                <Row xs="1" sm="4" className={"searchname"}>
                    <Col className={"search-picture"}>
                        <div style={{borderRight: "solid 2px gray", height: "250px"}}>
                            <Diagramanimation />
                        </div>
                    </Col>

                    <Col>
                        <div className={"search-title"}>
                            {props.sendlanguage === "en" ? "Search by family" : ""}
                            {props.sendlanguage === "fr" ? "Recherche par famille" : ""}
                            {props.sendlanguage === "sp" ? "Buscar por familia" : ""}
                            
                            </div>
                        <div style={{marginTop: "20px"}}>
                            {props.sendlanguage === "en" ? "The search by family allows you to make a query to know the characteristics of a complete family of pics. For example, click on the PIC10FXXX family and the characteristics of all similar PICs will be displayed. " : ""}
                            {props.sendlanguage === "fr" ? "La recherche par famille permet de faire une requête pour connaître les caractéristiques d'une famille complète de photos. Par exemple, cliquez sur la famille PIC10FXXX et les caractéristiques de tous les PIC similaires s'afficheront. " : ""}
                            {props.sendlanguage === "sp" ? "La busqueda por familia permite realizr una consulta para conocer las caracteristicas de una familia completa de pics. Por ejemplo haga click en la familia PIC10FXXX y se mostraran las caracteristicas de todos los PIC's similares." : ""}
                            
                        </div>
                    </Col>

                    <Col sm="5">
                        <div style={{marginTop: "50px"}} id="button-family">
                            <button id={1} onClick={(ev) => searchFamily(ev.target.id)}>PIC10FXXX</button>
                            <button id={2} onClick={(ev) => searchFamily(ev.target.id)}>PIC12FXXX</button>
                            <button id={3} onClick={(ev) => searchFamily(ev.target.id)}>PIC16C/F5X</button>
                            <button id={4} onClick={(ev) => searchFamily(ev.target.id)}>PIC16CXXX</button>
                            <button id={5} onClick={(ev) => searchFamily(ev.target.id)}>PIC16FXXX</button>
                            <button id={6} onClick={(ev) => searchFamily(ev.target.id)}>PIC18FXXX</button>
                            <button id={7} onClick={(ev) => searchFamily(ev.target.id)}>PIC18FXXJXX</button>
                        </div>
                    </Col> 
                </Row>
            </Container>

            <Container>
                <Row xs="1" sm="4" className={"searchname"}>
                    <Col className={"search-picture"}>
                        <div style={{borderRight: "solid 2px gray", height: "250px"}}>
                            <Picsanimation />
                        </div>
                    </Col>

                    <Col>
                        <div className={"search-title"}>
                            {props.sendlanguage === "en" ? "Advanced search" : ""}
                            {props.sendlanguage === "fr" ? "Recherche avancée" : ""}
                            {props.sendlanguage === "sp" ? "Búsqueda avanzada" : ""}
                            
                            </div>
                        <div style={{marginTop: "20px"}}>
                            {props.sendlanguage === "en" ? "You can also search for a PIC by its characteristics and you will find a list of PICs that meet these requirements." : ""}
                            {props.sendlanguage === "fr" ? "Vous pouvez également rechercher un PIC par ses caractéristiques et vous trouverez une liste de PIC qui répondent à ces exigences. " : ""}
                            {props.sendlanguage === "sp" ? "Tambien puedes buscar un PIC por sus caracteristicas y encontraras una lista de los PIC que cumplen dichos requerimientos." : ""}
                            
                        </div>
                    </Col>

                    <Col sm="6">
                        <div style={{marginTop: "20px"}} id="advance-section">
                            <label >memory</label>
                            <input id={"memoryinput"} type="text" placeholder={"bits"} onChange={(ev)=>{memoryChange(ev.target.value)}} /> 
                            <label >eeprom</label>
                            <input id={"eeprominput"} type="text" placeholder={"bits"} onChange={(ev)=>{eepromChange(ev.target.value)}} /><br />
                            <label >ram</label>
                            <input id={"raminput"} type="text" placeholder={"bits"} onChange={(ev)=>{ramChange(ev.target.value)}} />
                            <label >pins</label>
                            <input id={"pinsinput"} type="text" placeholder={"quantity"} onChange={(ev)=>{pinsChange(ev.target.value)}} /><br />
                            <label >chanels</label>
                            <input id={"chanelsinput"} type="text" placeholder={"quantity"} onChange={(ev)=>{chanelsChange(ev.target.value)}} />
                            <label >resolution</label>
                            <input id={"resolutioninput"} type="text" placeholder={"bits"} onChange={(ev)=>{resolutionChange(ev.target.value)}} /><br />
                            <label >max speed</label>
                            <input id={"speedinput"} type="text" placeholder={"MHz"} onChange={(ev)=>{speedChange(ev.target.value)}} /><br />
                            
                            <input  type="checkbox" onChange={(ev)=>{settimer8(!timer8)}} />
                            <label >timer8</label>
                            <input  type="checkbox" onChange={(ev)=>{settimer16(!timer16)}} />
                            <label >timer16</label><br />
                            <input  type="checkbox" onChange={(ev)=>{setserial(!serial)}} />
                            <label >Serial</label>
                            <input  type="checkbox" onChange={(ev)=>{setintosc(!intosc)}} />
                            <label >IntOSC</label><br />
                        </div>
                       
                        <button onClick={advanceSearch} >
                            {props.sendlanguage === "en" ? "search" : ""}
                            {props.sendlanguage === "fr" ? "chercher" : ""}
                            {props.sendlanguage === "sp" ? "buscar" : ""}  
                        </button><br/><br/>

                    </Col> 
                    
                </Row>
                <Element name="results"></Element>
                <div style={{width: "100%", textAlign: "center", padding: "20px 0px", fontSize: "1.2em", fontWeight: "bold"}}>{List.length} 
                    {props.sendlanguage === "en" ? " Results" : ""}
                    {props.sendlanguage === "fr" ? " Résultats" : ""}
                    {props.sendlanguage === "sp" ? " Resultados" : ""}  
                </div> 
                <Row xs="1" sm="4">
                    {List.map((items) => {
                        return (
                            <Col>
                                <div className={"result-box"}>
                                    <div style={{width: "100%", textAlign: "center", textDecoration: "underline"}}>{items.product}</div><br /><br />
                                    <label >memory: </label>
                                    <div >{items.progmemory}</div><br />
                                    <label >memtype: </label>
                                    <div >{items.memtype}</div><br />
                                    <label >eeprom: </label>
                                    <div >{items.eeprom}</div><br />
                                    <label >ram: </label>
                                    <div >{items.ram}</div><br />
                                    <label >pins: </label>
                                    <div >{items.pins}</div><br />
                                    <label >line: </label>
                                    <div >{items.line}</div><br />
                                    <label > adc: </label>
                                    <div >{items.adc}</div><br />
                                    <label >res: </label>
                                    <div >{items.res}</div><br />
                                    <label >comp: </label>
                                    <div >{items.comp}</div><br />
                                    <label >timer 16:</label>
                                    <div >{items.timer16}</div><br />
                                    <label >timer 8:</label>
                                    <div >{items.timer8}</div><br />
                                    <label >model: </label>
                                    <div >{items.label}</div><br />
                                    <label >speed: </label>
                                    <div >{items.max}</div><br />
                                    <label >osc: </label>
                                    <div >{items.intosc}</div><br />
                                    <label >serial: </label><br />
                                    <div style={{width: "100%"}}>{items.serial}</div><br />
                                    <label >packages: </label>
                                    <div style={{width: "100%"}}>{items.box}</div>
                                </div>
                                <div style={{width: "100%", textAlign: "center", margin: "5px 0px", color: "#0645AD", cursor: "pointer"}} onClick={scrollToSearch}>
                                    {props.sendlanguage === "en" ? "Back ↑" : ""}
                                    {props.sendlanguage === "fr" ? "retourner ↑" : ""}
                                    {props.sendlanguage === "sp" ? "Regresar ↑" : ""}
                                </div>
                            </Col>
                            
                        )
                    })}
                    
                </Row>
            </Container>
            
            
        </div>
    )
}

export default Find;
