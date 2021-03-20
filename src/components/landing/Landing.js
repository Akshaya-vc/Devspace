import React, { Component } from 'react';
import '../landing/landing.css';
import Navbar from '../navbar/Navbar';
// import Graph from '../landing/Graph';

class Landing extends React.Component{
    func() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'Test Meeting' })
        };
        fetch('https://bluepizza.herokuapp.com/meeting', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }
    render(){
        
        return(
            <div>
                <Navbar></Navbar>
                
                <div className="container">

                    <div className="item item1">
                        <div className="startmeet">
                            <span className="plus"><a href="https://bluepizza.herokuapp.com/" onClick={this.func} id="meet" >&#43;</a></span>
                            <h3 className="meet1">Start Meeting</h3>
                        </div>  
                    </div>
                    <div className="item item2">
                        <div className="startmeet">        
                            <h3 className="meet">Interaction Graph of your class students</h3>
                            <iframe src="https://charts.mongodb.com/charts-lera-efalt/embed/charts?id=45e0ec42-991c-4464-b5f3-e849163444d9&autoRefresh=10"></iframe>
                        </div>  
                    </div>
                    <div className="item item3">
                        <div className="offline">
                            <span className="status">&#128994;Offline</span>
                        </div>
                        <div className="online">
                            <span className="status">&#9898;  Online</span>
                        </div>
                        <div className="box box1"><h4>No. of Attendees</h4><p>0</p></div>
                        <div className="box box2">
                            <h4>Emotion</h4>
                            <div className="slideshow">
                                <div className="emoji">&#128512;</div>
                            </div>
                        </div>
                    </div>
                    <div className="item item4">
                        <h3><span>Academics</span> </h3>
                    </div>
                    <div className="item item5">
                        <div id="chartDiv"  ></div>
                    </div>
                    <div className="item item6">
                        <h4>Syllabus</h4>
                        <div>
                            <ul>
                                <li>Arrays and Structures</li>
                                <li>Pointers</li>
                                <li>Algorithm</li>
                                <li>Stack</li>
                                <li>Queue</li>
                                <li>Linked List</li>
                                <li>Dynamic Memory Allocation</li>
                            </ul>
                        </div>
                    </div>
                </div>
      </div>

      )

    }

}

export default Landing