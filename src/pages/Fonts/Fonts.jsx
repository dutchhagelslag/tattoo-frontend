import './fonts.css';
import React, { Component } from 'react';
// eslint-disable-next-line
import {useContext } from 'react';
// eslint-disable-next-line
import {GlobalData} from './../../global-data.js';

class App extends Component {
   constructor(props) {
      super(props);

      this.state = { text: 'Lorem Ipsum' };

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

        <div className="fontScroll">
          <div className="testFont" >
            <div className="fontName">Lavishly Yours</div>
            <div id="tf1" className="fontChild">{this.state.text}</div>
          </div>
          <div className="testFont" >
            <div className="fontName">Herr Von Muellerhoff</div>
            <div id="tf2" className="fontChild">{this.state.text}</div>
          </div>
          <div className="testFont" >
            <div className="fontName">Monsieur La Doulaise</div>
            <div id="tf3" className="fontChild">{this.state.text}</div>
          </div>
          <div className="testFont" >
            <div className="fontName">Six Caps</div>
            <div id="tf4" className="fontChild">{this.state.text}</div>
          </div>
          <div className="testFont" >
            <div className="fontName">Tangerine</div>
            <div id="tf5" className="fontChild">{this.state.text}</div>
          </div>
          <div className="testFont" >
            <div className="fontName">Alegreya Sans SC</div>
            <div id="tf6" className="fontChild">{this.state.text}</div>
          </div>
          <div className="testFont" >
            <div className="fontName">Monsieur La Doulaise</div>
            <div id="tf3" className="fontChild">{this.state.text}</div>
          </div>
          <div className="testFont" >
            <div className="fontName">Monsieur La Doulaise</div>
            <div id="tf3" className="fontChild">{this.state.text}</div>
          </div>
          <div className="testFont" >
            <div className="fontName">Monsieur La Doulaise</div>
            <div id="tf3" className="fontChild">{this.state.text}</div>
          </div>
          <div className="testFont" >
            <div className="fontName">Monsieur La Doulaise</div>
            <div id="tf3" className="fontChild">{this.state.text}</div>
          </div>
          <div className="testFont" >
            <div className="fontName">Monsieur La Doulaise</div>
            <div id="tf3" className="fontChild">{this.state.text}</div>
          </div>
          <div className="testFont" >
            <div className="fontName">Monsieur La Doulaise</div>
            <div id="tf3" className="fontChild">{this.state.text}</div>
          </div>
          <div className="testFont" >
            <div className="fontName">Monsieur La Doulaise</div>
            <div id="tf3" className="fontChild">{this.state.text}</div>
          </div>
          <div className="testFont" >
            <div className="fontName">Monsieur La Doulaise</div>
            <div id="tf3" className="fontChild">{this.state.text}</div>
          </div>
          <div className="testFont" >
            <div className="fontName">Monsieur La Doulaise</div>
            <div id="tf3" className="fontChild">{this.state.text}</div>
          </div>
          <div className="testFont" >
            <div className="fontName">Monsieur La Doulaise</div>
            <div id="tf3" className="fontChild">{this.state.text}</div>
          </div>
        </div> 




        
    </div>
 );
}
}
export default App;

