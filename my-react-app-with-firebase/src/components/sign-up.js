import React, { useState,useContext } from 'react';
import { Link } from "react-router-dom";
import "./signin.css"
import img from "../img/user.jpg"




// import React,{useContext} from "react";
import {GlobalContext} from "../context/context"
function SignUp() {
    const {state,dispatch}= useContext(GlobalContext);
    const [stName, setStName] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [roll, setRoll] = useState('');
    const [city, setCity] = useState('');



    return (
       


        <div className="signup-form-div">


        <img className="img" src={img} alt=""></img>
              <h1>Sign Up Now</h1>



 <input type="text" className="input-box" onChange={(event)=>{setStName(event.target.value)}} placeholder="Your-Name"></input>

 <input type="email" className="input-box" onChange={(event)=>{setEmail(event.target.value)}} placeholder="Your-Email"></input>

 <input type="password" className="input-box" onChange={(event)=>{setPass(event.target.value)}} placeholder="Your-Password"></input>
 <input type="text" className="input-box" onChange={(event)=>{setCity(event.target.value)}} placeholder="city"></input>
 <input type="text" className="input-box" onChange={(event)=>{setRoll(event.target.value)}} placeholder="student/teacher"></input>
 
 
 
 
 

 
       
 



           
         <button className="sing-btn" 
         onClick={() => {
             
             if(stName==="" || pass==="" || email ==='' || roll === "" ||city==="" ){
                 console.log("All Fields Required")
                }
                else{
                    let student = {
                        name: stName,
                        password: pass,
                        emailE1: email,
                        rollE1: roll
                    }
                    dispatch({type: "SIGN_UP" , payload:student})
                }
                
                setStName('')
                setPass('');
                setEmail('');
                setRoll('');
                setCity('')
                
            } }
            >Sign Up</button>
            
<Link to="/">Sign In</Link>

          

        </div>
    )
}


export default SignUp;





































