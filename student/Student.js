import React, { Component } from 'react';
import '../student/student.css';
function Student(){
    return(
        <div>Hello
            <div className="container">
                <div className="board">
                    <div>Class Name: Data Stuctures and Algorithm</div>
                    <div>No. of Students : 60</div>
                </div>
                <div className="table">
                    <ul className="ultab">
                        <li className="tabheader">
                            <div className="col col1">Id</div> 
                            <div className="col col2">Student Name</div> 
                            <div className="col col3">Registration Number</div> 
                            <div className="col col3">Emotion</div> 
                        </li>
                        <li className="row">
                            <div className="col col1">1</div> 
                            <div className="col col2">Akshaya</div> 
                            <div className="col col3">20BCE0139</div> 
                            <div className="col col3">Emotion</div> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}
export default Student