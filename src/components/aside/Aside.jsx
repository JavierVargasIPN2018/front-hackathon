import { mision,vision } from "../../assets"

import "./Aside.css"
export const Aside = () => {
  return (
    <>
        <body className="body">
          <div className="contenedor modV">
            <p className="">MISIÓN DE LA EMPRESA <br/>
            Proporcionar información del sector salud de carácter personal a nivel internacional, 
            que sobrepasen las fronteras de reacción y atención médica ante cualquier situación, 
            generando rentabilidad sostenida con la participación de un equipo altamente especializado 
            de redes de hospitales y comprometido en el logro de atención y reacción inmediata hacia sus clientes.</p>
          </div>
          <div className="boyImg">
            <img className="Mision" src={mision} alt="Mision" />
          </div>
        </body>
        <div className="Vision">
          <div className="aside">
              <p className="contenedor asideContenido">VISION DE LA EMPRESA <br/>
                Ser líderes a nivel internacional en la adquisición y proporción de información médica de 
                  forma segura respecto a antecedentes, alergias y tratamientos para superar la reacción y atención 
                a usuarios en situaciones de alta – emergencia, construyendo alianzas estratégicas con redes de hospitales 
                altamente especializados y en desarrollo continuo de la innovación e incorporación de alta tecnología. Así 
                como alianzas con redes de información que hagan posible el llegar a todo usuario habido por proteger situaciones 
                personales y familiares de salud</p>
          </div>
          <div className="asImg">
            <img src={vision} alt="Vision" />
          </div>
        </div>
    </>
  )
}
