import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/sweden/sweden-municipalities.json"

export default function MapChart() {
    return (
        <ComposableMap
            projection="geoMercator"
            projectionConfig={{
                center: [17,58],
                scale: 680
            }}
        >

            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
        </ComposableMap>
    )
}
