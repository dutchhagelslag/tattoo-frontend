import React from 'react';
import { Field, Form, Formik } from 'formik';



async function auth_backblaze(){
    // api call
    const url = "https://ta2h3nna.herokuapp.com/authorize_backblaze_access";

    const options = {
	method: "GET",
	headers: {
	    Accept: "application/json",
	    "Content-Type": "application/json;charset=UTF-8",
	}
    };

    // hardcoded index, should fix in future
    const to_authData = auth => ({apiUrl: auth, 
			          authorizationToken: auth.authorizationToken,
			         });
    
    await fetch(url, options)
    	  .then(response => response.json())

    	  .then(response => {
              const url = Object.values(response)[3];
              const tok = Object.values(response)[4];
              return [tok, url];
                            })

    	  // .then(response => {
    	  //     console.log(response);
    	  //   })

    	  .catch (err =>{
    	      console.log(err);
    	  });


    // return auth;
};


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
    return (
        <div>{SignupForm()} </div>
    );
}

export default App;


