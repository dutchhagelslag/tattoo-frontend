import React,{useEffect, useState} from 'react';
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

<<<<<<< HEAD

    const to_data = image => ({src: image.src, 
			       thumbnail: image.src, 
			       thumbnailWidth: image.thumbnailWidth, 
			       thumbnailHeight: image.thumbnailHeight, 
			       caption: image.caption});

    useEffect(() => {
        fetch(url, options)
    	    .then(response => response.json())
	    .then(response => JSON.parse(response))
    	    .then(images => {
    	        const test = images.map(to_data);
    	        setData(test);
    	        console.log(test);
    	    })
    	    .catch (err =>{
    	        console.log(err);
    	    })
    });

=======
<<<<<<< HEAD
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

=======
    useEffect(() => {
        fetch(url, options)
    	    .then(response => response.json())
	    .then(response => JSON.parse(response))
    	    .then(images => {
    	        const to_data = image => ({src: image.src, thumbnail: image.src, thumbnailWidth: image.thumbnailWidth, thumbnailHeight: image.thumbnailHeight, caption: image.caption});
    
    	        const test = images.map(to_data);
    	        setData(test);
    	        console.log(test);
    	    })
    	    .catch (err =>{
    	        console.log(err);
    	    })
    });
>>>>>>> bd07d594d9e382cc20566f420937e1ea748c3182
>>>>>>> baf74c6a9ddbb28d793874a1d3e9374d38615255

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
