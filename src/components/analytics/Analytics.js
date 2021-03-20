import React, { Component } from 'react';
import '../analytics/analytics.css';
import Navbar from '../navbar/Navbar';
class Analytics extends React.Component{

    
    render(){
        
        return(
            <div>
                <Navbar></Navbar>
                <div className="thirdframe">

                <div className="graph">
                    <h3>Emotion Graph</h3>
                <iframe src="https://charts.mongodb.com/charts-lera-efalt/embed/charts?id=45e0ec42-991c-4464-b5f3-e849163444d9&autoRefresh=10"></iframe>
                </div>
                <div className="pop">
                <h3>Assignments</h3>
                <iframe src="https://charts.mongodb.com/charts-lera-efalt/embed/charts?id=77104255-6c28-4424-bd91-8d85a2fff99e&autoRefresh=28800"></iframe>
                </div>
                <div className="emotiongraph">
                <h3>Prompt Button</h3>
                <iframe src="https://charts.mongodb.com/charts-lera-efalt/embed/charts?id=7f03cd1b-84a2-451d-bffe-7e07eb7d04ee"></iframe>
                </div>

                </div>
                <div className="tab">
                    <h3>&#127882; The top 10 interactive students !!!</h3>
                    <ul className="utab">
                        <li className="tabhead">
                            <div className="col col1">Id</div> 
                            <div className="col col2">Student Name</div> 
                            <div className="col col3">Registration Number</div> 
                            <div className="col col3">Emoticons</div> 
                        </li>
                        <li className="row">
                            <div className="col col1">1</div> 
                            <div className="col col2">Akshaya</div> 
                            <div className="col col3">20BCE0139</div> 
                            <div className="col col3">&#128516;</div> 
                        </li>
                        <li className="row">
                            <div className="col col1">2</div> 
                            <div className="col col2">Alok</div> 
                            <div className="col col3">20BCE0137</div> 
                            <div className="col col3">&#128515;</div> 
                        </li>
                        <li className="row">
                            <div className="col col1">3</div> 
                            <div className="col col2">Ananya</div> 
                            <div className="col col3">20BCE0132</div> 
                            <div className="col col3">&#128555;</div> 
                        </li>
                        <li className="row">
                            <div className="col col1">4</div> 
                            <div className="col col2">Rishabh</div> 
                            <div className="col col3">20BCE0132</div> 
                            <div className="col col3">&#128558;</div> 
                        </li>
                        <li className="row">
                            <div className="col col1">5</div> 
                            <div className="col col2">Anshul</div> 
                            <div className="col col3">20BCE0200</div> 
                            <div className="col col3">&#128528;</div> 
                        </li>
                        <li className="row">
                            <div className="col col1">6</div> 
                            <div className="col col2">Sidarth</div> 
                            <div className="col col3">20BCE0239</div> 
                            <div className="col col3">&#128516;</div> 
                        </li>
                        <li className="row">
                            <div className="col col1">7</div> 
                            <div className="col col2">Mike</div> 
                            <div className="col col3">20BCE0129</div> 
                            <div className="col col3">&#128516;</div> 
                        </li>
                        <li className="row">
                            <div className="col col1">8</div> 
                            <div className="col col2">Mikkel</div> 
                            <div className="col col3">20BCE0539</div> 
                            <div className="col col3">&#128516;</div> 
                        </li>
                    </ul>
                </div>
            </div>
      )

    }

}

export default Analytics