import { useEffect } from 'react';
import { Button } from "@mui/material"
import { useSolana } from '../hooks';
import { Aside } from "../components"
import './homeView.css'

export const HomeView = () => {
  const { checkIfWalletIsConnected, getGifList, walletAddress, connectWallet, createGifAccount } = useSolana()
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);
  useEffect(() => {
    if (walletAddress) {
      console.log("Fetching GIF list...");
      getGifList();
    }
  }, [walletAddress]);

  return (
    <div className="homeView">
      <div>
        {
          (walletAddress != null)
            ? <>
              <h3>Concectado con tu wallet</h3>
              <a href="/register">Ve a registro aqui.</a>
            </>
            : <Button variant="contained" onClick={connectWallet}>!Conecta con tu wallet¡</Button>
        }

      </div>
      <Aside />
    </div>
  )
}
