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
        Tattoo Gallery
      </button> 
    </div>


  );
};

