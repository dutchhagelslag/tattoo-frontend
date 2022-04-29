import './fonts.css';
import React, { Component } from 'react';
// eslint-disable-next-line
import {useContext } from 'react';
// eslint-disable-next-line
import {GlobalData} from './../../global-data.js';

class App extends Component {
   constructor(props) {
      super(props);

      this.state = { text: 'Loren Ipsum' };

      this.handleChange = this.handleChange.bind(this);
   } 

   handleChange(e) { 
      this.setState({
         text : e.target.value
      });
   }
render() { 
 return(
	 
    <div className="box">
        <h1 className="pageTitle">Fonts gallery</h1>
        <div className="realtimeInput" >
          <input 
            type="text" 
            placeholder="Start typing to see a preview of all of our fonts..."   
            onChange={this.handleChange} />
        </div>
        
	      <div className="testFont" id="tf1">{this.state.text} </div>
        <div className="testFont" id="tf2">{this.state.text} </div>
        <div className="testFont" id="tf3">{this.state.text} </div>
        <div className="testFont" id="tf4">{this.state.text} </div>
        <div className="testFont" id="tf5">{this.state.text} </div>
        <div className="testFont" id="tf6">{this.state.text} </div>
    </div>
 );
}
}
export default App;

/*
function App() {
 const Data = useContext(GlobalData);
 const data = [
    {
      image: "https://www.designworkplan.com/media/pages/read/arial-is-everywhere/0c09943d44-1617288500/arial_header_930x530-01.png",
      caption: "Font: Arial"
    },
    {
      image: "https://www.designworkplan.com/media/pages/read/arial-is-everywhere/0c09943d44-1617288500/arial_header_930x530-01.png",
      caption: "Font: Arial"
    },
    {
      image: "https://www.designworkplan.com/media/pages/read/arial-is-everywhere/0c09943d44-1617288500/arial_header_930x530-01.png",
      caption: "Font: Arial"
    },
    {
      image: "https://www.designworkplan.com/media/pages/read/arial-is-everywhere/0c09943d44-1617288500/arial_header_930x530-01.png",
      caption: "Font: Arial"
    },
    {
      image: "https://www.designworkplan.com/media/pages/read/arial-is-everywhere/0c09943d44-1617288500/arial_header_930x530-01.png",
      caption: "Font: Arial"
    },
    {
      image: "https://www.designworkplan.com/media/pages/read/arial-is-everywhere/0c09943d44-1617288500/arial_header_930x530-01.png",
      caption: "Font: Arial"
    },
    {
      image: "https://www.designworkplan.com/media/pages/read/arial-is-everywhere/0c09943d44-1617288500/arial_header_930x530-01.png",
      caption: "Font: Arial"
    },
    {
      image: "https://www.designworkplan.com/media/pages/read/arial-is-everywhere/0c09943d44-1617288500/arial_header_930x530-01.png",
      caption: "Font: Arial"
    },
    {
      image: "https://www.designworkplan.com/media/pages/read/arial-is-everywhere/0c09943d44-1617288500/arial_header_930x530-01.png",
      caption: "Font: Arial"
    }
    
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2>Font COLLECTION</h2>
        <p>Browse for Fonts of your choice.</p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={3000}
            width="1920px"
            height="1080px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="contain"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1920px",
              maxHeight: "1080px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
*/

