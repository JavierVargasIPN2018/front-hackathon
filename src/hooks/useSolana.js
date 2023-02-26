import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { Program, AnchorProvider, web3 } from '@project-serum/anchor';
import { useState, useEffect } from 'react'
import { Buffer } from "buffer";
import kp from '../keypair.json'
window.Buffer = Buffer;
export const useSolana = () => {
    const { SystemProgram, Keypair } = web3;

    // Create a keypair for the account that will hold the GIF data.
    const arr = Object.values(kp._keypair.secretKey)
    const secret = new Uint8Array(arr)
    const baseAccount = web3.Keypair.fromSecretKey(secret)
    //let baseAccount = Keypair.generate();
    const programID = new PublicKey('3Yy4unGR4nrqbdAMayEtyVf1h6vCkJQr4XpyWBBktc9x');
    const network = clusterApiUrl('devnet');
    const opts = {
        preflightCommitment: "processed"
    }
    const [walletAddress, setWalletAddress] = useState(null);
    const [gifList, setGifList] = useState([]);
    const getProvider = () => {
        const connection = new Connection(network, opts.preflightCommitment);
        const provider = new AnchorProvider(
            connection, window.solana, opts.preflightCommitment,
        );
        return provider;
    }
    const getProgram = async () => {
        const idl = await Program.fetchIdl(programID, getProvider());
        return new Program(idl, programID, getProvider());
    };
    const createGifAccount = async () => {
        try {
            const provider = await getProvider();
            const program = await getProgram();
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
            console.log(error);
        }
    };
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

    const sendGif = async (formState) => {
        /*   if (formState.length === 0) {
              alert('Sin información para guardar')
              return;
          } */
        console.log("Gif link:", formState);
        try {
            const provider = getProvider();
            const program = await getProgram();
            await program.rpc.addGif(formState.nombre.toString(),
                formState.apPaterno.toString(),
                formState.apMaterno.toString(),
                formState.numeroDeContacto.toString(),
                formState.numeroDeSeguroSocial.toString(),
                formState.curp.toString(),
                formState.tipoDeSangre.toString(),
                formState.numeroDePasaporte.toString(),
                {
                    accounts: {
                        baseAccount: baseAccount.publicKey,
                        user: provider.wallet.publicKey,
                    },
                });
            alert("FormState successfully sent to program");
            await getGifList();
        } catch (error) {
            console.log("Error sending FormState:", error);
        }
    };
    return {
        sendGif,
        connectWallet,
        walletAddress,
        getGifList,
        createGifAccount,
        checkIfWalletIsConnected,
    }
}