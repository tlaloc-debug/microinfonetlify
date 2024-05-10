import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./mycontact.css";
import axios from "axios";
import Emailanimation from "./email-animation.js";

function Contact(props){

    const [emailNameForm, setemailNameForm] = useState("");
    const [emailAccountForm, setemailAccountForm] = useState("");
    const [emailMessageForm, setemailMessageForm] = useState("");
    const [message, setmessage] = useState("");

    const sendEmail = () => {
        if (emailAccountForm === "" || emailNameForm === "" || emailMessageForm ===""){
            setmessage("Palse fill all champs")
        } else {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; 
            if (!re.test(emailAccountForm)) document.getElementById("emailinput").style.color="red";
            if (format.test(emailNameForm)) document.getElementById("nameinput").style.color="red";
            if (re.test(emailAccountForm) && !format.test(emailNameForm)){
                setmessage("enviado")
                axios.post("https://all-in-one-proxy-3187fcbdcf4f.herokuapp.com/https://connectto-cdf4284ddfed.herokuapp.com/send-email", {emailName: emailNameForm, emailAccount: emailAccountForm, emailMessage: emailMessageForm}).then((response) => {console.log(response)})
            } else {
                setmessage("Name or Emmail not valide")
            }
        }
    }

    const changeNameForm = (myname) => {
        if (document.getElementById("nameinput").style.color="red") document.getElementById("nameinput").style.color="black";
        setemailNameForm(myname);
    }

    const changeEmailForm = (myemail) => {
        if (document.getElementById("emailinput").style.color="red") document.getElementById("emailinput").style.color="black";
        setemailAccountForm(myemail);
    }

    return (
        <div>
            <div style={{width: "100%", textAlign: "center", marginTop: "50px"}}>
                <h2>
                    {props.sendlanguage === "en" ? "Contact me" : ""}
                    {props.sendlanguage === "fr" ? "Contactez moi" : ""}
                    {props.sendlanguage === "sp" ? "Contactame" : ""}
                </h2>
            </div>
            <Container style={{padding: "20px"}} >
                <Row xs="1" sm="8" className={"row justify-content-center"}>
                    <Col sm="4" > 
                        <input type="text" id={"nameinput"} placeholder={props.sendlanguage === "en" ? "name" : props.sendlanguage === "fr" ? "nom" : props.sendlanguage === "sp" ? "nombre" : ""} onChange={(ev)=>{changeNameForm(ev.target.value)}} /><br /><br />
                        <input type="text" id={"emailinput"} placeholder="email" onChange={(ev)=>{changeEmailForm(ev.target.value)}}/><br /><br />
                        <textarea name="" id="" rows="8" placeholder={props.sendlanguage === "en" ? "message" : props.sendlanguage === "fr" ? "message" : props.sendlanguage === "sp" ? "mensaje" : ""} onChange={(ev)=>{setemailMessageForm(ev.target.value)}} ></textarea><br /><br />
                        <div style={{width: "100%", display: "flex", justifyContent:"center"}}>
                            <button onClick={sendEmail} style={{width: "100px"}}> 
                                {props.sendlanguage === "en" ? "Send" : ""}
                                {props.sendlanguage === "fr" ? "Envoyer" : ""}
                                {props.sendlanguage === "sp" ? "Enviar" : ""}
                            </button>
                        </div>
                    </Col>
                    <Col sm="4" > 
                        <div style={{width: "300px"}}>
                            <Emailanimation />
                        </div>
                    </Col>
                </Row >
            </Container>
            {message}
        </div>
    )

}

export default Contact;