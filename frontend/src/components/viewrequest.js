// import React, {Component , setState} from 'react';
// import ReactMapGL ,{Marker} from 'react-map-gl';
//  import 'mapbox-gl/dist/mapbox-gl.css';
//  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
 
//  class Viewrequest extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     viewport: {
//       width:'100%',
//       height:'600px',
//       latitude: 31.7754,
//       longitude:  76.9861,
//       zoom: 15,
//       pitch:50,
      
//     },
//     x:null,
//     y:null,
//   }



//   };

//    giveinfo = (evt) => {
//     console.log("longitude and latitude " ,evt.lngLat[0] , evt.lngLat[1]);
//     this.setState({x : evt.lngLat[0] , y: evt.lngLat[1]})
//   }
 
//   render() {
   
//     return (
//       <>

//       <div> { this.state.x} {this.state.y}</div>
//       <ReactMapGL
//         {...this.state.viewport}
        
//         onViewportChange={(viewport) => this.setState({viewport})}
//         mapboxApiAccessToken = {'pk.eyJ1IjoidmlpaWlpc2giLCJhIjoiY2s4YXE4NmYyMDRxaTNkbzNhbHV4ajk3aiJ9.TvnXm-qD00gP62DCRwg4EA'}
//         mapStyle={'mapbox://styles/mapbox/dark-v10'}
//         onClick={ e => this.giveinfo(e)}
//         >

//         <Marker 
//               latitude={31.7754}
//               longitude={76.9861}>
//               <img style={{ height:'20px' , width:'20px'}}className="map-icon" src="https://img.icons8.com/color/72/marker.png"></img> 
//               <div style={{ fontSize:'10px' , color:'white'}}>iit mandi </div>
              
//               </Marker>


//         </ReactMapGL>
     
//      </>
//     );
//   }
// }
// export default Viewrequest;





// import React from 'react';
// import ReactDOM from 'react-dom';
// import mapboxgl from 'mapbox-gl';

// mapboxgl.accessToken="pk.eyJ1IjoidmlpaWlpc2giLCJhIjoiY2s4YXE4NmYyMDRxaTNkbzNhbHV4ajk3aiJ9.TvnXm-qD00gP62DCRwg4EA";

// Sample data 





import React from 'react';
import ReactDOM from 'react-dom';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useEffect, useState } from "react";
import { Room, Star, StarBorder } from "@material-ui/icons";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

import { format } from "timeago.js";
import { Message, Form } from "semantic-ui-react";


import "../App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'semantic-ui-css/semantic.min.css'

import RequestInfo from './requestInfo';

function Viewrequest() {
//   const myStorage = window.localStorage;
//   const [currentUsername, setCurrentUsername] = useState(myStorage.getItem("user"));
//   const [pins, setPins] = useState([]);

  const [markers, setMarkers] = useState([]);
 

  const [done, setDone] = useState(false);

  const [currentPlaceId, setCurrentPlaceId] = useState(null);

  const [viewport, setViewport] = useState({
    latitude: 31.7754,
    longitude: 76.9861,
    zoom: 15,
  });

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id);
   
  };

  useEffect(() => {
      const getMarkers = async () => {

        try{

            const res = await axios.get("http://localhost:8080/api/markers");
            setMarkers(res.data);
        }catch(err){
            console.log(err);
        }
      }
      getMarkers()
  } ,[]);



  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoidmlpaWlpc2giLCJhIjoiY2s4YXE4NmYyMDRxaTNkbzNhbHV4ajk3aiJ9.TvnXm-qD00gP62DCRwg4EA"
        width="100%"
        height="100%"
        transitionDuration="200"
        mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
        onViewportChange={(viewport) => setViewport(viewport)}
	
		
		
      >
          {markers.map(p => (

            <>

            <Marker
            latitude={p.lat}
            longitude={p.long}
            offsetLeft={-23}
            offsetTop={-50}
            >
            <Room
                style={{
                fontSize: "30px",
                color: "slateblue",
                cursor: "pointer",
                }}

                onClick={() => {handleMarkerClick(p._id)}}
            />
            </Marker>

          {p._id === currentPlaceId && (
          <Popup
        latitude={p.lat}
        longitude={p.long}
        closeButton={true}
        closeOnClick={false}
            offsetLeft={2 * viewport.zoom}
            offsetTop={-2*viewport.zoom}
          anchor="left"
          onClose={() => setCurrentPlaceId(null)}
          >
            <RequestInfo 
                name={p.username}
                weight={p.weight}
                pickup={p.pickup}
                destination = {p.destination}
                contact={p.contact}
                reward={p.reward}
                long={p.long}
                lat={p.lat}
                ctime={p.createdAt}

              />



        </Popup>
          
         )}

</>

  ))}
         

		
        
      </ReactMapGL>
    </div>
  );
}

export default Viewrequest;