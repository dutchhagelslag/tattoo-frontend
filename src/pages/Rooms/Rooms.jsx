export default function Rooms() {

  const test_get = () => {
      const url = "https://ta2h3nna.herokuapp.com/all_designs"
      const options = {
	  method: "GET",
	  headers: {
	      Accept: "application/json",
	      "Content-Type": "application/json;charset=UTF-8",
	  }
	    // body: JSON.stringify({
	    // 	a: 10,
	    // 	b: 20,
	    // }),

      };

      fetch(url, options)
	  .then((response) => response.json())
	  .then((data) => {
	      console.log(data);
	      const designs = JSON.parse(data)
	      console.log(designs[1].URL)
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
