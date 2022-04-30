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

