import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const registerUrl = 'https://ngp11dkhdl.execute-api.us-east-1.amazonaws.com/dev/register?';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();

    if(username.trim() === '' || email.trim() === '' || password.trim() === '')
    {
        setMessage('All fields are required');
    }
    setMessage(null);
    const requestConfig = {
      headers : {
        'Content-Type': 'application/json'
      }
    }

    const requestBody = {
      username:username,
      email:email,
      name:name,
      password:password
    }

    axios.defaults.headers.common = {
      "X-API-Key": "XUeDCkuMZd7FEQr3DqYg07OHJBtSr21M9Whwgaad",
    };
    
    axios.post(registerUrl,  requestBody, requestConfig).then(response => {
      setMessage('Register successfully')
    }).catch(error => {
      if(error.response.status === 401){
        setMessage(error.response.data.message)
      }
      setMessage('Sorry... the backend server is down!! please try again later')
      console.log(error)
    });
    
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h5>USER REGISTER</h5>
        Name : <input type='text' value={name} onChange={event => setName(event.target.value)}/><br/><br/>
        email : <input type='text' value={email} onChange={event => setEmail(event.target.value)}/><br/><br/>
        username : <input type='text' value={username} onChange={event => setUsername(event.target.value)}/><br/><br/>
        password : <input type='text' value={password} onChange={event => setPassword(event.target.value)}/><br/><br/>
        <input type='submit'/>
      </form>
      <p className='message'>{message}</p>
    </div>
  )
}

export default Register
