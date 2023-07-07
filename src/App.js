import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import EarlyAccess from './components/EarlyAccess/EarlyAccess'
const App = () => {
  return (
    <div className='App'>
        <Router>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/EarlyAccess' element={<EarlyAccess/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App