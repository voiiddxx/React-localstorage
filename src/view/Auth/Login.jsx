import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {

  const Localemail = localStorage.getItem("email");
  const Localpassword = localStorage.getItem("password");
  const navigate = useNavigate();

  

  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);

  const handleSubmit = () => {

    if(email === Localemail && password === Localpassword){
      navigate('/home');
    }else{
      alert("Wrong email and password");
    }
   
  }
  return (
    <div className='register-main'>
    <div className="card">
    <div className='heading' >
      <h1>Welcome Back!</h1>
      <p>Please fill required information to login into your acc</p>
    </div>
   <form >
  
    <input onChange={(e)=>{
      setemail(e.target.value)
    }} placeholder='your email'/>
    <input onChange={(e)=>{
      setpassword(e.target.value)
    }} placeholder='your password'/>
    <div onClick={handleSubmit} className='button'>
      <p>Submit</p> </div>
   </form>

    </div>
  </div>
  )
}

export default Login
