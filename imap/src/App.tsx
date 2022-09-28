import React from 'react';
import './App.css';
import MapChart from "./Map";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Interactive map of Swedish Real Estate
            </header>
            <body>
            {MapChart()}
            </body>
        </div>
    );
}

export default App;
