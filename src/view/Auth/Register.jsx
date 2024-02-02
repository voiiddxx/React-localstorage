import React, { useState } from 'react'
import "../../styles/Register.css"
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    // storing the data from input fields//

    const [email, setemail] = useState(null);
    const [username, setusername] = useState(null);
    const [password, setpassword] = useState(null);


    // handling the form responses//

    const handleSubmit = () => {

        try {
            if(username && email && password){
                console.log(username , email , password);
                localStorage.setItem("username" , username);
                localStorage.setItem("email",email);
                localStorage.setItem("password" , password);
                navigate('/login')
            }
        } catch (error) {
            console.log(error);
        }
    }


    // / UI For Reister Page///    


  return (
    <div className='register-main'>
      <div className="card">
      <div className='heading' >
        <h1>Create Your Account</h1>
        <p>Please fill required information to create your account</p>
      </div>
     <form >
     <input onChange={(e)=>{
        setusername(e.target.value)
     }} placeholder='your username'/>
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

export default Register
