import React from 'react'
import { useState } from 'react'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    
  }


  return (
    <div>
      <form onSubmit={submitHandler}>
        Name : <input type='text' value={name} onChange={event => setName(event.target.value)}/><br/><br/>
        email : <input type='text' value={email} onChange={event => setEmail(event.target.value)}/><br/><br/>
        username : <input type='text' value={username} onChange={event => setUsername(event.target.value)}/><br/><br/>
        password : <input type='text' value={password} onChange={event => setPassword(event.target.value)}/><br/><br/>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default Register
