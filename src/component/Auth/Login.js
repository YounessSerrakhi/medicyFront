import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {Link} from "react-router-dom";
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import { useAuth } from '../../Contexts/AuthContext';

function Login() {
  
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const { login,api,token} = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);


    api.defaults.headers['Authorization'] = `Bearer ${token}`;
    api.post('api/login', formData, {
    })
      .then(response => {
        login(response);
        alert(response.data.message);
        setEmail("");
        setPassword("");
      })
      .catch(error => {
        console.log(error);
            });
      
  };



 

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <form onSubmit={handleSubmit}>
        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
          <a href="!#">Forgot password?</a>
        </div>

        <MDBBtn className="mb-4" type="submit">
          Sign in
        </MDBBtn>
      </form>

      <div className="text-center">
        <p>
          Not a member? <Link to='/register'>Register</Link>
        </p>
      </div>
    </MDBContainer>
  );
}

export default Login;
