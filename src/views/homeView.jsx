import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { Program, AnchorProvider, web3 } from '@project-serum/anchor';
import { Button } from "@mui/material"
import { Aside } from "../components"
import './homeView.css'
import { useEffect, useState } from 'react';
// SystemProgram is a reference to the Solana runtime!
const { SystemProgram, Keypair } = web3;

// Create a keypair for the account that will hold the GIF data.
let baseAccount = Keypair.generate();

// This is the address of your solana program, if you forgot, just run solana address -k target/deploy/myepicproject-keypair.json
const programID = new PublicKey('GMDGRZwEi3xBieKPnefx7g1GZq2noGs7pC5i97nhXqQt');

// Set our network to devnet.
const network = clusterApiUrl('devnet');

// Controls how we want to acknowledge when a transaction is "done".
const opts = {
  preflightCommitment: "processed"
}
export const HomeView = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [gifList, setGifList] = useState([]);

  const getProvider = () => {
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = new AnchorProvider(
      connection, window.solana, opts.preflightCommitment,
    );
    return provider;
  }
  const createGifAccount = async () => {
    try {
      const program = await getProgram();
      const provider = await getProvider();

      console.log("ping");
      await program.rpc.startStuffOff({
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        },
        signers: [baseAccount],
      });
      console.log("Created a new BaseAccount w/ address:", baseAccount.publicKey.toString());
      await getGifList();
    } catch (error) {
      console.log("Error creating BaseAccount account:", error);
    }
  };
  const getProgram = async () => {
    const idl = await Program.fetchIdl(programID, getProvider());
    return new Program(idl, programID, getProvider());
  };

  // Actions
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log("Phantom wallet found!");
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log("Connected with Public Key:", response.publicKey.toString());
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert("Solana object not found! Get a Phantom Wallet 👻");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getGifList = async () => {
    try {
      const program = await getProgram();
      const account = await program.account.baseAccount.fetch(baseAccount.publicKey);

      console.log("Got the account", account);
      setGifList(account.gifList);
    } catch (error) {
      console.log("Error in getGifList: ", error);
      setGifList(null);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;
    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Key:", response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  const sendGif = async () => {
    if (inputValue.length === 0) {
      console.log("No gif link given!");
      return;
    }
    setInputValue("");
    console.log("Gif link:", inputValue);
    try {
      const provider = getProvider();
      const program = await getProgram();

      await program.rpc.addGif(inputValue, {
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
        },
      });
      console.log("GIF successfully sent to program", inputValue);

      await getGifList();
    } catch (error) {
      console.log("Error sending GIF:", error);
    }
  };
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
          (walletAddress==null)
          ?<Button variant="contained" onClick={connectWallet}>Conecta con tu wallet</Button>
          :<h3>Concectado con tu wallet</h3>
        }
        <Button variant="contained" onClick={createGifAccount}>Crear contrato</Button>
      </div>
      <Aside />
    </div>
  )
}
