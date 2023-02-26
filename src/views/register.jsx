import { TextField, Box, Button } from "@mui/material"
import './register.css'
import { useForm, useSolana } from "../hooks"
import { useState, useEffect } from "react"
const formData = {
    nombre: '',
    apPaterno: '',
    apMaterno: '',
    numeroDeContacto: '',
    numeroDeSeguroSocial: '',
    curp: '',
    tipoDeSangre: '',
    numeroDePasaporte: ''
}
const formDataValid = {
    nombre: [(value) => value.length >= 1, 'Requerido'],
    apPaterno: [(value) => value.length >= 1, 'Requerido'],
}
export const Register = () => {
    const { checkIfWalletIsConnected, getGifList, walletAddress, connectWallet, createGifAccount, sendGif } = useSolana()
    const [formSubmitted, setformSubmitted] = useState(false)
    const { nombre, apPaterno, apMaterno, numeroDeContacto, numeroDeSeguroSocial, curp, tipoDeSangre, numeroDePasaporte, onInputChange, nombreValid, apPaternoValid, formState } = useForm(formData, formDataValid);
    const submitRegister = () => {
        console.log(formState)
        sendGif(formState)
    }
    const submitContract = () => {
        createGifAccount()
    }
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
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                "& .MuiTextField-root": { m: 1, width: "40ch" },
            }}
        >
            <div className="Register">
                <h1>Register</h1>
                <TextField
                    id="outlined-required"
                    label="Nombre(s)"
                    name="nombre"
                    value={nombre}
                    onChange={onInputChange}
                    error={!!nombreValid && formSubmitted}
                    helperText={nombreValid}
                />
                <TextField
                    id="outlined-required"
                    label="Apellido Paterno"
                    name="apPaterno"
                    value={apPaterno}
                    onChange={onInputChange}
                    error={!!apPaternoValid && formSubmitted}
                    helperText={apPaternoValid}
                />
                <TextField
                    id="outlined-required"
                    label="Apellido Materno"
                    name="apMaterno"
                    value={apMaterno}
                    onChange={onInputChange}
                />
                <TextField
                    id="outlined-required"
                    label="Número de contacto"
                    name="numeroDeContacto"
                    value={numeroDeContacto}
                    onChange={onInputChange}
                />
                <TextField
                    id="outlined-required"
                    label="Número seguro social"
                    name="numeroDeSeguroSocial"
                    value={numeroDeSeguroSocial}
                    onChange={onInputChange}
                />
                <TextField
                    id="outlined-required"
                    label="Curp"
                    name="curp"
                    value={curp}
                    onChange={onInputChange}
                />
                <TextField
                    id="outlined-required"
                    label="Tipo de sangre"
                    name="tipoDeSangre"
                    value={tipoDeSangre}
                    onChange={onInputChange}
                />
                <TextField
                    id="outlined-required"
                    label="Número de pasaporte"
                    name="numeroDePasaporte"
                    value={numeroDePasaporte}
                    onChange={onInputChange}
                />
                <div>
                    <Button variant="contained" onClick={submitRegister}>Continuar</Button>
                    <Button variant="contained" onClick={submitContract}>Crear contacto</Button>
                </div>

            </div>
        </Box>
    )
}
