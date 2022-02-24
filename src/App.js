import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import Gallery from './pages/Gallery/Gallery';

import './App.css';

function App() {
  return (
	<>
	<div style={{ display: 'block', width: 7000, padding: 30 }}>
	        

	<Navbar fixed="top" bg="light" variant="light">
	      <Container>
	      <Navbar.Brand href="/">Ta2H3nna</Navbar.Brand>
	      <Nav className="me-auto">
	        <Nav.Link href="/rooms">Rooms</Nav.Link>
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
          </Switch>
        </Router>
      </div>
    </div>
	  </>
  );
}

export default App;
