import React from 'react';
import './App.css';
import MapChart from "./Map";
import Container from 'react-bootstrap/Container';
import {Col, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import PriceChart from "./price-chart";
/*
TODO Find a way to enter data into kommuns
TODO Load kommun data from database
TODO Add indicators

 */
function App() {
    return (
        <div className="App">
            <header className="App-header">
                Interactive map of Swedish Real Estate
            </header>
            <body>
            <Container fluid>
                <Row></Row>
                <Row>
                    <Col>
                        {MapChart()}
                    </Col>
                    <Col xs lg="4">
                        <Row>
                            {PriceChart()}
                        </Row>
                    </Col>
                </Row>
            </Container>
            </body>
        </div>
    );
}

export default App;
