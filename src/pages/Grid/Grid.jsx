import React,{useState} from 'react';
import Gallery from 'react-grid-gallery';

function App() {

    const [Data,setData]= useState([])
    
    // api call
    const url = "https://ta2h3nna.herokuapp.com/all_designs"
    const options = {
	method: "GET",
	headers: {
	    Accept: "application/json",
	    "Content-Type": "application/json;charset=UTF-8",
	}
    };

    fetch(url, options)
	.then(response => response.json())
        .then(rsp_json => JSON.parse(rsp_json))
	.then(images => {
	    const to_data = image => ({src: image.src, 
				       thumbnail: image.src, 
				       thumbnailWidth: image.thumbnailWidth, 
				       thumbnailHeight: image.thumbnailHeight, 
				       caption: image.caption});
	    const test = images.map(to_data);
	    setData(test);
	    console.log(test);
	})
	.catch (err =>{
	    console.log(err);
	})


  return(
	<div className="grid" > 	   
	   <h1 className="invisible">bla</h1>  
	   <Gallery images={Data}
	        rowHeight={300}
	  	enableImageSelection={false}
	   />
	</div>
	
  );
}

export default App;
