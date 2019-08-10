import React from 'react';
import { Formik, withFormik, Form, Field } from 'formik';
import axios from 'axios';

// const fakeWithFomrik = (obj) => (Component) => {
//   <Formik handleSubmit={obj.handleSubmit} mapPropsToValues={obj.mapPropsToValues}>
//     <Component values={mapPropsToValues(props)} touched={} asdkljasdj/>
//   </Formik>
// }

const SignUp = (props) => {
  console.log(props);
  return (
    <Form>
      <label>
        username
        <Field type="text" name="username" placeholder="username"/>
      </label>
      <label>
        password
        <Field type="password" name="password" placeholder="password"/>
      </label>
      <button type="submit">Sign Up</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: (props) => {
    return {
      username: props.username || "",
      password: props.password || "",
    };
  },
  handleSubmit: (values, { props }) => {
    axios.post('http://localhost:5000/api/register', values)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        props.history.push('/recipes');
      })
      .catch(error => {
        console.log(error);
        console.log(error.response);
      });
  }
})(SignUp);
