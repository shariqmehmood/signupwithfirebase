import React, { useState, useContext } from 'react';
import img from "../img/user.jpg"
import "./signin.css"

import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { GlobalContext } from "../context/context"


function SignIn() {
    const { state, dispatch } = useContext(GlobalContext);

    const [stName, setStName] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [roll, setRoll] = useState('');
    const history = useHistory()




    return (
     



        <div className="signup-form-div">


        <img className="img" src={img} alt=""></img>
              <h1>Sign In Now</h1>



 <input type="text" className="input-box" onChange={(event)=>{setStName(event.target.value)}} placeholder="Your-Name"></input>

 <input type="email" className="input-box" onChange={(event)=>{setEmail(event.target.value)}} placeholder="Your-Email"></input>

 <input type="password" className="input-box" onChange={(event)=>{setPass(event.target.value)}} placeholder="Your-Password"></input>

 <input type="text" className="input-box" onChange={(event)=>{setRoll(event.target.value)}} placeholder="student/teacher"></input>
 
 
 
 
 

 
       
 



           
         <button className="sing-btn" 

            
        
        onClick={() => {

                if (stName === "" || pass === "" || email === '' || roll === "") {
                    console.log("All Fields Required")
                }
                else {
                    let student = {
                        name: stName,
                        password: pass,
                        emailE1: email,
                        rollE1: roll
                    }
                    dispatch({ type: "SIGN_IN", payload: student })

                }
                if (roll === "Student") {
                    history.push('/Students')
                }
                else if (roll === "Traner") {
                    history.push("/AllStudents")
                }
                else {
                    <h1>404 Not Found </h1>
                }
                // console.log(student)

                setStName('');
                setPass('');
                setEmail('');
                setRoll('');

            } }

            >Sign In</button>

            <Link to='/Sign Up'>SIGN UP</Link>

        </div>
    )
}


export default SignIn;
