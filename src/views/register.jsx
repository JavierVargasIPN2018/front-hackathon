import { TextField, Box, Button } from "@mui/material"
import './register.css'
export const Register = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                "& .MuiTextField-root": { m: 1, width: "40ch"},
            }}
        >
            <div className="Register">
                <h1>Register</h1>
                <TextField
                    id="outlined-required"
                    label="Nombre(s)"
                    name="nombre"
                />
                <TextField
                    id="outlined-required"
                    label="Apellido Paterno"
                    name="nombre"
                />
                <TextField
                    id="outlined-required"
                    label="Apellido Materno"
                    name="Apellido Materno"
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
