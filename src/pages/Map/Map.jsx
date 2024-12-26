// import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
// import { useState } from 'react';

// const LocationMarker = ({ setPosition }) => {
    //     const map = useMapEvents({
        //         click() {
            //             map.locate();
            //         },
            //         locationfound(e) {
                //             setPosition(e.latlng);
                //             map.flyTo(e.latlng, map.getZoom());
//         },
//     });

//     return null; // No need to render anything from this component
// };

// const Map = () => {
//     const [position, setPosition] = useState(null);

//     return (
//         <>
//             <Navbar />
//             <div className='h-96 w-full'>
//                 {/* <MapContainer
//                center={position || [51.505, -0.09]} // default center if position is null
//                zoom={13}
//                style={{ height: "100vh", width: "100%" }}
//             >
//                 <TileLayer
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 {position && (
    //                     <Marker position={position}>
    //                         <Popup>You are here</Popup>
    //                     </Marker>
    //                 )}
    //                 <LocationMarker setPosition={setPosition} />
    //             </MapContainer> */}
    //                 <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    //                     <TileLayer
    //                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //                     />
    //                     <Marker position={position}>
    //                         <Popup>
    //                             A pretty CSS3 popup. <br /> Easily customizable.
    //                         </Popup>
    //                     </Marker>
//                 </MapContainer>

//             </div>
//         </>
//     );
// }

// export default Map;

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from '../Shared/Navbar/Navbar';

const Map = () => {
  return (
    <>
    <Navbar></Navbar>
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </>
  );
};

export default Map;
