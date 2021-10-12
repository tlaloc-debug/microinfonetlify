import React from "react";
import "./header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

function Navigation (props){

    return (
     <div>
        <Container style={{padding: "20px"}} >
            <Row xs="3" sm="12" className={"row justify-content-between"}>
                <Col xs="12" sm="3"> 
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div>
                            <div className={"logo"}></div> 
                            <div className={"name"}>MicroInfo</div>
                        </div>
                        <select className={"language_select_mobil"}
                            value={props.language}
                            onChange={e => props.handleSetLanguage(e.target.value)}>
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="sp">Spanish</option>
                        </select>
                    </div>
                </Col>
                <Col  xs="12" sm="6">
                    
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
                        </ul>
                    </div>  

                </Col>
                <Col xs="12" sm="1"> 
                    <select className={"language_select_desktop"}
                        value={props.language}
                        onChange={e => props.handleSetLanguage(e.target.value)}>
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="sp">Spanish</option>
                    </select>
                </Col>
            </Row>
        </Container>     
     </div> 
     
    )

}

export default Navigation;