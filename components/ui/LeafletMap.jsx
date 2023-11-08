import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Circle,
} from "react-leaflet";
import { useDispatch } from "react-redux";
import "./LeafletMap.css";
import { setLocation } from "@/store/mapdata";

const LeafletMap = () => {
  const [center, setCenter] = useState([20.5937, 78.9629]);
  const dispatch = useDispatch();

  const [locdata, setLocData] = useState({
    latitude: "",
    longitude: "",
  });

  const [clickedCoordinates, setClickedCoordinates] = useState(null);

  useEffect(() => {
    if (clickedCoordinates) {
      dispatch(setLocation(locdata));
      // console.log("locdata",  locdata)
    }
    // console.log("Location found:", clickedCoordinates);
  }, [clickedCoordinates]);

  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setClickedCoordinates([lat, lng]);
        setLocData({ latitude: lat, longitude:lng  });
      },
    });
    return null;
  }

  //   function MyComponent() {
  //     // const map = useMapEvents({
  //     //   click: () => {
  //     //     map.locate();
  //     //   },
  //     //   locationfound: (location) => {
  //     //     setClickedCoordinates([location.latitude, location.longitude]);
  //     //     console.log("location found:", location);
  //     //     // console.log("clickedCoordinates found:", clickedCoordinates);
  //     //   },
  //     // });

  //     const map = useMapEvents({
  //       click: (e) => {
  //         const { lat, lng } = e.latlng;
  //         setClickedCoordinates([lat, lng]);
  //         console.log("Location found:", clickedCoordinates);
  //       },
  //     });
  //     return null;
  //   }

  const handleMapClick = (e) => {
    // alert("hello from map");
    // console.log("hello from map");
    const { lat, lng } = e.latlng;
    console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    setClickedCoordinates({ lat, lng });
  };

  console.log("above the return function in map component");

  return (
    <div>
      <MapContainer
        center={center}
        zoom={10}
        style={{ width: "100%", height: "500px" }}
        onClick={(e) => console.log(e)}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MyComponent></MyComponent>

        {clickedCoordinates && (
          <Marker position={clickedCoordinates}>
            <Circle center={clickedCoordinates} fillColor="blue" radius={500} />
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
