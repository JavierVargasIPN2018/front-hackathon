import { Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Footer, NavBar } from '../components';
import { useSolana } from '../hooks';
import { Presentacion, HomeView, Register, Information, Contacts } from '../views';
import './App.css';


function App() {
  const { checkIfWalletIsConnected, getGifList, walletAddress, connectWallet, createGifAccount } = useSolana()
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
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/information" element={<Information />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
            <Footer />
          </div>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
