import { Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar ,Footer} from '../components';
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
            {/* <Route path="/" element={<HomeView />} /> */}
          </Routes>
          <Footer/>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
