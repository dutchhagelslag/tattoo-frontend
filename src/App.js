import React from 'react'; import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; import { Navbar, Nav, Container} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Fonts from './pages/Fonts/Fonts';
import Grid from './pages/Grid/Grid';
import Upload from './pages/Upload/Upload.jsx';
import Map from './pages/Map/Map.jsx';

import './App.css';

function App() {
  return (
	<>
	<div className="Navbar">

	<Navbar fixed="top" bg="light" variant="light" >
	      <Container>
	      <Navbar.Brand className="Navbar-title" href="/">Ta2H3nna</Navbar.Brand>
	      <Nav className="me-auto">
	  	  <Nav.Link className="Navbar-subtitle" href="/gallery">Artists Gallery</Nav.Link>
	  	  <Nav.Link className="Navbar-subtitle" href="/fonts">Fonts Gallery</Nav.Link>
		  <Nav.Link className="Navbar-subtitle" href="/grid">Tattoo Designs grid</Nav.Link>	   
		  <Nav.Link className="Navbar-subtitle" href="/upload">Upload</Nav.Link>	   
		  <Nav.Link className="Navbar-subtitle" href="/map">Map</Nav.Link>	   
	      </Nav>
	      </Container>
	 </Navbar>		
	</div>

    <div className="root">
 
	  <div className="content">
        <Router>
          <Switch>
            <Route exact={true} path={'/'}>
              <Home />
            </Route>
           <Route exact={true} path={'/gallery'}>
              <Gallery />
	    </Route>
            <Route exact={true} path={'/fonts'}>
              <Fonts />
            </Route>
	   <Route exact={true} path={'/grid'}>
	  	<Grid />
	   </Route>
	   <Route exact={true} path={'/upload'}>
	  	<Upload />
	   </Route>
           <Route exact={true} path={'/map'}>
                <Map />
           </Route>
          </Switch>
        </Router>
      </div>
    </div>
	  </>
  );
}

export default App;
