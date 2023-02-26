import { gTerraqueo } from "../../assets"
import "./numeros.css"

export const Numeros = () => {
  return (
    <div className="contenedor contenido">
      <div className="center">
        <img className="" src={gTerraqueo} alt="Icon" />
      </div>
      <div className="NoEmer">
          <h1>Numero de emergencias</h1>
          <div className="num1">
            <h3>México y Estados Unidos</h3>
            <p>Emergencias / 911</p>
          </div>
          <div className="num2">
            <h3>Continente Europeo</h3>
            <p>Emergencias / 112</p>
          </div>
          <div className="num3">
            <h3>Marruecos</h3>
            <p>Emergencias / 15</p>
          </div>
          <div className="num4">
            <h3>Rusia</h3>
            <p>Emergencias / 112</p>
          </div>
      </div>
    </div>
  )
}
