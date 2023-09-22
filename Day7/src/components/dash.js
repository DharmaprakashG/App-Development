
import React from 'react';
import './dash.css'; 
import store from './store';


const Dashboard = () => {
  const name = store.getState().name.name;
  console.log(name)
  return (
    <div className="dashboard">
      <nav className="navbar">
        <h1>FIT ZONE</h1>
        <ul>
          <li>Home</li>
          <li>Session</li>
          <li>Progress</li>
          <li>Contact</li>
          <li className='redu'>{name}</li>
        </ul>
      </nav>      
    </div>
  );
};

export default Dashboard;
