import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';

import './fonts.css';

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
                        href="https://www.designworkplan.com/media/pages/read/arial-is-everywhere/0c09943d44-1617288500/arial_header_930x530-01.png"
                        data-sub-html="<h4>Font Name: Arial</h4><p> 
					   </p>"
                    >
                        <img
			    alt ="img"
                            className="img-responsive"
                            src="https://www.designworkplan.com/media/pages/read/arial-is-everywhere/0c09943d44-1617288500/arial_header_930x530-01.png"
                        />
                    </a>

            </LightGallery>
        </div>
    );
}
