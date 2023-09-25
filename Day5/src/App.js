import React from 'react';
import './App.css';
import Login from './components/login';
import SignUp from './components/signup';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './components/dash';

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/signup' Component={SignUp} />
        <Route path='/dash' Component={Dashboard} />
        
      </Routes>
    </BrowserRouter>  
    // <Dashboard/>

  );
}

export default App;
