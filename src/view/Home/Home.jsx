import React, { useState } from 'react'
import "../../styles/Home.css"
const Home = () => {


  const [email, setemail] = useState(null);
  const [username, setusername] = useState(null);
  const [password, setpassword] = useState(null);
  

  const handleSubmit = () => {
    if(email && username && password){
      // CLEARIGN THE USERNAME EMAIL AND PASSWORD
      localStorage.removeItem("email");
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      // UPDATING THE EMAIL USERNAME AND PASSWORD

      localStorage.setItem("email" , email);
      localStorage.setItem("username" , username);
      localStorage.setItem("password" , password);
      alert("Your Account has been updated, You can use your new credentials for futher validation")
    }
    else{
      alert("Please fill addtiniols fields")
    }
  }
  return (
    <div className='home'>
      <div className="card">
      <div className='heading' >
        <h1>Update Your Accont Details</h1>
        <br />
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
        <p>Update Now</p> </div>
     </form>

      </div>
    </div>
  )
}

export default Home
