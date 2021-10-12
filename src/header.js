import React from "react";
import "./header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

function Navigation (props){

    return (
     <div>
        <Container style={{padding: "20px"}} >
            <Row xs="2" sm="2" className={"row justify-content-between"}>
                <Col id="logo-title"> 
                    <div className={"logo"}></div> 
                    <div className={"name"}>MicroInfo</div>
                </Col>
                <Col style={{textAlign: "right"}} xs="12">
                    
                    <div className={"desktop_menu"} >
                        <ul id="navigation">
                            <li><Link to="/" style={{color: "black"}}> 
                                    {props.sendlanguage === "en" ? "Home" : ""}
                                    {props.sendlanguage === "fr" ? "Accueil" : ""}
                                    {props.sendlanguage === "sp" ? "Home" : ""}
                                </Link > </li>
                            <li><Link to="/tools" style={{color: "black"}}>
                                    {props.sendlanguage === "en" ? "Tools" : ""}
                                    {props.sendlanguage === "fr" ? "Outils " : ""}
                                    {props.sendlanguage === "sp" ? "Herramientas" : ""}
                                </Link ></li>
                            <li><Link to="/contact" style={{color: "black"}}>
                                    {props.sendlanguage === "en" ? "Contact" : ""}
                                    {props.sendlanguage === "fr" ? "Contact" : ""}
                                    {props.sendlanguage === "sp" ? "Contacto" : ""}
                                </Link ></li>
                            <li><Link to="/about" style={{color: "black"}}>
                                    About
                                </Link ></li>
                            <li>
                                <select className={"changeLanguageDesktop"}  
                                    value={props.language}
                                    onChange={e => props.handleSetLanguage(e.target.value)}>
                                    <option value="en">English</option>
                                    <option value="fr">French</option>
                                    <option value="sp">Spanish</option>
                                </select>
                            </li>
                        </ul>
                    </div>  

                    <div className={"mobile_menu"}></div>

                    <div id="changeLanguage">
                        <select 
                            value={props.language}
                            onChange={e => props.handleSetLanguage(e.target.value)}>
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="sp">Spanish</option>
                        </select>
                    </div>

                </Col>
            </Row>
        </Container>     
     </div> 
     
    )

}

export default Navigation;