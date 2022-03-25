import React,{useState} from 'react';
import Gallery from 'react-grid-gallery';

// const data = [
//     {
// 	src: "https://static7.depositphotos.com/1041273/734/v/600/depositphotos_7347148-stock-illustration-hand-writing.jpg",
// 	thumbnail: "https://static7.depositphotos.com/1041273/734/v/600/depositphotos_7347148-stock-illustration-hand-writing.jpg",
// 	thumbnailWidth: 600,
// 	thumbnailHeight: 300,    
// 	caption: "Artist: Jacob"
//     },
//     {
// 	src: "https://i.pinimg.com/originals/8b/5a/8f/8b5a8fd8301c37f53f7ceb3990427111.jpg",
// 	thumbnail:"https://i.pinimg.com/originals/8b/5a/8f/8b5a8fd8301c37f53f7ceb3990427111.jpg",
// 	thumbnailWidth: 600,
// 	thumbnailHeight: 600,    
// 	caption: "Artist: Ginkgo"
//     },
//     {
// 	src: "https://i.pinimg.com/750x/1a/b4/7f/1ab47ff65232f8a327c43543e9d9c79c.jpg",
// 	thumbnail: "https://i.pinimg.com/750x/1a/b4/7f/1ab47ff65232f8a327c43543e9d9c79c.jpg",
// 	thumbnailWidth: 293,
// 	thumbnailHeight: 521,    
// 	caption: "Hand lines",
//     },
//     {
// 	src: "https://i.pinimg.com/750x/d6/6e/1c/d66e1c00e0889f8de2f783eaf94d9a35.jpg",
// 	thumbnail: "https://i.pinimg.com/750x/d6/6e/1c/d66e1c00e0889f8de2f783eaf94d9a35.jpg",
// 	thumbnailWidth: 343,
//  	thumbnailHeight: 611,    
// 	caption: "@adrianmactattoo"
//     } 

// ];

// function img_data (src, thumbnail, thumbnailWidth, thumbnailHeight, caption){
//   this.src = src;
//   this.thumbnail = thumbnail;
//   this.thumbnailWidth = thumbnailWidth;
//   this.thumbnailHeight = thumbnailHeight;
//   this.caption = caption;
// }

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
	// .then(rsp => {rsp)})
	.then(data => {
	    // console.log(data);
	    const images = JSON.parse(data);
	    const to_data = image => ({src: image.src, thumbnail: image.src, thumbnailWidth: image.thumbnailWidth, thumbnailHeight: image.thumbnailHeight, caption: image.caption});

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
