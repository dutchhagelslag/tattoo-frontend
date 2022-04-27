import { Field, Form, Formik } from 'formik';

async function auth_upload_api_calls(){
    // calls the required apis for authorization
    // synchronously as we need info 

    // 1st api call: for token and entry url
    const api_token_url = "https://ta2h3nna.herokuapp.com/authorize_backblaze_access";

    const api_token_options = {
	method: "GET",
	headers: {
	    Accept: "application/json",
	    "Content-Type": "application/json;charset=UTF-8",
	}
    };

    // eslint-disable-next-line
    const token_entry = await fetch(api_token_url, api_token_options)
    	  .then(response => response.json())
    	  .then(response => {
              const url = Object.values(response)[3];
              const tok = Object.values(response)[4];
              console.log([url, tok]);
              return [url, tok];
          });

    
    // 2nd api call: for backblaze upload url 
    const api_upload_url = token_entry[0];
    const api_token = token_entry[1];


    // hardcoded to ta2h3nna bucket will change
    // const bucket_id = "8d5894f45da9ef2674e90913"; 

    const api_upload_options = {
    	method: "GET",
    	headers: {
    	    Accept: "application/json",
            'Authorization': api_token,
    	    'Content-Type': "application/json;charset=UTF-8",
            
    	}
    };

    // eslint-disable-next-line
    const upload_url = await fetch(api_upload_url, api_upload_options)
    	  .then(response => response.json())
    	  .then(response => {
              console.log(response);
          });
 

    // 3rd api call: upload image
    // const upload_img_url = "https://ta2h3nna.herokuapp.com/authorize_backblaze_access";

    // const api_token_options = {
    // 	method: "GET",
    // 	headers: {
    // 	    Accept: "application/json",
    // 	    "Content-Type": "application/json;charset=UTF-8",
    // 	}
    // };

    // const token_entry = await fetch(api_token_url, api_token_options)
    // 	  .then(response => response.json())
    // 	  .then(response => {
    //           const url = Object.values(response)[3];
    //           const tok = Object.values(response)[4];
    //           return [url, tok];
    //       });


    // 4th api setup: upload image meta data to mongo through ta2henna backend
    // const upload_meta_url = "https:ta2h3nna.herokuapp.com/upload_design";

    // const api_token_options = {
    // 	method: "PUT",
    // 	headers: {
    // 	    Accept: "application/json",
    // 	    "Content-Type": "application/json;charset=UTF-8",
    // 	}
    // };

    // const token_entry = await fetch(api_token_url, api_token_options)
    // 	  .then(response => response.json())
    // 	  .then(response => {
    //           const url = Object.values(response)[3];
    //           const tok = Object.values(response)[4];
    //           return [url, tok];
    //       });
}


// add validation schema for signup form

const SignupForm = () => {
  return (
    <>
      <h1 style={{color: 'White'}}>Upload Tattoo</h1>
      <Formik

        initialValues={{
            tattooName: '',
            artistName: '',
            genre: '',
            cost: '', // added for our checkbox
            src: '', // url to public backblaze store
            caption: '',
            thumbnailHeight: '',
            thumbnailWidth: ''
        }}

        onSubmit={(values, { setSubmitting }) => {
            // do api call here with values
        }}
      >
        <Form>
          <Field type="text" name="tattoo name" placeholder="tattoo name" />
          <br></br>
          <Field type="text" name="artist name" placeholder="artist name" />
          <br></br>
          <Field type="text" name="genre" placeholder="genre" />
          <br></br>
          <Field type="text" name="cost" placeholder="cost" />
          <br></br>
          <Field type="text" name="caption" placeholder="caption" />
          <br></br>
          <br></br>

          <input id="file" name="file" type="file" onChange={(event) => {
              Formik.setFieldValue("file", event.currentTarget.files[0]);
          }} />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};


function App() {
  // eslint-disable-next-line
    auth_upload_api_calls();

    return (
        <div>{SignupForm()} </div>
    );
}

export default App;


