import React from 'react'
import { useState } from 'react'
import { setUserSession } from './service/AuthService';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const loginUrl = 'https://ngp11dkhdl.execute-api.us-east-1.amazonaws.com/dev/login'

const Login = (props) => {
  
  const [username, setUername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    if(username.trim() === '' || password.trim() === '')
    {
        setMessage('All fields are required');
        return;
    }
    setMessage(null);

    const requestConfig = {
      headers : {
        'Content-Type': 'application/json'
      }
    }

    const requestBody = {
      username:username,
      password:password
    };

    axios.defaults.headers.common = {
      "X-API-Key": "XUeDCkuMZd7FEQr3DqYg07OHJBtSr21M9Whwgaad",
    };

    axios.post(loginUrl,  requestBody, requestConfig).then(response => {
      setUserSession(response.data.user, response.data.token);
    
      if (response.data.user && response.data.token)
      {   
          
          const newpage = () => {navigate('/premium-content')};
          newpage();

      }
      else if(response.statusCode === 401 )
      {
          setMessage('Please login again')
      }
      
    });

  }

  return (
    <div>
      <form onSubmit = {submitHandler}>
        <h5>USER LOGIN</h5>
        username: <input type='text' value={username} onChange={event => setUername(event.target.value)}/><br/><br/>
        password: <input type='text' value={password} onChange={event => setPassword(event.target.value)}/><br/><br/>
        <input type='submit' value='Login'/>
      </form>
      <p className='message'>{message}</p>
    </div>
  )
}

export default Login
