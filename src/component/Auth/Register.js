import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useAuth } from '../../Contexts/AuthContext';


import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from 'mdb-react-ui-kit'



function Register(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const api = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('name', userName);
    formData.append('password', password);
    formData.append('password_confirmation', password_confirmation);


    api.post('api/register', formData, {
    })
      .then(response => {
        console.log(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  };


    return(
         <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <form onSubmit={handleSubmit}>
            <div className='text-center mb-3'>
              <p>Sign up</p>
            </div>
            <MDBInput className='mb-4' id='userName' label='userName' value={userName} onChange={(e) => setUserName(e.target.value)} />
            <MDBInput className='mb-4' type='email' id='email' label='Email address' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <MDBInput className='mb-4' type='password' id='password' label='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <MDBInput className='mb-4' type='password' id='password_confirmation' label='Repeat password' value={password_confirmation} onChange={(e) => setPassword_confirmation(e.target.value)} />

            <MDBCheckbox
              wrapperClass='d-flex justify-content-center mb-4'
              id='form8Example6'
              label='I have read and agree to the terms'
              defaultChecked
            />

            <MDBBtn type='submit' className='mb-4' block>
              Sign in
            </MDBBtn>
          </form>
        </MDBContainer>
    );
}
export default Register;