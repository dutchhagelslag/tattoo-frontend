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
              return [url, tok];
          });

    
    // // 2nd api call: for backblaze upload url 
    // const api_upload_url = token_entry[0];
    // const api_token = token_entry[1];
    // // eslint-disable-next-line
    // const bucket_id = "8d5894f45da9ef2674e90913"; // hardcoded to ta2h3nna bucket will change

    // const api_upload_options = {
    // 	method: "GET",
    // 	headers: {
    // 	    Accept: "application/json",
    //         "Authorization": api_token,
    // 	    "Content-Type": "application/json;charset=UTF-8",
    // 	}
    // };

    // const upload_url = await fetch(api_upload_url, api_upload_options)
    // 	  .then(response => response.json())
    // 	  .then(response => {
    //           const tok = Object.values(response)[4];
    //           return [tok];
    //       });
    



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
            
        }}
      >
        <Form>
          <Field type="text" name="tattoo name" placeholder="tattoo name" />

          <Field type="text" name="artist name" placeholder="artist name" />

          <Field type="text" name="genre" placeholder="genre" />

          <Field type="text" name="cost" placeholder="cost" />

          <Field type="text" name="caption" placeholder="caption" />

          {/* <MyCheckbox name="acceptedTerms"> */}
          {/*   I accept the terms and conditions */}
          {/* </MyCheckbox> */}

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


