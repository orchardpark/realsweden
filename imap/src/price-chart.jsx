import React from "react";
import Plot from 'react-plotly.js'

export default function PriceChart() {
    return (
        <Plot
            data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                }]}
            layout={
                {
                    width: 640,
                    height: 480,
                    title: 'Average price over time'
                }
            }
        />
    )
}