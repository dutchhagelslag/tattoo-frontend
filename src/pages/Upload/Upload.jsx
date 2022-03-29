import { Carousel } from 'react-carousel-minimal';

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

  return (
    <div className="App">
    </div>
  );
}

export default App;


