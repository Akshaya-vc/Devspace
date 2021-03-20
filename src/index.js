import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Landing from './components/landing/Landing'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Student from './components/student/Student'
import Analytics from './components/analytics/Analytics'
ReactDOM.render(
<Router>
  <div>
   
   
    <Route path='/students' component={Student} />
    <Route path='/analysis' component={Analytics} />
    
    <Route exact path='/' component={Landing} />

  </div>
</Router>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
