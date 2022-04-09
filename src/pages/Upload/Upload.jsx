
import { Field, Form, Formik } from 'formik';
import {GlobalData} from './../../global-data.js';
import React,{useContext } from 'react';

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
            console.log(values.email); // make all the api calls
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
  const Data = useContext(GlobalData);

  return (
      <div>{SignupForm()} </div>
  );
}

export default App;


