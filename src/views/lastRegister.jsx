
import { useEffect } from 'react'
import { Button } from "@mui/material"
import { Table } from '../components'
import { useSolana } from '../hooks'
import './lastRegister.css'
export const LastRegisters = () => {
    const { checkIfWalletIsConnected, getGifList, walletAddress, connectWallet, gifList } = useSolana()
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
        <>
            <h1>Ultimos registros</h1>
            {
                (walletAddress) ? <Table arrayInformation={gifList} /> : <Button variant="contained" onClick={connectWallet}>!Conecta con tu wallet¡</Button>
            }
        </>
    )
}
