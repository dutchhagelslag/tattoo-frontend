import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap'; 

import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import Gallery from './pages/Gallery/Gallery';

import './App.css';

function App() {
  return (
	<>
	<div style={{ display: 'block', width: 700, padding: 30 }}>
	        <h4>React-Bootstrap NavBar Component</h4>

	<Navbar fixed="top" bg="light" variant="light">
	      <Container>
	      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
	      <Nav className="me-auto">
	        <Nav.Link href="#home">Home</Nav.Link>
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
