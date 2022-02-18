import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import RoomItem from '../../components/RoomItem/RoomItem';

import './rooms.css';

export default function Rooms() {
  const [rooms, setRooms] = useState(undefined);
  const [error, setError] = useState(undefined);

  const [refresh, setRefresh] = useState(undefined);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRoomName, setNewRoomName] = useState('');

  const history = useHistory();


  const test_get = () => {
    axios.get('https://ta2h3nna.herokuapp.com/all_designs')
      .then(response => {
        console.log(response.data);
     })
      .catch(error => {
        console.log("API call failed");
      });

  };
  return (
    <div className="content">
     <div>
        <button className="page-button" onClick={() => test_get()}> Add New Room </button>
      </div>
    </div>
  )
}
