import { Suspense, useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Aside, Footer, NavBar } from '../components';
import { Presentacion, HomeView, Register, Buffet } from '../views';
import './App.css';


function App() {
  
  return (
    <div className='app'>
      <Router>
        <Suspense fallback={
          <div style={{ height: "30rem" }}>
            <ThreeDots
              color='#187498'
            />
          </div>
        }>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/presentation" element={<Presentacion />} />
              <Route path="/register" element={<Register />} />
              <Route path="/buffet" element={<Buffet/>} />
            </Routes>
            <Footer />
          </div>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
