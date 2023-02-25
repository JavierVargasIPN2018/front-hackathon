import { Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Aside, Footer, NavBar } from '../components';
import { Presentacion,HomeView } from '../views';
import './App.css';

function App() {
  return (
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
            <Route path="/presentation" element={<Presentacion/>} /> 
          </Routes>
          <Footer/>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
