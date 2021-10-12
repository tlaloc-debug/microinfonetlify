import React, {useState} from "react";
import ReactDOM from "react-dom";
import Navigation from "./header.js";
import Carousel from "./carousel.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Search, JournalCheck, Files } from 'react-bootstrap-icons';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./home.js";
import Find from "./search.js";
import Glosary from "./description.js";
import "./index.css";









function App() {

    const [language, setlanguage] = useState("en");

    return (
        <Router>
        <div style={{marginBottom: "20px"}}>
            <Navigation  sendlanguage={language}/>
            <Carousel sendlanguage={language}/>
            <div id={"color-bars"}>
                <div style={{backgroundColor: "#f68d2e" }}></div>
                <div style={{backgroundColor: "#41b6e6" }}></div>
                <div style={{backgroundColor: "#6cc24a"  }}></div>
            </div>


            <Container >
            <Row xs="1" sm="3" className={"row justify-content-center"} >
                <Col sm="4" xs="10">
                    <Link to="/search_product">
                        <div id={"search"}>
                            <div className={"up"} >
                                <Search size={50}/>
                            </div>
                            <div className={"down"} >
                                <div>
                                    <span>
                                        {language === "en" ? "Find " : ""}
                                        {language === "fr" ? "Trouver " : ""}
                                        {language === "sp" ? "Buscar " : ""}
                                    </span> 
                                    {language === "en" ? "a product" : ""}
                                    {language === "fr" ? "un produit" : ""}
                                    {language === "sp" ? "un producto" : ""}
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col sm="4" xs="10">
                    <Link to="/show_description">
                        <div id={"glosary"}>
                            <div className={"up"} >
                                <JournalCheck size={50}/>
                            </div>
                            <div className={"down"} >
                                <div>
                                    <span>
                                        {language === "en" ? "List " : ""}
                                        {language === "fr" ? "Liste " : ""}
                                        {language === "sp" ? "Lista " : ""}
                                    </span> 
                                    {language === "en" ? "of terms" : ""}
                                    {language === "fr" ? "de termes" : ""}
                                    {language === "sp" ? "de terminos" : ""}
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col sm="4" xs="10">
                    <Link to="/compare_items">
                        <div id={"compare"}>
                            <div className={"up"} >
                                <Files size={50}/>
                            </div>
                            <div className={"down"} >
                                <div>
                                    <span>
                                        {language === "en" ? "Compare " : ""}
                                        {language === "fr" ? "Comparer " : ""}
                                        {language === "sp" ? "Comparar " : ""}
                                    </span> 
                                    {language === "en" ? "products" : ""}
                                    {language === "fr" ? "les produits" : ""}
                                    {language === "sp" ? "productos" : ""}
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
                
             </Row>
             </Container>
            
        </div>


        <Switch>
            <Route exact path="/"><Home sendlanguage={language}/></Route >
            <Route path="/search_product"> <Find sendlanguage={language}/></Route >
        </Switch>

       
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));