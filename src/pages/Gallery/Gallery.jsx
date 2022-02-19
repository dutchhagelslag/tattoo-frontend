//import React, {useEffect, useState} from 'react';
//import axios from 'axios';
//import {useHistory} from 'react-router-dom';



import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';

import './gallery.css';

export default function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (

        <div className="App">
            <LightGallery
                onInit={onInit}
	        mode="lg-fade"
                plugins={[lgThumbnail, lgZoom]}
            >
                    <a
                        data-lg-size="1400-1400"
                        className="gallery-item"
                        href="https://static.stereogum.com/uploads/2019/02/Lucki-1550606994.jpg"
                        data-sub-html="<h4>Photo by - Good</h4><p> 
					   Artist - Lucki</p>"
                    >
                        <img
			    alt ="img"
                            className="img-responsive"
                            src="https://static.stereogum.com/uploads/2019/02/Lucki-1550606994.jpg"
                        />
                    </a>

                    <a 
      		   data-lg-size="1406-1390" 
	    	   href="https://external-preview.redd.it/datPPgSO8PbVrEIvDnB-oLvziOFin2ToDadRNdjbVbw.jpg?width=640&crop=smart&auto=webp&s=3959b5613a669040659e4fc28000d2d33c429c2a">

                    <img 
			alt="img2" 
			className="img-responsive"
			src="https://external-preview.redd.it/datPPgSO8PbVrEIvDnB-oLvziOFin2ToDadRNdjbVbw.jpg?width=640&crop=smart&auto=webp&s=3959b5613a669040659e4fc28000d2d33c429c2a" />

                </a>

		<a href="https://preview.redd.it/msm091nhzci01.jpg?width=960&crop=smart&auto=webp&s=5dbcc05c38864f8fdc045a5f90f7bb127160e884">
                    <img alt="img1" src="https://preview.redd.it/msm091nhzci01.jpg?width=960&crop=smart&auto=webp&s=5dbcc05c38864f8fdc045a5f90f7bb127160e884" />
                </a>
            </LightGallery>
        </div>
    );
}
