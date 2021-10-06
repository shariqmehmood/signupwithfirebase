import { data } from '../../reducer/reducer';
import React, { useState } from 'react';
// import './student.css';
import {Link} from "react-router-dom"
let stData=data.addStudents
console.log("data Student",stData)
function ShowStudents() {
    return (
        <div>
            <Link to='/AddStudents'>Add Students</Link>
        <table>
            <thead>
                <tr>
                    <th>Sr#</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Total Marks</th>
                    <th>Feedback</th>
                    <th>Grade</th>

                </tr>
            </thead>
            <tbody>
                {
                    stData.map((student, index) => (
                        <tr key={student.userName + index}>
                            <td>{index + 1}</td>
                            <td>{student.stNameE1}</td>
                            <td>{student.rollE1}</td>
                            <td>{student.totalMArksE1}</td>
                            <td>{student.feedbackE1}</td>
                            <td>{student.gradeE1}</td>


                        </tr>
                    ))
                }
            </tbody>


        </table>
            <h1>{stData.stNameE1}</h1>
        </div>
    )
}

export default ShowStudents;
