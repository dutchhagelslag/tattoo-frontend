import React from 'react';
import {useHistory} from 'react-router-dom';

export default function Home(){
  const history = useHistory();

  function navigateToPage(path) {
    history.push(path);
  }

  return (
    <div className="content">
       <button
        onClick={() => navigateToPage('/rooms')}
        className="page-button"
      >
        Rooms
      </button>

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

	</div>
	
      

  );
};

