import { Field, Form, Formik } from 'formik';
import './upload.css';

        
        // # design = {
        // #     "name" : 
        // #     "artist" : 
        // #     "genre" : 
        // #     "cost" : 
        // #     "caption" 
        // #     "src" : 
        // #     "thumbnailHeight" :
        // #     "thumbnailWidth" :
        // # }        



function upload_metadata(values){
    const url = "https://ta2h3nna.herokuapp.com/design/put";
    const options = {
	method: "PUT",
	headers: {
	    Accept: "application/json",
            'Content-Type': 'application/json',
	    // "Content-Type": "application/json;charset=UTF-8",
	},
        body: JSON.stringify(values)
    };

    fetch(url, options)
    	.catch (err =>{
    	    console.log(err);
    	});
}


const SignupForm = () => {
  return (
    <>
      <h1 className="uploadPageTitle" >Upload Tattoo</h1>
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
            // console.log(values);
            upload_metadata(values);
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
    return (
        <div>{SignupForm()} </div>
    );
}

export default App;


