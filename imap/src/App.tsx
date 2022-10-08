import React from 'react';
import './App.css';
import MapChart from "./Map";
import Container from 'react-bootstrap/Container';
import {Col, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

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
                    <Col xs lg="2">
                        <div>
                            <p>
                                Hello world!
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            </body>
        </div>
    );
}

export default App;
