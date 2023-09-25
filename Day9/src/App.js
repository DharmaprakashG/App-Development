import React from 'react';
import './App.css';
import Login from './components/login';
import SignUp from './components/signup';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import SideNavBar from './Dashboard/SideNavBar';
import userprofile from './components/userprofile';


function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/signup' Component={SignUp} />
        <Route path='/login' Component={Login} />
        <Route path='/SideNavBar' Component={SideNavBar} />
        {/* <SideNavBar/> */}
      </Routes>        
    </BrowserRouter>  
    // <userprofile/>
    

  );
}

export default App;
