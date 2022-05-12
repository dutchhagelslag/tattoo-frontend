import React from "react";
import {
    GoogleMap, 
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";

import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";

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
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);    


    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    },[]);    

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
	    <Search />
            <GoogleMap 
                mapContainerStyle = {mapContainerStyle} 
                zoom = {15} 
                center = {center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {markers.map((marker) => (
                    <Marker
                        key={`${marker.lat}-${marker.lng}`}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        onClick={() => {
                            setSelected(marker);
                        }}
                        icon={{
                            url: `/Comet.svg`,
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(15, 15),
                            scaledSize: new window.google.maps.Size(30, 30),
                        }}
			onClick={() => {
			    setSelected(marker);
			}}
                    />
                ))}
	        {selected ? (
		    <InfoWindow position={{lat: selected.lat, lng: selected.lng}} >
		        <div>
			    <h2>Awesome Tattoo Parlor!</h2>
			    <p>Spotted {formatRelative(selected.time, new Date())}</p>
		        </div>
		    </InfoWindow>
		) : null}    
            </GoogleMap>
        </div>
    );
}

function Search() {
    const {ready, value, suggestions: {status, data}, setValue, clearSuggestion} = usePlacesAutocomplete({
	requestOptions:{
            location: {lat: () => 40.69452,lng:() => -73.98650 },
	    radius: 200 * 1000, 
	},
    });
    return (
	<div className="search">
	    <Combobox 
	        onSelect = {(address) =>{
		    console.log(address);
	        }}
	    >
	        <ComboboxInput 
                    value={value} 
		    onChange = {(e) =>{
		        setValue(e.target.value);
	            }}
	            disabled={!ready}
		    placeholder = "Enter an address"
                />
	    </Combobox>
        </div>
    );
}















