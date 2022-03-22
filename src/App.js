import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecSection from './RecSection';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route 
            path="/search/:searchTerm"
            element={
              <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>
            }
          />
          <Route 
            path="/"
            element={
              <div className="app__page">    
                <Sidebar/>
                <RecSection />
              </div>
            }
          />
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
