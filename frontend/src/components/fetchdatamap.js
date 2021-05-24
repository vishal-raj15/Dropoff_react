// import React, {Component , setState} from 'react';
// import ReactMapGL ,{Marker} from 'react-map-gl';
//  import 'mapbox-gl/dist/mapbox-gl.css';
//  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
 
//  class Cmap extends Component {
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
// export default Cmap;





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

import { Message, Form } from "semantic-ui-react";


import "../App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'semantic-ui-css/semantic.min.css'


function Getmarkers() {
//   const myStorage = window.localStorage;
//   const [currentUsername, setCurrentUsername] = useState(myStorage.getItem("user"));
//   const [pins, setPins] = useState([]);

  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [name, setName] = useState(null);
  const [dest, setDest] = useState(null);

  const [weight , setWeight] = useState(null);
  const [pickup, setPickup] = useState(null);
  const [contact , setContact] = useState(null);

  const [reward , setReward] = useState(null);
  const [image, setImage] = useState(null);

  const [done, setDone] = useState(false);

  const [viewport, setViewport] = useState({
    latitude: 31.7754,
    longitude: 76.9861,
    zoom: 15,
  });

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };

  const handleAddClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude,
	});

	
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      console.log(" name ", name);
      console.log(" weight ", weight);
      console.log(" contact ", contact);
      console.log(" pickup ", pickup);
      console.log(" dest ", dest);
      console.log(" reward ", reward);

      console.log(" latitude " ,newPlace.lat);
      console.log(" longitude ", newPlace.long);
      

      const newMarker = {
        username: name,
        weight:weight,
        pickup:pickup,
        destination: dest,
        reward:reward,
        contact: contact,
        lat: newPlace.lat,
        long: newPlace.long,
        image:image,
      };

      try {
       axios.post("http://localhost:8080/api/markers", newMarker);
       
      } catch (err) {
        console.log(err);
      }
      

      setDone({done : true});

	
}



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
		onClick={handleAddClick}
		
		
      >

        {newPlace && (
          <>
            <Marker
              latitude={newPlace.lat}
              longitude={newPlace.long}
			  offsetLeft={-23}
			  offsetTop={-50}
            >
              <Room
                style={{
                  fontSize: "50px",
                  color: "tomato",
                  cursor: "pointer",
                }}
              />
            </Marker><Popup
              latitude={newPlace.lat}
			  longitude={newPlace.long}
			  closeButton={false}
				offsetLeft={2 * viewport.zoom}
				offsetTop={-2*viewport.zoom}
					anchor="left"
			  
            >
            
			

				<MDBContainer >
  <MDBRow>
    <MDBCol  >
      <form onSubmit={handleSubmit} >
        <p className="h4 text-center mb-4">Post Request</p>
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Your name
        </label>
		<input type="text" 
			id="defaultFormContactNameEx" 
			className="form-control" 
			onChange={(e) => setName(e.target.value)}/>
        
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
          Parcel Weight
        </label>


		<input type="text" 
			id="defaultFormContactEmailEx" 
			className="form-control" 
			onChange={(e) => setWeight(e.target.value)}/>
        
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Pickup location
        </label>


		<input type="text" 
			id="defaultFormContactSubjectEx"
			 className="form-control" 
			 onChange={(e) => setPickup(e.target.value)}/>
        

		<label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Destination location
        </label>
		<input type="text" id="defaultFormContactSubjectEx" 
			className="form-control" 
			onChange={(e) => setDest(e.target.value)}/>
        

		<label htmlFor="defaultFormContactSubjectEx" 
			className="grey-text">
          Contact
        </label>
		<input type="text" id="defaultFormContactSubjectEx" 
			className="form-control" 
			onChange={(e) => setContact(e.target.value)}/>
        

		<label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Reward
        </label>
		<input type="text" id="defaultFormContactSubjectEx" 
			className="form-control"
			onChange={(e) => setReward(e.target.value)} />
        
        

		<div className="text-center">
          <MDBBtn outline color="info" type="submit" >
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
				
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>



		   
		    </Popup>


          </>
        )}

		{done ? (
            <Message
				className="done"
              positive
              header="Your request have been posted successful"
			  content="You may now trace your request"
			  
            />
          ) : (
            <></>
          )}
      
        
      </ReactMapGL>
    </div>
  );
}

export default Getmarkers;