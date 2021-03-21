import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';

import '../student/student.css';
function Student(){
    return(
        <div>
            <Navbar></Navbar>
            <div className="container1">
                <div className="board">
                    <div>Class Name: Data Stuctures and Algorithm</div>
                    <div>No. of Students : 60</div>
                </div>
                
                <h4>The interaction score of your class students</h4>
                <div className="table">
                    <ul className="ultab">
                        <li className="tabheader">
                            <div className="col col1">Id</div> 
                            <div className="col col2">Student Name</div> 
                            <div className="col col3">Registration Number</div> 
                            <div className="col col3">Interaction Score</div> 
                        </li>
                        <li className="row">
                            <div className="col col1">1</div> 
                            <div className="col col2">Akshaya</div> 
                            <div className="col col3">20BCE0139</div> 
                            <div className="col col3">5</div> 
                        </li>
                        <li className="row">
                            <div className="col col1">2</div> 
                            <div className="col col2">Alok</div> 
                            <div className="col col3">20BCE0137</div> 
                            <div className="col col3">8</div> 
                        </li>
                        <li className="row">
                            <div className="col col1">3</div> 
                            <div className="col col2">Ananya</div> 
                            <div className="col col3">20BCE0132</div> 
                            <div className="col col3">5</div> 
                        </li>
                        <li className="row">
                            <div className="col col1">4</div> 
                            <div className="col col2">Rishabh</div> 
                            <div className="col col3">20BCE0132</div> 
                            <div className="col col3">4</div> 
                        </li>
                        <li className="row">
                            <div className="col col1">5</div> 
                            <div className="col col2">Anshul</div> 
                            <div className="col col3">20BCE0200</div> 
                            <div className="col col3">9</div> 
                        </li>
                        <li className="row">
                            <div className="col col1">6</div> 
                            <div className="col col2">Sidarth</div> 
                            <div className="col col3">20BCE0239</div> 
                            <div className="col col3">9</div> 
                        </li>
                        <li className="row">
                            <div className="col col1">7</div> 
                            <div className="col col2">Mike</div> 
                            <div className="col col3">20BCE0129</div> 
                            <div className="col col3">8</div> 
                        </li>
                        <li className="row">
                            <div className="col col1">8</div> 
                            <div className="col col2">Mikkel</div> 
                            <div className="col col3">20BCE0539</div> 
                            <div className="col col3">6</div> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}
export default Student