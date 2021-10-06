import React,{useEffect,useContext} from "react";
import {GlobalContext} from '../context/context'
import {data} from "../reducer/reducer"


function Students(){

    const {state,dispatch}= useContext(GlobalContext);
    useEffect(() => {
    // let authenticUser=state.authUser
//    console.log(state.authUser.name)
// state.authUser.map((student,index)=>{
//     console.log(student.name)
// })

}, [state.authUser])
    

    return<h1>students</h1>


}



export default Students;