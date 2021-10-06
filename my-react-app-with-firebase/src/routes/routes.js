import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import SignUp from "../components/sign-up";
import SignIn from "../components/Sign-In"
import Students from "../screen/students";
import AllStudents from "../screen/allStudents";
import AddStudents from "../screen/traner/addstudets"
import ShowStudents from "../screen/traner/showStudent"
 import Navbar from "../navbar/navbar";


function ReactRouter() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/'>
                    <SignUp />
                </Route>
                <Route path='/SignIn'>
                    <SignIn />
                </Route>
                <Route path='/Students'>
                    <Students />
                </Route>
                <Route path='/AllStudents'>
                    <AllStudents />

                </Route>
                <Route path='/AddStudents'>
                    <AddStudents />
                </Route>
                
                <Route path='/ShowStudents'>
                    <ShowStudents />
                </Route>
            </Switch>
        </Router>
    )
}

export default ReactRouter;