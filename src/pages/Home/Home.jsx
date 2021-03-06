import React from 'react';
import './home.css';
import {useHistory} from 'react-router-dom';
// eslint-disable-next-line
import {GlobalData} from './../../global-data.js';

export default function Home(){
  const history = useHistory();

  function navigateToPage(path) {
    history.push(path);
  }

  return (
    <div className="home-content">

     <button
        onClick={() => navigateToPage('/gallery')}
        className="page-button"
      >
        Artists Gallery (slideshow)
      </button> 

      <button
        onClick={() => navigateToPage('/fonts')}
        className="page-button"
      >
        Fonts Preview
      </button> 


	<button
	  onClick={() => navigateToPage('/grid')}
	  className="page-button"
	 >
	  Tattoo Designs grid 
	 </button>
        <button
        onClick={() => navigateToPage('/map')}
        className="page-button"
      >
        Map
      </button>

     <button
        onClick={() => navigateToPage('/upload')}
        className="page-button"
      >
        Upload Tattoo
      </button> 


	</div>
	
      

  );
};

