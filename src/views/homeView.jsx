import { Button } from "@mui/material"
import { Aside } from "../components"
import './homeView.css'
export const HomeView = () => {
  return (
    <div className="homeView">
      <div>
        <Button variant="contained">Conecta con tu wallet</Button>
      </div>
      <Aside />
    </div>
  )
}
