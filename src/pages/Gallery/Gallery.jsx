import { Carousel } from 'react-carousel-minimal';

function App() {
    
  // api call for all design jsons
//    const get_all_designs = () =>{
//	const url = "https://ta2h3nna.herokuapp.com/all_designs"
//	const options = {
//	    method: "GET",
//	    headers: {
//		Accept: "application/json",
//		"Content-Type": "application/json;charset=UTF-8",
//	    },
//	};
//
//	fetch(url, options)
//	    .then((response) => response.json())
//	    .then((data) => {
//		console.log(data);
//	    });
//    }


 const data = [
    {
      image: "https://static.wixstatic.com/media/1900bd_7f207d128dc143748e00bf84925da3d1~mv2.jpeg/v1/fill/w_1242,h_1187,al_c,q_85,enc_auto/1900bd_7f207d128dc143748e00bf84925da3d1~mv2.jpeg",
      caption: "Artist: Mikhail @MikhailAndersson"
    },
    {
      image: "https://static.wixstatic.com/media/1900bd_6d2bb3ac21194fdf928ee10c337afd65~mv2.jpeg/v1/fill/w_1242,h_849,al_c,q_85,enc_auto/1900bd_6d2bb3ac21194fdf928ee10c337afd65~mv2.jpeg",
      caption: "Artist: Dmitry @Dmitry.NYC"
    },
    {
      image: "https://static.wixstatic.com/media/1900bd_1fe33b885a914512ad8fcc2310af624a~mv2.jpeg/v1/fill/w_1242,h_1186,al_c,q_85,enc_auto/1900bd_1fe33b885a914512ad8fcc2310af624a~mv2.jpeg",
      caption: "Artist: Abigail @abi.kishibe.tattoos"
    },
    {
      image: "https://static.wixstatic.com/media/1900bd_2d345aff1ca749b281e4176eedaf444c~mv2.jpeg/v1/fill/w_1242,h_1162,al_c,q_85,enc_auto/1900bd_2d345aff1ca749b281e4176eedaf444c~mv2.jpeg",
      caption: "Artist: Nina @nina.p.tattoo"
    },
    {
      image: "https://static.wixstatic.com/media/1900bd_078fd675345940e68cc6d18a406a823b~mv2.jpeg/v1/fill/w_2646,h_1954,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/1900bd_078fd675345940e68cc6d18a406a823b~mv2.jpeg",
      caption: "Artist: Weng @Wenghiskhan_tattoos"
    },
    {
      image: "https://static.wixstatic.com/media/1900bd_f8514d552c154255ab61248c18eae6a5~mv2.jpg/v1/fill/w_1184,h_1080,al_c,q_85,enc_auto/1900bd_f8514d552c154255ab61248c18eae6a5~mv2.jpg",
      caption: "Artist: Ledwin @LedHeadTattoos"
    },
    {
      image: "https://static.wixstatic.com/media/1900bd_14a4b109b30d4de39be37defbf29c96a~mv2.jpeg/v1/fill/w_1242,h_1215,al_c,q_85,enc_auto/1900bd_14a4b109b30d4de39be37defbf29c96a~mv2.jpeg",
      caption: "Artist: Sasha @sashatattoo.nyc"
    },
    {
      image: "https://static.wixstatic.com/media/1900bd_b1329c87b6764b51acd4009fb852d739~mv2.jpeg/v1/fill/w_1242,h_1543,al_c,q_85,enc_auto/1900bd_b1329c87b6764b51acd4009fb852d739~mv2.jpeg",
      caption: "Artist: Radames @radames_tattoo"
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
        <h1>TATTOO COLLECTION</h1>
        <h1 style={{ color: 'White' }}>Browse for your favorite tattoo genre and artist name</h1>
        <a href="https://www.firstclasstattoos.com">Visit Tattoo Parlor</a>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={10000}
            width="2300px"
            height="1000px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="black"
            pauseIconSize="40px"
            slideBackgroundColor="black"
            slideImageFit="contain"
            thumbnails={true}
            thumbnailWidth="200px"
            style={{
              textAlign: "center",
              maxWidth: "3000px",
              maxHeight: "1500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
