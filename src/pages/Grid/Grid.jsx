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
    },
    {
	src: "https://i.pinimg.com/originals/8b/5a/8f/8b5a8fd8301c37f53f7ceb3990427111.jpg",
	thumbnail:"https://i.pinimg.com/originals/8b/5a/8f/8b5a8fd8301c37f53f7ceb3990427111.jpg",
	thumbnailWidth: 600,
	thumbnailHeight: 300,    
	caption: "Artist: Ginkgo"
    },
    {
	src: "https://i.pinimg.com/750x/1a/b4/7f/1ab47ff65232f8a327c43543e9d9c79c.jpg",
	thumbnail: "https://i.pinimg.com/750x/1a/b4/7f/1ab47ff65232f8a327c43543e9d9c79c.jpg",
	thumbnailWidth: 600,
	thumbnailHeight: 300,    
	caption: "Hand lines",
    },
	 {
		 src: "https://i.pinimg.com/750x/d6/6e/1c/d66e1c00e0889f8de2f783eaf94d9a35.jpg",
		 thumbnail: "https://i.pinimg.com/750x/d6/6e/1c/d66e1c00e0889f8de2f783eaf94d9a35.jpg",
		 thumbnailWidth: 600,
	thumbnailHeight: 300,    
	 caption: "@adrianmactattoo"
    } 

  ];

  return(
	<div className="grid"  > 	
	   
	<h1 className="invisible">bla</h1>  
	   <Gallery images={data}
	        rowHeight={300}
	  	enableImageSelection={false}
	    />
	</div>
	
  );
}

export default App;
