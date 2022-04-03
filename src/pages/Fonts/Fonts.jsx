import './fonts.css';
import React, { Component } from 'react';

class App extends Component {
   constructor(props) {
      super(props);

      this.state = { text: '' };

      this.handleChange = this.handleChange.bind(this);
   } 

   handleChange(e) { 
      this.setState({
         text : e.target.value
      });
   }
render() { 
 return(
	 
    <div>
        <h1>Under construction pls ignore</h1>
	  <div>
	    Change name: <input type="text" value={this.state.text} onChange={this.handleChange} />
	  </div>
	<p className="testFont" >{this.state.text} </p>
	<p className="testFont">2</p>
	<p className="testFont">3</p>
    </div>
 );
}
}
export default App;

/*
function App() {
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

