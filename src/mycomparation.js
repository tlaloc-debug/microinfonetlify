import React, {useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./mycomparation.css";
import PicsCharts from "./mycharts.js";

function Piclistcompare(props){

    const [firstpic, setfirstpic] = useState("PIC10F200");
    const [secondpic, setsecondpic]= useState("PIC10F202");
    const [List, setList]= useState(["",""]);
    const [language, setlanguage] = useState("");

    const comparePic = () => {
        if (firstpic === secondpic) {
            if (language === "en") alert ("It seems like you want to compare a PIC to itself. \nTry to select two different PICs. ")
            if (language === "fr") alert ("On dirait que vous voulez comparer un PIC à lui-même. \nEssayez de sélectionner deux PIC différents. ")
            if (language === "sp") alert ("Parece que quieres comparar un PIC consigo mismo. \nTrata de seleccionar dos PICs diferentes. ")
        } else {
        axios.post("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/comparepicname", {FirstpicName: firstpic, SecondpicName: secondpic}).then((response1)=>{
            
            if (response1.data==="done"){
                axios.get("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/comparepic").then((response2)=>{
                        setList(response2.data);
                        
                    }) 
            }})
            }
        }

    return (
        <div>
            <div style={{width: "100%", display: "flex", justifyContent: "center", margin: "50px 0px"}}>
                <Container >
                    <Row xs="1" sm="12" className={"row justify-content-center"} >
                        <Col sm="4" xs="10">
                            <table>
                                <tr style={{height: "80px"}} >
                                    <td>
                                        <select        
                                            onChange={e => {setfirstpic(e.target.value); setlanguage(props.sendlanguage)}}>
                                            <option >
                                                {props.sendlanguage === "en" ? "Choose PIC ▼" : ""}
                                                {props.sendlanguage === "fr" ? "Choisir PIC ▼" : ""}
                                                {props.sendlanguage === "sp" ? "Elegir PIC ▼" : ""}    
                                            </option>    
                                            <option value="PIC10F200">PIC10F200</option>
                                            <option value="PIC10F202">PIC10F202</option>
                                            <option value="PIC10F204">PIC10F204</option>
                                            <option value="PIC10F206">PIC10F206</option>
                                            <option value="PIC12F508">PIC12F508</option>
                                            <option value="PIC12F509">PIC12F509</option>
                                            <option value="PIC16C55A">PIC16C55A</option>
                                            <option value="PIC16C56A">PIC16C56A</option>
                                            <option value="PIC16CR56A">PIC16CR56A</option>
                                            <option value="PIC16C58B">PIC16C58B</option>
                                            <option value="PIC16CR58B">PIC16CR58B</option>
                                            <option value="PIC16HV540">PIC16HV540</option>
                                            <option value="PIC16F505">PIC16F505</option>
                                            <option value="PIC16F54">PIC16F54</option>
                                            <option value="PIC16F57">PIC16F57</option>
                                            <option value="PIC16F59">PIC16F59</option>
                                            <option value="PIC12F629">PIC12F629</option>
                                            <option value="PIC12F635">PIC12F635</option>
                                            <option value="PIC12F675">PIC12F675</option>
                                            <option value="PIC12F683">PIC12F683</option>
                                            <option value="PIC14000">PIC14000</option>
                                            <option value="PIC16C432">PIC16C432</option>
                                            <option value="PIC16C433">PIC16C433</option>
                                            <option value="PIC16C554">PIC16C554</option>
                                            <option value="PIC16C558">PIC16C558</option>
                                            <option value="PIC16C62B">PIC16C62B</option>
                                            <option value="PIC16C620A">PIC16C620A</option>
                                            <option value="PIC16CR620A">PIC16CR620A</option>
                                            <option value="PIC16C621A">PIC16C621A</option>
                                            <option value="PIC16C622A">PIC16C622A</option>
                                            <option value="PIC16C63A">PIC16C63A</option>
                                            <option value="PIC16CR63">PIC16CR63</option>
                                            <option value="PIC16C65B">PIC16C65B</option>
                                            <option value="PIC16CR65">PIC16CR65</option>
                                            <option value="PIC16C717">PIC16C717</option>
                                            <option value="PIC16CR72">PIC16CR72</option>
                                            <option value="PIC16C745">PIC16C745</option>
                                            <option value="PIC16C765">PIC16C765</option>
                                            <option value="PIC16C770">PIC16C770</option>
                                            <option value="PIC16C771">PIC16C771</option>
                                            <option value="PIC16C773">PIC16C773</option>
                                            <option value="PIC16C774">PIC16C774</option>
                                            <option value="PIC16C781">PIC16C781</option>
                                            <option value="PIC16C782">PIC16C782</option>
                                            <option value="PIC16C925">PIC16C925</option>
                                            <option value="PIC16C926">PIC16C926</option>
                                            <option value="PIC16F627A">PIC16F627A</option>
                                            <option value="PIC16F628A">PIC16F628A</option>
                                            <option value="PIC16F648A">PIC16F648A</option>
                                            <option value="PIC16F630">PIC16F630</option>
                                            <option value="PIC16F636">PIC16F636</option>
                                            <option value="PIC16F639">PIC16F639</option>
                                            <option value="PIC16F676">PIC16F676</option>
                                            <option value="PIC16F684">PIC16F684</option>
                                            <option value="PIC16F685">PIC16F685</option>
                                            <option value="PIC16F687">PIC16F687</option>
                                            <option value="PIC16F688">PIC16F688</option>
                                            <option value="PIC16F689">PIC16F689</option>
                                            <option value="PIC16F690">PIC16F690</option>
                                            <option value="PIC16F716">PIC16F716</option>
                                            <option value="PIC16F72">PIC16F72</option>
                                            <option value="PIC16F73">PIC16F73</option>
                                            <option value="PIC16F737">PIC16F737</option>
                                            <option value="PIC16F74">PIC16F74</option>
                                            <option value="PIC16F747">PIC16F747</option>
                                            <option value="PIC16F76">PIC16F76</option>
                                            <option value="PIC16F767">PIC16F767</option>
                                            <option value="PIC16F77">PIC16F77</option>
                                            <option value="PIC16F777">PIC16F777</option>
                                            <option value="PIC16F785">PIC16F785</option>
                                            <option value="PIC16F818">PIC16F818</option>
                                            <option value="PIC16F819">PIC16F819</option>
                                            <option value="PIC16F84A">PIC16F84A</option>
                                            <option value="PIC16F87">PIC16F87</option>
                                            <option value="PIC16F870">PIC16F870</option>
                                            <option value="PIC16F871">PIC16F871</option>
                                            <option value="PIC16F872">PIC16F872</option>
                                            <option value="PIC16F873A">PIC16F873A</option>
                                            <option value="PIC16F874A">PIC16F874A</option>
                                            <option value="PIC16F876A">PIC16F876A</option>
                                            <option value="PIC16F877A">PIC16F877A</option>
                                            <option value="PIC16F88">PIC16F88</option>
                                            <option value="PIC16F913">PIC16F913</option>
                                            <option value="PIC16F914">PIC16F914</option>
                                            <option value="PIC16F916">PIC16F916</option>
                                            <option value="PIC16F917">PIC16F917</option>
                                            <option value="PIC18C601">PIC18C601</option>
                                            <option value="PIC18C801">PIC18C801</option>
                                            <option value="PIC18F1220">PIC18F1220</option>
                                            <option value="PIC18F1320">PIC18F1320</option>
                                            <option value="PIC18F2220">PIC18F2220</option>
                                            <option value="PIC18F2320">PIC18F2320</option>
                                            <option value="PIC18F2331">PIC18F2331</option>
                                            <option value="PIC18F2410">PIC18F2410</option>
                                            <option value="PIC18F2420">PIC18F2420</option>
                                            <option value="PIC18F2431">PIC18F2431</option>
                                            <option value="PIC18F2455">PIC18F2455</option>
                                            <option value="PIC18F2480">PIC18F2480</option>
                                            <option value="PIC18F2510">PIC18F2510</option>
                                            <option value="PIC18F2520">PIC18F2520</option>
                                            <option value="PIC18F2515">PIC18F2515</option>
                                            <option value="PIC18F2525">PIC18F2525</option>
                                            <option value="PIC18F2550">PIC18F2550</option>
                                            <option value="PIC18F2580">PIC18F2580</option>
                                            <option value="PIC18F2585">PIC18F2585</option>
                                            <option value="PIC18F2610">PIC18F2610</option>
                                            <option value="PIC18F2620">PIC18F2620</option>
                                            <option value="PIC18F2680">PIC18F2680</option>
                                            <option value="PIC18F4220">PIC18F4220</option>
                                            <option value="PIC18F4320">PIC18F4320</option>
                                            <option value="PIC18F4331">PIC18F4331</option>
                                            <option value="PIC18F4410">PIC18F4410</option>
                                            <option value="PIC18F4420">PIC18F4420</option>
                                            <option value="PIC18F4431">PIC18F4431</option>
                                            <option value="PIC18F4455">PIC18F4455</option>
                                            <option value="PIC18F4480">PIC18F4480</option>
                                            <option value="PIC18F4510">PIC18F4510</option>
                                            <option value="PIC18F4520">PIC18F4520</option>
                                            <option value="PIC18F4515">PIC18F4515</option>
                                            <option value="PIC18F4525">PIC18F4525</option>
                                            <option value="PIC18F4580">PIC18F4580</option>
                                            <option value="PIC18F4550">PIC18F4550</option>
                                            <option value="PIC18F4585">PIC18F4585</option>
                                            <option value="PIC18F4610">PIC18F4610</option>
                                            <option value="PIC18F4620">PIC18F4620</option>
                                            <option value="PIC18F4680">PIC18F4680</option>
                                            <option value="PIC18F6310">PIC18F6310</option>
                                            <option value="PIC18F6410">PIC18F6410</option>
                                            <option value="PIC18F6390">PIC18F6390</option>
                                            <option value="PIC18F6490">PIC18F6490</option>
                                            <option value="PIC18F6520">PIC18F6520</option>
                                            <option value="PIC18F6525">PIC18F6525</option>
                                            <option value="PIC18F6527">PIC18F6527</option>
                                            <option value="PIC18F6585">PIC18F6585</option>
                                            <option value="PIC18F6621">PIC18F6621</option>
                                            <option value="PIC18F6622">PIC18F6622</option>
                                            <option value="PIC18F6627">PIC18F6627</option>
                                            <option value="PIC18F6680">PIC18F6680</option>
                                            <option value="PIC18F6720">PIC18F6720</option>
                                            <option value="PIC18F6722">PIC18F6722</option>
                                            <option value="PIC18F8310">PIC18F8310</option>
                                            <option value="PIC18F8410">PIC18F8410</option>
                                            <option value="PIC18F8390">PIC18F8390</option>
                                            <option value="PIC18F8490">PIC18F8490</option>
                                            <option value="PIC18F8520">PIC18F8520</option>
                                            <option value="PIC18F8525">PIC18F8525</option>
                                            <option value="PIC18F8527">PIC18F8527</option>
                                            <option value="PIC18F8585">PIC18F8585</option>
                                            <option value="PIC18F8621">PIC18F8621</option>
                                            <option value="PIC18F8622">PIC18F8622</option>
                                            <option value="PIC18F8627">PIC18F8627</option>
                                            <option value="PIC18F8680">PIC18F8680</option>
                                            <option value="PIC18F8720">PIC18F8720</option>
                                            <option value="PIC18F8722">PIC18F8722</option>
                                            <option value="PIC18F66J15*">PIC18F66J15*</option>
                                            <option value="PIC18F67J10*">PIC18F67J10*</option>
                                            <option value="PIC18F86J15*">PIC18F86J15*</option>
                                            <option value="PIC18F87J10*">PIC18F87J10*</option>
                                        </select>
                                    </td>

                                    <td></td>

                                    <td>
                                        <select            
                                            onChange={e => {setsecondpic(e.target.value); setlanguage(props.sendlanguage)}}>
                                             <option >
                                                {props.sendlanguage === "en" ? "Choose PIC ▼" : ""}
                                                {props.sendlanguage === "fr" ? "Choisir PIC ▼" : ""}
                                                {props.sendlanguage === "sp" ? "Elegir PIC ▼" : ""}    
                                            </option>   
                                            <option value="PIC10F200">PIC10F200</option>
                                            <option value="PIC10F202">PIC10F202</option>
                                            <option value="PIC10F204">PIC10F204</option>
                                            <option value="PIC10F206">PIC10F206</option>
                                            <option value="PIC12F508">PIC12F508</option>
                                            <option value="PIC12F509">PIC12F509</option>
                                            <option value="PIC16C55A">PIC16C55A</option>
                                            <option value="PIC16C56A">PIC16C56A</option>
                                            <option value="PIC16CR56A">PIC16CR56A</option>
                                            <option value="PIC16C58B">PIC16C58B</option>
                                            <option value="PIC16CR58B">PIC16CR58B</option>
                                            <option value="PIC16HV540">PIC16HV540</option>
                                            <option value="PIC16F505">PIC16F505</option>
                                            <option value="PIC16F54">PIC16F54</option>
                                            <option value="PIC16F57">PIC16F57</option>
                                            <option value="PIC16F59">PIC16F59</option>
                                            <option value="PIC12F629">PIC12F629</option>
                                            <option value="PIC12F635">PIC12F635</option>
                                            <option value="PIC12F675">PIC12F675</option>
                                            <option value="PIC12F683">PIC12F683</option>
                                            <option value="PIC14000">PIC14000</option>
                                            <option value="PIC16C432">PIC16C432</option>
                                            <option value="PIC16C433">PIC16C433</option>
                                            <option value="PIC16C554">PIC16C554</option>
                                            <option value="PIC16C558">PIC16C558</option>
                                            <option value="PIC16C62B">PIC16C62B</option>
                                            <option value="PIC16C620A">PIC16C620A</option>
                                            <option value="PIC16CR620A">PIC16CR620A</option>
                                            <option value="PIC16C621A">PIC16C621A</option>
                                            <option value="PIC16C622A">PIC16C622A</option>
                                            <option value="PIC16C63A">PIC16C63A</option>
                                            <option value="PIC16CR63">PIC16CR63</option>
                                            <option value="PIC16C65B">PIC16C65B</option>
                                            <option value="PIC16CR65">PIC16CR65</option>
                                            <option value="PIC16C717">PIC16C717</option>
                                            <option value="PIC16CR72">PIC16CR72</option>
                                            <option value="PIC16C745">PIC16C745</option>
                                            <option value="PIC16C765">PIC16C765</option>
                                            <option value="PIC16C770">PIC16C770</option>
                                            <option value="PIC16C771">PIC16C771</option>
                                            <option value="PIC16C773">PIC16C773</option>
                                            <option value="PIC16C774">PIC16C774</option>
                                            <option value="PIC16C781">PIC16C781</option>
                                            <option value="PIC16C782">PIC16C782</option>
                                            <option value="PIC16C925">PIC16C925</option>
                                            <option value="PIC16C926">PIC16C926</option>
                                            <option value="PIC16F627A">PIC16F627A</option>
                                            <option value="PIC16F628A">PIC16F628A</option>
                                            <option value="PIC16F648A">PIC16F648A</option>
                                            <option value="PIC16F630">PIC16F630</option>
                                            <option value="PIC16F636">PIC16F636</option>
                                            <option value="PIC16F639">PIC16F639</option>
                                            <option value="PIC16F676">PIC16F676</option>
                                            <option value="PIC16F684">PIC16F684</option>
                                            <option value="PIC16F685">PIC16F685</option>
                                            <option value="PIC16F687">PIC16F687</option>
                                            <option value="PIC16F688">PIC16F688</option>
                                            <option value="PIC16F689">PIC16F689</option>
                                            <option value="PIC16F690">PIC16F690</option>
                                            <option value="PIC16F716">PIC16F716</option>
                                            <option value="PIC16F72">PIC16F72</option>
                                            <option value="PIC16F73">PIC16F73</option>
                                            <option value="PIC16F737">PIC16F737</option>
                                            <option value="PIC16F74">PIC16F74</option>
                                            <option value="PIC16F747">PIC16F747</option>
                                            <option value="PIC16F76">PIC16F76</option>
                                            <option value="PIC16F767">PIC16F767</option>
                                            <option value="PIC16F77">PIC16F77</option>
                                            <option value="PIC16F777">PIC16F777</option>
                                            <option value="PIC16F785">PIC16F785</option>
                                            <option value="PIC16F818">PIC16F818</option>
                                            <option value="PIC16F819">PIC16F819</option>
                                            <option value="PIC16F84A">PIC16F84A</option>
                                            <option value="PIC16F87">PIC16F87</option>
                                            <option value="PIC16F870">PIC16F870</option>
                                            <option value="PIC16F871">PIC16F871</option>
                                            <option value="PIC16F872">PIC16F872</option>
                                            <option value="PIC16F873A">PIC16F873A</option>
                                            <option value="PIC16F874A">PIC16F874A</option>
                                            <option value="PIC16F876A">PIC16F876A</option>
                                            <option value="PIC16F877A">PIC16F877A</option>
                                            <option value="PIC16F88">PIC16F88</option>
                                            <option value="PIC16F913">PIC16F913</option>
                                            <option value="PIC16F914">PIC16F914</option>
                                            <option value="PIC16F916">PIC16F916</option>
                                            <option value="PIC16F917">PIC16F917</option>
                                            <option value="PIC18C601">PIC18C601</option>
                                            <option value="PIC18C801">PIC18C801</option>
                                            <option value="PIC18F1220">PIC18F1220</option>
                                            <option value="PIC18F1320">PIC18F1320</option>
                                            <option value="PIC18F2220">PIC18F2220</option>
                                            <option value="PIC18F2320">PIC18F2320</option>
                                            <option value="PIC18F2331">PIC18F2331</option>
                                            <option value="PIC18F2410">PIC18F2410</option>
                                            <option value="PIC18F2420">PIC18F2420</option>
                                            <option value="PIC18F2431">PIC18F2431</option>
                                            <option value="PIC18F2455">PIC18F2455</option>
                                            <option value="PIC18F2480">PIC18F2480</option>
                                            <option value="PIC18F2510">PIC18F2510</option>
                                            <option value="PIC18F2520">PIC18F2520</option>
                                            <option value="PIC18F2515">PIC18F2515</option>
                                            <option value="PIC18F2525">PIC18F2525</option>
                                            <option value="PIC18F2550">PIC18F2550</option>
                                            <option value="PIC18F2580">PIC18F2580</option>
                                            <option value="PIC18F2585">PIC18F2585</option>
                                            <option value="PIC18F2610">PIC18F2610</option>
                                            <option value="PIC18F2620">PIC18F2620</option>
                                            <option value="PIC18F2680">PIC18F2680</option>
                                            <option value="PIC18F4220">PIC18F4220</option>
                                            <option value="PIC18F4320">PIC18F4320</option>
                                            <option value="PIC18F4331">PIC18F4331</option>
                                            <option value="PIC18F4410">PIC18F4410</option>
                                            <option value="PIC18F4420">PIC18F4420</option>
                                            <option value="PIC18F4431">PIC18F4431</option>
                                            <option value="PIC18F4455">PIC18F4455</option>
                                            <option value="PIC18F4480">PIC18F4480</option>
                                            <option value="PIC18F4510">PIC18F4510</option>
                                            <option value="PIC18F4520">PIC18F4520</option>
                                            <option value="PIC18F4515">PIC18F4515</option>
                                            <option value="PIC18F4525">PIC18F4525</option>
                                            <option value="PIC18F4580">PIC18F4580</option>
                                            <option value="PIC18F4550">PIC18F4550</option>
                                            <option value="PIC18F4585">PIC18F4585</option>
                                            <option value="PIC18F4610">PIC18F4610</option>
                                            <option value="PIC18F4620">PIC18F4620</option>
                                            <option value="PIC18F4680">PIC18F4680</option>
                                            <option value="PIC18F6310">PIC18F6310</option>
                                            <option value="PIC18F6410">PIC18F6410</option>
                                            <option value="PIC18F6390">PIC18F6390</option>
                                            <option value="PIC18F6490">PIC18F6490</option>
                                            <option value="PIC18F6520">PIC18F6520</option>
                                            <option value="PIC18F6525">PIC18F6525</option>
                                            <option value="PIC18F6527">PIC18F6527</option>
                                            <option value="PIC18F6585">PIC18F6585</option>
                                            <option value="PIC18F6621">PIC18F6621</option>
                                            <option value="PIC18F6622">PIC18F6622</option>
                                            <option value="PIC18F6627">PIC18F6627</option>
                                            <option value="PIC18F6680">PIC18F6680</option>
                                            <option value="PIC18F6720">PIC18F6720</option>
                                            <option value="PIC18F6722">PIC18F6722</option>
                                            <option value="PIC18F8310">PIC18F8310</option>
                                            <option value="PIC18F8410">PIC18F8410</option>
                                            <option value="PIC18F8390">PIC18F8390</option>
                                            <option value="PIC18F8490">PIC18F8490</option>
                                            <option value="PIC18F8520">PIC18F8520</option>
                                            <option value="PIC18F8525">PIC18F8525</option>
                                            <option value="PIC18F8527">PIC18F8527</option>
                                            <option value="PIC18F8585">PIC18F8585</option>
                                            <option value="PIC18F8621">PIC18F8621</option>
                                            <option value="PIC18F8622">PIC18F8622</option>
                                            <option value="PIC18F8627">PIC18F8627</option>
                                            <option value="PIC18F8680">PIC18F8680</option>
                                            <option value="PIC18F8720">PIC18F8720</option>
                                            <option value="PIC18F8722">PIC18F8722</option>
                                            <option value="PIC18F66J15*">PIC18F66J15*</option>
                                            <option value="PIC18F67J10*">PIC18F67J10*</option>
                                            <option value="PIC18F86J15*">PIC18F86J15*</option>
                                            <option value="PIC18F87J10*">PIC18F87J10*</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={"first-pic"}>{List[0].product}</td>
                                    <td className={"middle"}>PIC</td>
                                    <td>{List[1].product}</td>
                                </tr>
                                <tr>
                                    <td className={"first-pic"}>{List[0].progmemory}</td>
                                    <td className={"middle"}>memory</td>
                                    <td>{List[1].progmemory}</td>
                                </tr>
                                <tr>
                                    <td className={"first-pic"}>{List[0].memorytype}</td>
                                    <td className={"middle"}>type</td>
                                    <td>{List[1].memorytype}</td>
                                </tr>
                                <tr>
                                    <td className={"first-pic"}>{List[0].eeprom}</td>
                                    <td className={"middle"}>eeprom</td>
                                    <td>{List[1].eeprom}</td>
                                </tr>
                                <tr>
                                    <td className={"first-pic"}>{List[0].ram}</td>
                                    <td className={"middle"}>ram</td>
                                    <td>{List[1].ram}</td>
                                </tr>
                                <tr>
                                    <td className={"first-pic"}>{List[0].pins}</td>
                                    <td className={"middle"}>pins</td>
                                    <td>{List[1].pins}</td>
                                </tr>
                                <tr>
                                    <td className={"first-pic"}>{List[0].line}</td>
                                    <td className={"middle"}>line</td>
                                    <td>{List[1].line}</td>
                                </tr>
                                <tr>
                                    <td className={"first-pic"}>{List[0].adc}</td>
                                    <td className={"middle"}>adc</td>
                                    <td>{List[1].adc}</td>
                                </tr>
                                <tr>
                                    <td className={"first-pic"}>{List[0].res}</td>
                                    <td className={"middle"}>res</td>
                                    <td>{List[1].res}</td>
                                </tr>
                                <tr>
                                    <td className={"first-pic"}>{List[0].comp}</td>
                                    <td className={"middle"}>comp</td>
                                    <td>{List[1].comp}</td>
                                </tr>
                                <tr>
                                    <td className={"first-pic"}>{List[0].timer16}</td>
                                    <td className={"middle"}>timer 16</td>
                                    <td>{List[1].timer16}</td>
                                </tr>
                                <tr>
                                    <td className={"first-pic"}>{List[0].timer8}</td>
                                    <td className={"middle"}>timer 8</td>
                                    <td>{List[1].timer8}</td>
                                </tr>
                                <tr>
                                    <td className={"first-pic"}>{List[0].serial}</td>
                                    <td className={"middle"}>serial</td>
                                    <td>{List[1].serial}</td>
                                </tr>
                                <tr>
                                    <td className={"first-pic"}>{List[0].max}</td>
                                    <td className={"middle"}>speed</td>
                                    <td>{List[1].max}</td>
                                </tr>
                                <tr>
                                    <td className={"first-pic"}>{List[0].intosc}</td>
                                    <td className={"middle"}>IntOSC</td>
                                    <td>{List[1].intosc}</td>
                                </tr>
                                <tr style={{height: "80px"}}>
                                    <td colspan="3" style={{textAlign: "center"}}><button onClick={comparePic}>
                                        {props.sendlanguage === "en" ? "Compare" : ""}
                                        {props.sendlanguage === "fr" ? "Comparer " : ""}
                                        {props.sendlanguage === "sp" ? "Comparar" : ""}
                                    </button></td>
                                    
                                </tr>
                            </table>
                        
                        </Col>

                        <Col sm="8" xs="10" className={"allCharts"}>
                            <PicsCharts mydata={List} />
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Piclistcompare;