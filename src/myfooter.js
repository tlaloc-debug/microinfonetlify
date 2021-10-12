import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from 'react-bootstrap-icons';
import "./myfooter.css";

function Bluebar () {
    return (
        <div className={"main-footer"}>
            <Container>
                <Row xs="1" sm="2" className={"row justify-content-center"} >
                    <Col >
                        <div style={{display: "flex", justifyContent: "center", paddingTop: "10px"}}>
                            <div className={"icon"}><Facebook color={"white"} size={25}/></div>
                            <div className={"icon"}><Linkedin color={"white"} size={25}/></div>
                            <div className={"icon"}><Twitter color={"white"} size={25}/></div>
                            <div className={"icon"}><Youtube color={"white"} size={25}/></div>
                            <div className={"icon"}><Instagram color={"white"} size={25}/></div>
                        </div>
                    </Col>

                    <Col >
                        <div className={"footer-div"}>
                            <ul id={"footer"}>
                                <li>Contact</li>
                                <li>About</li>
                            </ul> 
                        </div>  
                    </Col>                         
                </Row>
            </Container>
        </div>
    )
}

export default Bluebar;