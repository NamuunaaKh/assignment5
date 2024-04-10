import React from "react";
import * as d3 from "d3"
import { max, scaleBand, scaleLinear } from "d3";
import { XAxis, YAxis } from "./axes";


// export function BarChart (props) {
//     const {offsetX, offsetY, data, height, width, selectedAirlineID, setSelectedAirline} = props;
//     // Task 1: TODO
//     // 1. find the maximum of the Count attribute in the data
//     // 2. define the xScale and yScale
//     // 3. return the bars; (Remember to use data.map());
//     // 4. return <XAxis/> and <YAxis/>

//     // Sort data by Count in descending order
//     const sortedData = [...data].sort((a, b) => a.Count - b.Count);

//     // const color = (selectedAirlineID) =>  {
//     //     return selectedAirlineID ? "#992a5b" : "#2a5599"
//     // }

//     const color = (d) => {
//         return d.AirlineID === selectedAirlineID ? "#992a5b" : "#2a5599";
//     };

//     const onMouseOver = (d) => {
//         setSelectedAirline(d.AirlineID)
//     }

//     const onMouseOut = (d) => {
//         setSelectedAirline(null)
//     }

//     const xScale = d3.scaleLinear()
//         .domain([0, d3.max(sortedData, d => d.Count) + 100])
//         .range([0, width]);

//     const yScale = d3.scaleBand()
//         .domain(sortedData.map(d => d.AirlineName))
//         .range([height, 0])
//         .padding(0.2)
    
//     // Task 3. TODO
//     // 1. define an arrow function color; it takes a data item, d, as input. 
//     // If d.AirlineID is equal to the selectedAirlineID, it returns "#992a5b"; 
//     // otherwiese, it returns "#2a5599".
//     // 2. define a function onMouseOver; it takes a data item, d, as input,
//     // and sets the selectedAirlineID be the d.AirlineID
//     // 3. define a function onMouseOut; it has no argument, and sets the selectedAirlineID be null.
//     // 4. adding properties, onMouseOver and onMouseOut, to the <rect> tags.
//     // Note: the function of the onMouseOver properties should be an arrow function 
//     // that wraps the onMouseOver you defined since it takes d as input.
    
//     return (
//         <g transform={`translate(${offsetX}, ${offsetY})`}>
//             {
//                 sortedData.map(d => (
//                     <rect
//                         key={d.AirlineID}
//                         x={0}
//                         y={yScale(d.AirlineName)}
//                         width={xScale(d.Count)}
//                         height={yScale.bandwidth()}
//                         fill={color(d)}
//                         stroke={"black"}
//                         onMouseOver={() => onMouseOver(d)}
//                         onMouseOut={onMouseOut}
//                     />
//                 ))
//             }
//             <YAxis yScale={yScale} height={height} offsetX={offsetX}/>
//             <XAxis xScale={xScale} height={height} width={width} /> 
//         </g>
//     );
// }

export function BarChart (props) {
    const {offsetX, offsetY, data, height, width, selectedAirline, setSelectedAirline} = props;
    let maximunCount = max(data, d => d.Count);
    const xScale = scaleLinear().range([0, width]).domain([0, maximunCount]).nice();
    const yScale = scaleBand().range([0, height]).domain(data.map(a => a.AirlineName)).padding(0.2) //The domain is the list of ailines names
    let color = (d) => d.AirlineID===selectedAirline? "#992a5b":"#2a5599";
    let onMouseOver = (d) => setSelectedAirline(d.AirlineID);
    let onMouseOut = () => setSelectedAirline('null');
    //TODO:
    //1.Change the mouse event in <rect/> to onClick;
    //2.Remove the onMouseOut in <rect />;
    //3.Define a callback function for the onClick event, so that, 
    //  when the mouse clicks a bar, the bar will be highlighted, 
    //  and the bubble chart will show the bubbles of the selected airline. 
    //  When the mouse clicks this selected bar for the second time, 
    //  it will unselect the bar, and the color of the bar will turn to normal.
    //  Hint: You can compare the selectedAirline to d.AirlineID if they are the same,
    //  call setSelectedAirline(null);
    //4.Remove the onMouseOver and onMouseOut;
    
    return <g transform={`translate(${offsetX}, ${offsetY})`}>
        { data.map( d => {
            return <rect key={d.AirlineID} x={0} y={yScale(d.AirlineName)}
                width={xScale(d.Count)} height={yScale.bandwidth()} 
                onMouseOver={()=>onMouseOver(d)} onMouseOut={onMouseOut}
                stroke="black" fill={color(d)}/>
        }) }
        <YAxis yScale={yScale} height={height} offsetX={offsetX}/>
        <XAxis xScale={xScale} width={width} height={height} />
    </g>
}