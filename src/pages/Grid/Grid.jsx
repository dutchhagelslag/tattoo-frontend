import React,{useContext } from 'react';
import Gallery from 'react-grid-gallery';
import {GlobalData} from './../../global-data.js';

function App() {

  const Data = useContext(GlobalData);
    
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
