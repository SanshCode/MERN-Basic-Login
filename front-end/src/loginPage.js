import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const LoginPage = () => {
    
    const [loginData,setLoginData] = useState({
        username:'',
        password:'',
    });

    const handleLoginChange = (e) => {
        const {name,value} = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]:value
        }));
    };
    
    const handleLogin = async(e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/login',loginData);
            const {success,message} = response.data;
            if(success){
                console.log("Login sucessfully");
            }else{
                console.log(message);
            }
        } catch (error) {
            console.error("Login Failed",error);
        }
        setLoginData({
            username:'',
            password:'',
        })
    };


  return (
    <div>
        <h1>loginPage</h1>
        <form onSubmit={handleLogin}>
            <input 
                type='text' 
                name='username' 
                placeholder='UserName' 
                value={loginData.username}
                onChange={handleLoginChange} 
                required />
            <input 
                type='password' 
                name='password' 
                placeholder='Psassword'
                value={loginData.password}
                onChange={handleLoginChange} 
                required />
            <button type='submit'>Login</button>
            <p>Not registered yet? <Link to="/register">Register Here</Link></p>  
        </form>
    </div>
  )
}

export default LoginPage;