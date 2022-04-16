import React from "react";
import {
    GoogleMap, 
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";

import "@reach/combobox/styles.css";

const libraries = ["places"];

export default function App() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APPGOOGLE_MAPS_API_KEY,
        libraries,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";
    return <div>map</div>;
}
