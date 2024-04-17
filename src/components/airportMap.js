import React from "react";
import { geoPath, geoMercator } from "d3-geo";
import { Routes } from './routes'
import { count } from "d3";


// function AirportMap(props){
//     const {width, height, countries, airports, routes, selectedAirlineID} = props;
//     //TODO: 
//     // 1.Define a projection which is geoMercator; 
//     // set .scale(97), and .translate([width/2, height/2+20]); 
//     // 2. Define a path generator using geoPath();
//     // 3. Plot the world map; remember to use countries.features.map(); (Note: stroke is "#ccc", and color is "#eee");
//     // 4. Plot the airports; remember to use routes.map(); (Note: radius is 1; color is "#2a5599"); 
//     let projection;//TODO: define a projection of Mercator.
//     projection = geoMercator()
//                 .scale(97)
//                 .translate([width/2, height/2+20]);
//     let path = geoPath().projection(projection);
//     //const getScreenCoordinates = (longitude, latitude) => projection([longitude, latitude]);

//     return <g>
//         {/* <path d={path({type: 'Sphere'})} /> */}
//         {countries.features.map(d => 
//             <path
//                 key={d.properties.name + "boundary"}
//                 d={path(d)}
//                 style={{ fill: "#eee", stroke: "#ccc" }}
//             />
//         )}

//         {/* {airports.map(d => {
//                 const [x, y] = getScreenCoordinates(d.Longitude, d.Latitude);
//                 return (
//                     <circle
//                         key={d.AirportID}
//                         cx={x}
//                         cy={y}
//                         r={1}
//                         fill={"#2a5599"}
//                     />
//                 );
//             })
//         }  */}
//         {
//             airports.map(d => 
//                 <circle key={d.AirportID} 
//                         cx={projection([d.Longitude, d.Latitude])[0]}
//                         cy={projection([d.Longitude, d.Latitude])[1]} 
//                         r={1} 
//                         fill={"#2a5599"}>

//                 </circle>)
//         }
//         <Routes projection={projection} routes={routes} selectedAirlineID={selectedAirlineID}/>
//     </g>
// }

// export { AirportMap }

function AirportMap(props){
    const {width, height, countries, airports, routes, selectedAirline} = props;
    let projection = geoMercator();//TODO: Create a projection of type Mercator.
    projection.scale(97)
            .translate([width / 2, height / 2 + 20]);
    let path = geoPath().projection(projection);
    return <g>
        {
            countries.features.map(d => <path key={d.properties.name} d={path(d)} 
            stroke={"#ccc"} fill={"#eee"}></path>)
        }
        {
            airports.map(d => <circle key={d.AirportID} cx={projection([d.Longitude, d.Latitude])[0]}
                    cy={projection([d.Longitude, d.Latitude])[1]} r={1} fill={"#2a5599"}></circle>)
        }
        <Routes projection={projection} routes={routes} selectedAirline={selectedAirline}/>
    </g>


}

export { AirportMap }

