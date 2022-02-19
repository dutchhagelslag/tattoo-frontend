import axios from 'axios';

export default function Rooms() {


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
