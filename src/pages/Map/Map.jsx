/* eslint-disable */
import React from "react";
import {
    GoogleMap, 
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";

import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";


const libraries = ["places"];
const mapContainerStyle = {
    width: "80vw",
    height: "80vh",
};
const center = {
    lat: 40.69452,
    lng: -73.98650,  
};

const options= {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
};


export default function App() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";
    return ( 
        <div>
            <h1>
                Parlors{" "}
                <span role= "img" aria-label = "Cool">
                    👌
                </span>
            </h1>
            <GoogleMap 
                mapContainerStyle = {mapContainerStyle} 
                zoom = {15} 
                center = {center}
                options={options}
            ></GoogleMap>
        </div>
    );
}
