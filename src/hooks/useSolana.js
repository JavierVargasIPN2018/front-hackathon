import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { Program, AnchorProvider, web3 } from '@project-serum/anchor';
import { useState, useEffect } from 'react'
import { Buffer } from "buffer";
import Swal from 'sweetalert2';
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
            Swal.fire({
                title: "¡Created a new contract!",
                icon: "success",
                confirmButtonText: "Continuar",
            });
            //console.log("Created a new BaseAccount w/ address:", baseAccount.publicKey.toString());
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
                    Swal.fire({
                        title: "¡Connected with Public Key!",
                        icon: "success",
                        text: 'Are you ready to register',
                        confirmButtonText: "Continuar",
                    });
                    //console.log("Connected with Public Key:", response.publicKey.toString());
                    setWalletAddress(response.publicKey.toString());
                }
            } else {
                Swal.fire({
                    title: "¡Solana object not found! Get a Phantom Wallet 👻!",
                    icon: "warning",
                    confirmButtonText: "Continuar",
                });
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
            Swal.fire({
                title: "¡Connected with Public Key!",
                icon: "success",
                text: 'Are you ready to register',
                confirmButtonText: "Continuar",
            });

            //console.log("Connected with Public Key:", response.publicKey.toString());
            setWalletAddress(response.publicKey.toString());
        }
    };

    const sendGif = async (formState) => {
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
            Swal.fire({
                title: "¡FormState successfully sent to program!",
                icon: "success",
                text: 'Ve a registros exitosos para verlo',
                confirmButtonText: "Continuar",
            });
            await getGifList();
        } catch (error) {
            Swal.fire({
                title: "¡Error al enviar tus datos!",
                icon: "error",
                confirmButtonText: "Continuar",
            });
            console.log("Error sending FormState:", error);
        }
    };
    return {
        sendGif,
        gifList,
        connectWallet,
        walletAddress,
        getGifList,
        createGifAccount,
        checkIfWalletIsConnected,
    }
}