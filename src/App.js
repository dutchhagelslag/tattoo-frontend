import React,{useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import { Navbar, Nav, Container} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import {GlobalData} from './global-data.js';

import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Fonts from './pages/Fonts/Fonts';
import Grid from './pages/Grid/Grid';
import Upload from './pages/Upload/Upload.jsx';
import Map from './pages/Map/Map.jsx';

import './App.css';

const DataProvider = ({children}) => {
    const [data,setData] = useState([]); // remove default when not testing
    
    // api call
    const url = "https://ta2h3nna.herokuapp.com/all_designs";
    const options = {
	method: "GET",
	headers: {
	    Accept: "application/json",
	    "Content-Type": "application/json;charset=UTF-8",
	}
    };

    const to_data = image => ({src: image.src, 
			       thumbnail: image.src, 
			       thumbnailWidth: parseInt(image.thumbnailWidth), 
			       thumbnailHeight: parseInt(image.thumbnailHeight), 
			       caption: image.caption});

    useEffect(() => {
	document.title = "TA2H3NNA"
        fetch(url, options)
    	    .then(response => response.json())
	    .then(response => JSON.parse(response))
    	    .then(images => {
    	        const test = images.map(to_data);
    	        setData(test);
    	        console.log(test);
    	    })
    	    .catch (err =>{
    	        console.log(err);
    	    });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

   const { Provider } = GlobalData
   return(
       <Provider value={data}>
           {children}
       </Provider>
   )
}

function App() {
    

    // 	<MyContext.Provider value={[
    // {
    //   image: "https://static.wixstatic.com/media/1900bd_7f207d128dc143748e00bf84925da3d1~mv2.jpeg/v1/fill/w_1242,h_1187,al_c,q_85,enc_auto/1900bd_7f207d128dc143748e00bf84925da3d1~mv2.jpeg",
    //   caption: "Artist: Mikhail @MikhailAndersson"
    // }]}>


  return (
  <DataProvider> 
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
	  </DataProvider>
  );
}

export default App;
