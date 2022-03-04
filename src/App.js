import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import Gallery from './pages/Gallery/Gallery';
import Fonts from './pages/Fonts/Fonts';
import Artists from './pages/Artists/Artists';

import './App.css';

function App() {
  return (
	<>
	<div className="Navbar">

	<Navbar fixed="top" bg="light" variant="light" >
	      <Container>
	      <Navbar.Brand className="Navbar-title" href="/">Ta2H3nna</Navbar.Brand>
	      <Nav className="me-auto">
	          <Nav.Link className="Navbar-subtitle" href="/rooms">Rooms</Nav.Link>
	  	  <Nav.Link className="Navbar-subtitle" href="/Gallery">Tattoo Design Gallery</Nav.Link>
	  	  <Nav.Link className="Navbar-subtitle" href="/Fonts">Fonts Gallery</Nav.Link>
		<Nav.Link className="Navbar-subtitle" href="/Artists">All available artists</Nav.Link>	   
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
            <Route exact={true} path={'/rooms'}>
              <Rooms />
            </Route>
            <Route exact={true} path={'/gallery'}>
              <Gallery />
	    </Route>
            <Route exact={true} path={'/fonts'}>
              <Fonts />
            </Route>
	   <Route exact={true} path={'/artists'}>
	  	<Artists />
	   </Route>
          </Switch>
        </Router>
      </div>
    </div>
	  </>
  );
}

export default App;
