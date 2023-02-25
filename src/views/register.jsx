import { TextField, Box, Button } from "@mui/material"
import './register.css'
import { useForm } from "../hooks"
import { useState } from "react"
const formData = {
    nombre: '',
    apPaterno: '',
    apMaterno: '',
}
const formDataValid = {
    nombre: [(value) => value.length >= 1, 'Requerido'],
    apPaterno: [(value) => value.length >= 1, 'Requerido'],
}
export const Register = () => {
    const [formSubmitted, setformSubmitted] = useState(false)
    const { nombre,apPaterno,apMaterno,onInputChange,nombreValid,apPaternoValid,apMaternoValid} = useForm(formData,formDataValid);
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
                    name="Apellido Materno"
                    value={apMaterno}
                    onChange={onInputChange}
                />
                <TextField
                    id="outlined-required"
                    label="Número de contacto"
                    name="Número de contacto"
                />
                <TextField
                    id="outlined-required"
                    label="Número seguro social"
                    name="Número seguro social"
                />
                <TextField
                    id="outlined-required"
                    label="Curp"
                    name="Curp"
                />
                <TextField
                    id="outlined-required"
                    label="Tipo de sangre"
                    name="Tipo de sangre"
                />
                <TextField
                    id="outlined-required"
                    label="Número de pasaporte"
                    name="Número de pasaporte"
                />
                <div>
                    <Button variant="contained">Continuar</Button>
                </div>

            </div>
        </Box>
    )
}
