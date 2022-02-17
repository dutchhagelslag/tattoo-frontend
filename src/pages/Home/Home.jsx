import React from 'react';
import {useHistory} from 'react-router-dom';

export default function Home(){
  const history = useHistory();

  function navigateToPage(path) {
    history.push(path);
  }

  return (
    <div className="content">
      <h1> Ta2h3nna Homepage </h1>
      <div>
        <p className="subtitle">"We'll help you choose your next tattoo"</p>
      </div>
      <button
        onClick={() => navigateToPage('/rooms')}
        className="page-button"
      >
        Rooms
      </button>
      <button
        onClick={() => navigateToPage('/users')}
        className="page-button"
      >
        Tattoo Gallery
      </button> 
    </div>
  );
};

