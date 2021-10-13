import React, {useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./search.css";
import Glassanimation from "./glass-animation.js";
import Diagramanimation from "./diagram-animation.js";
import Picsanimation from "./pics-animation.js";

function Find(props){

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
        axios.post("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/searchpicname", {picName: picSearch}).then((response1)=>{
            
            if (response1.data==="done"){
                axios.get("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/searchpic").then((response2)=>{
                        setList(response2.data);
                        document.getElementById("gotoresults").click();
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
                        document.getElementById("gotoresults").click();
                    }) 
            }})
        }
    
    const searchFamily = (familydata) => {
        
        axios.post("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/searchfamilyname", {picFamily: familydata}).then((response1)=>{
            
            if (response1.data==="done"){
                axios.get("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/searchfamily").then((response2)=>{
                        setList(response2.data);
                        document.getElementById("gotoresults").click();
                    }) 
            }})
        }

    const goToTop = () => {
        document.getElementById("makenewsearch").click();
    }

    return (
        <div>
            <Container>
                <a href="#results" id="gotoresults" ></a>
                <Row xs="1" sm="4" className={"searchname"} id="start-search">
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
                            <label htmlFor="">memory</label>
                            <input  type="text" onChange={(ev)=>{setmemory(ev.target.value)}} /> 
                            <label htmlFor="">eeprom</label>
                            <input  type="text" onChange={(ev)=>{seteeprom(ev.target.value)}} /><br />
                            <label htmlFor="">ram</label>
                            <input  type="text" onChange={(ev)=>{setram(ev.target.value)}} />
                            <label htmlFor="">pins</label>
                            <input  type="text" onChange={(ev)=>{setpins(ev.target.value)}} /><br />
                            <label htmlFor="">chanels</label>
                            <input  type="text" onChange={(ev)=>{setchanels(ev.target.value)}} />
                            <label htmlFor="">resolution</label>
                            <input  type="text" onChange={(ev)=>{setresolution(ev.target.value)}} /><br />
                            <label htmlFor="">max speed</label>
                            <input  type="text" onChange={(ev)=>{setmaxspeed(ev.target.value)}} /><br />
                            
                            <input  type="checkbox" onChange={(ev)=>{settimer8(!timer8)}} />
                            <label htmlFor="">timer8</label>
                            <input  type="checkbox" onChange={(ev)=>{settimer16(!timer16)}} />
                            <label htmlFor="">timer16</label><br />
                            <input  type="checkbox" onChange={(ev)=>{setserial(!serial)}} />
                            <label htmlFor="">Serial</label>
                            <input  type="checkbox" onChange={(ev)=>{setintosc(!intosc)}} />
                            <label htmlFor="">IntOSC</label><br />
                        </div>
                       
                        <button onClick={advanceSearch} >
                            {props.sendlanguage === "en" ? "search" : ""}
                            {props.sendlanguage === "fr" ? "chercher" : ""}
                            {props.sendlanguage === "sp" ? "buscar" : ""}  
                        </button><br/><br/>

                    </Col> 
                    
                </Row>
                
                <Row xs="1" sm="4" id="results">
                    {List.map((items) => {
                        return (
                            <Col>
                                <div className={"result-box"}>
                                    <div style={{width: "100%", textAlign: "center", textDecoration: "underline"}}>{items.product}</div><br /><br />
                                    <label htmlFor="">memory: </label>
                                    <div >{items.progmemory}</div><br />
                                    <label htmlFor="">memtype: </label>
                                    <div >{items.memtype}</div><br />
                                    <label htmlFor="">eeprom: </label>
                                    <div >{items.eeprom}</div><br />
                                    <label htmlFor="">ram: </label>
                                    <div >{items.ram}</div><br />
                                    <label htmlFor="">pins: </label>
                                    <div >{items.pins}</div><br />
                                    <label htmlFor="">line: </label>
                                    <div >{items.line}</div><br />
                                    <label htmlFor=""> adc: </label>
                                    <div >{items.adc}</div><br />
                                    <label htmlFor="">res: </label>
                                    <div >{items.res}</div><br />
                                    <label htmlFor="">comp: </label>
                                    <div >{items.comp}</div><br />
                                    <label htmlFor="">timer 16:</label>
                                    <div >{items.timer16}</div><br />
                                    <label htmlFor="">timer 8:</label>
                                    <div >{items.timer8}</div><br />
                                    <label htmlFor="">model: </label>
                                    <div >{items.label}</div><br />
                                    <label htmlFor="">speed: </label>
                                    <div >{items.max}</div><br />
                                    <label htmlFor="">osc: </label>
                                    <div >{items.intosc}</div><br />
                                    <label htmlFor="">serial: </label><br />
                                    <div style={{width: "100%"}}>{items.serial}</div><br />
                                    <label htmlFor="">packages: </label>
                                    <div style={{width: "100%"}}>{items.box}</div>
                                </div>
                                <div style={{width: "100%", textAlign: "center", margin: "5px 0px", color: "#0645AD", cursor: "pointer"}} onClick={goToTop}>
                                    {props.sendlanguage === "en" ? "Back ↑" : ""}
                                    {props.sendlanguage === "fr" ? "retourner ↑" : ""}
                                    {props.sendlanguage === "sp" ? "Regresar ↑" : ""}
                                </div>
                            </Col>
                            
                        )
                    })}
                    
                </Row>
                <a href="#start-search" id="makenewsearch" ></a>
            </Container>
            
            
        </div>
    )
}

export default Find;