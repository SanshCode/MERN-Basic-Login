import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [registerData,setRegisterData] = useState({
    username:'',
    password:''
  });
  const handleRegister = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/register',registerData);
      const {success,message} = response.data;
      if(success){
        console.log('Register Successfully');
      }else{
        console.log(message);
      }
    } catch (error) {
      console.error("Register Failed",error);
    }
    setRegisterData({
      username:'',
      password:''
    })
  }
  const handleRegisterChange = (e) => {
    const {name,value} = e.target;
    setRegisterData((prevData)=>({
      ...prevData,
      [name]:value
    }))
  }
  return (
    <div>
      <h1>RegisterPage</h1>
      <form onSubmit={handleRegister}>
            <input 
                type='text' 
                name='username' 
                placeholder='UserName' 
                value={registerData.username}
                onChange={handleRegisterChange} 
                required />
            <input 
                type='password' 
                name='password' 
                placeholder='Psassword'
                value={registerData.password}
                onChange={handleRegisterChange} 
                required />
            <button type='submit'>Register</button>
            <p>Already have account? <Link to="/login">Login Here</Link></p>  
        </form>
    </div>
  )
}

export default RegisterPage;