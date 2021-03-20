import React, { Component } from 'react';
import '../analytics/analytics.css';
import Navbar from '../navbar/Navbar';
class Analytics extends React.Component{

    
    render(){
        
        return(
            <div>
                <Navbar></Navbar>
                <div>
                <div className="container">
                    <div className="item item1">
                        <div className="startmeet">
                            <span className="plus"><a href="https://bluepizza.herokuapp.com/" onClick={this.func} id="meet" >&#43;</a></span>
                            <h3 className="meet"></h3>
                        </div>  
                    </div>
                    <div className="item item2">
                        <div className="startmeet">        
                            <h3 className="meet">Interaction Graph of your class students</h3>
                        </div>  
                    </div>
                    <div className="item item3">
                        <div className="offline">
                            <span className="status">&#128994;Offline</span>
                        </div>
                        <div className="online">
                            <span className="status">&#9898;Online</span>
                        </div>
                        <div className="box box1"><h4>No. of Attendees</h4><p>Join Meet</p></div>
                        <div className="box box2">
                            <h4>Emotion</h4>
                            <div className="slideshow">
                                <div className="emoji">&#128544;</div>
                                <div className="emoji"></div>
                                <div className="emoji"></div>
                                <div className="emoji"></div>
                                <div className="emoji"></div>
                                <div className="emoji"></div>
                                <div className="emoji"></div>
                            </div>
                        </div>
                    </div>
                    <div className="item item4">
                        <h3>Academics</h3>
                    </div>
                    <div className="item item5">
                        <h4>Pie chart comes here</h4>
                        <div id="chartDiv"  ></div>
                    </div>
                    <div className="item item6">
                        <h4>Syllabus</h4>
                    </div>
                </div>
      </div>
      </div>
      )

    }

}

export default Analytics