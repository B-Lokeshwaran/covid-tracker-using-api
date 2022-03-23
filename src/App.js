// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Top from './components/Menubar.js';
import Searchpage from'./pages/Searchpage.js';
import Homepage from './pages/Homepage';
import Datafetch from './Datafetch.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
    {/* <Top />
    <Searchpage />
    <Homepage />
    <Datafetch /> */}
   
   <Router>
     <Top />
      <Routes>
        
          
          <Route path="/" element={<Homepage />} />
          <Route path="/Search" element={<Searchpage />} />
          <Route path="/Global" element={<Datafetch />} />
        
      </Routes>
      </Router>

    </div>
  );
}

export default App;
