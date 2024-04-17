import React from "react";
import * as d3 from "d3"
import { max, scaleBand, scaleLinear } from "d3";
import { XAxis, YAxis } from "./axes";

export function BarChart (props) {
    const {offsetX, offsetY, data, height, width, selectedAirline, setSelectedAirline} = props;
    
    // Sort data by Count in descending order
    //const sortedData = [...data].sort((a, b) => a.Count - b.Count);
    
    const maxCount = max(data, d => d.Count);

    const xScale = d3.scaleLinear()
            .domain([0, maxCount])
            .range([0, width])
            .nice()

    const yScale = d3.scaleBand()
            .domain(data.map(a => a.AirlineName))
            .range([0, height])
            .padding(0.2)

    const color = (d) => d.AirlineID === selectedAirline ? "#992a5b" : "#2a5599"
    const onMouseOver = (d) => setSelectedAirline(d.AirlineID)
    const onMouseOut = () => setSelectedAirline('null')
    
    // Task 3. TODO
    // 1. define an arrow function color; it takes a data item, d, as input. 
    // If d.AirlineID is equal to the selectedAirlineID, it returns "#992a5b"; 
    // otherwiese, it returns "#2a5599".
    // 2. define a function onMouseOver; it takes a data item, d, as input,
    // and sets the selectedAirlineID be the d.AirlineID
    // 3. define a function onMouseOut; it has no argument, and sets the selectedAirlineID be null.
    // 4. adding properties, onMouseOver and onMouseOut, to the <rect> tags.
    // Note: the function of the onMouseOver properties should be an arrow function 
    // that wraps the onMouseOver you defined since it takes d as input.

    return <g transform={`translate(${offsetX}, ${offsetY})`}>
        { data.map( d => {
            return (
                // {/* {
                //     sortedData.map(d => (
                //         <rect
                //             key={d.AirlineID}
                //             x={0}
                //             y={yScale(d.AirlineName)}
                //             width={xScale(d.Count)}
                //             height={yScale.bandwidth()}
                //             fill={color(d)}
                //             stroke={"black"}
                //             onMouseOver={() => onMouseOver(d)}
                //             onMouseOut={onMouseOut}
                //         />
                //     ))
                // } */}
                <rect 
                    key={d.AirlineID} 
                    x={0} 
                    y={yScale(d.AirlineName)}
                    width={xScale(d.Count)} 
                    stroke="black" 
                    fill={color(d)}
                    height={yScale.bandwidth()} 
                    onMouseOver={()=>onMouseOver(d)} 
                    onMouseOut={onMouseOut}
                />)
        }) }
        <YAxis yScale={yScale} height={height} offsetX={offsetX}/>
        <XAxis xScale={xScale} width={width} height={height} />
    </g>
}