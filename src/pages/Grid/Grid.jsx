import React from 'react';
import Gallery from 'react-grid-gallery';


function App() {
 const data = [
    {
	src: "https://static7.depositphotos.com/1041273/734/v/600/depositphotos_7347148-stock-illustration-hand-writing.jpg",
	thumbnail: "https://static7.depositphotos.com/1041273/734/v/600/depositphotos_7347148-stock-illustration-hand-writing.jpg",
	thumbnailWidth: 600,
	thumbnailHeight: 300,    
	caption: "Artist: Jacob"
    }
  ];

  return(
	<div style={{display: "block", width: "90%"}} > 	
	    <h1>Tattoo Designs</h1> 
	    <div><Gallery images={data}
	        rowHeight= "180"
	  	enableImageSelection={false}
	    /> </div>
	</div>
	
  );
}

export default App;
