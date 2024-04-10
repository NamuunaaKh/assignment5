import React from "react";

// function Routes(props){
//     const {projection, routes, selectedAirlineID} = props;
//     // TODO: 
//     // return the routes of the selected airline; 
//     // If the selectedAirlineID is null (i.e., no airline is selected), return <g></g>.

//     //projection -> SourceLatitude, SourceLongtitude, DestLatitude, DestLongtitude


//     if (selectedAirlineID) {
//         return <g>
//             {/* {
//                 routes.map((route, index) => (
//                     <path
//                         key={index}
//                         d={projection([route])}    
//                     />
//                 ))
//             } */}
//         </g>
//     }
//     else {
//         return <g></g>
//     }
// }

function Routes(props){
    const {projection, routes, selectedAirline} = props;
    if(selectedAirline){
        let selectedRoutes = routes.filter(a => a.AirlineID === selectedAirline);
        return <g>
            {
                selectedRoutes.map( d => <line key={d.ID}
                            x1={ projection([d.SourceLongitude, d.SourceLatitude])[0]}
                            y1={ projection([d.SourceLongitude, d.SourceLatitude])[1]}
                            x2={ projection([d.DestLongitude, d.DestLatitude])[0]}
                            y2={ projection([d.DestLongitude, d.DestLatitude])[1]}
                            stroke={"#992a2a"}
                            opacity={0.1}
                        >
                    </line>
                )}
            
        </g>
    } else {
        return <g>

        </g>
    }
}


export { Routes }