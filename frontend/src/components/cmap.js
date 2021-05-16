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





import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken="pk.eyJ1IjoidmlpaWlpc2giLCJhIjoiY2s4YXE4NmYyMDRxaTNkbzNhbHV4ajk3aiJ9.TvnXm-qD00gP62DCRwg4EA";

// Sample data 
const data = [
	{
		"location": "North campus ulh river",
		"city": "Mandi",
		"state": "Himachal Pradesh",
		"coordinates": [76.988223 ,31.77842],
	},
	{
		"location": "south campus ulh river",
		"city": "Mandi",
		"state": "Himachal Pradesh",
		"coordinates": [76.987223 ,31.77742],
	},
	{
		"location": "North campus ulh river",
		"city": "Mandi",
		"state": "Himachal Pradesh",
		"coordinates": [ 76.9861,31.7754],
	}
]

class Cmap extends React.Component{

	// Set up states for updating map 
	constructor(props){
		super(props);
		this.state = {
		
            lat: 31.7754,
      lng:  76.9861,
      zoom: 15,
      limit:1,
		}
	}

	// Create map and lay over markers
	componentDidMount(){
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/dark-v10', 
			center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    }
    )
           
  map.on('click', function(e) {
    // The event object (e) contains information like the
    // coordinates of the point on the map that was clicked.
    console.log('A click event has occurred at ' + e.lngLat);
   
    var marker = new mapboxgl.Marker()
    .setLngLat(e.lngLat)
    .setPopup(new mapboxgl.Popup({ offset: 30 })
    .setHTML('<h4>' + e.lngLat))
    .addTo(map);

  })



    data.forEach((location) => 
    {
			console.log(location)
			var marker = new mapboxgl.Marker()
							.setLngLat(location.coordinates)
							.setPopup(new mapboxgl.Popup({ offset: 30 })
							.setHTML('<h4>' + location.city + '</h4>' + location.location))
							.addTo(map);

    }
    
    )
    
    
  }
  


	render(){

    console.log("this is a data of markers : ", data);

		return(
			<div>
				<div ref={el => this.mapContainer = el}  style={{width:'100%', height:'100vh'}} />

			</div>
		)
	}
}

export default Cmap;