import React, { Component } from 'react';
import '../navbar/navbar.css';
import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <div>
            <div className="nav">
                <div className="brand"><img src="https://media.discordapp.net/attachments/822548270193573948/822771493242011698/New_Project_16.png" className="brandimg"></img></div>
                <div className="navbuttons">
                    <Link to='/' className="analysis" >Dashboard</Link>
                    <Link to='/students' className="students" >Students</Link>
                    <Link to='/analysis' className="analysis" >Analysis</Link>
                            
                    <div className="profile"><img src="https://mpng.subpng.com/20180504/phe/kisspng-professional-computer-icons-avatar-job-5aec571ec854c8.3222584415254382388206.jpg" className="profileimg"></img></div>
                </div>
            </div>
        </div>
    )
}
export default Navbar