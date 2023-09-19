import React from 'react';
import './App.css';
import Login from './components/login';
import SignUp from './components/signup';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
 
      <BrowserRouter>
      <Routes>
      <Route path='/' Component={Login} />
  <Route path='/signup' Component={SignUp} />
      </Routes>
      </BrowserRouter>
    
  
  );
}

export default App;
