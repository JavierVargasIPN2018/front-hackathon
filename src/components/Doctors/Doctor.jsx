import "./doctor.css"
import {Doc1, Doc2, Doc3, Doc4, lHospital} from '../../assets'

export const Doctor = () => {
  return (
    <>
        <ul className="listDoc contenedor">
            <li className="Doc"><img src={Doc1} alt="Doctor" /></li>
            <li className="Doc"><img src={Doc2} alt="Doctor" /></li>
            <li className="Doc"><img src={Doc3} alt="Doctor" /></li>
            <li className="Doc"><img src={Doc4} alt="Doctor" /></li>
        </ul>
        <main className="hospitales contenedor">
            <div className="nHos contenedor">
                <h3>Clínica Mayo</h3>
                <p>Ciudad: Rochester (Minnesota, Estados Unidos)</p>
                <p>Es el centro médico más referenciado por la comunidad médica mundial. Cubre todas las especialidades, incluidas las enfermedades más inusuales o raras y está a la cabeza de la innovación tecnológica y científica. Sus equipos de especialistas trabajan interconectados, lo que acelera la definición de diagnósticos.</p>
                    <img className="imgH" src={lHospital} alt="Logo Hospital" />
            </div>
            <div className="nHos contenedor">
                <h3>Singapore General Hospital</h3>
                <p>Ciudad: Singapur</p>
                <p>Referencia para todo el sureste asiático. Está a la cabeza del empleo de las más avanzadas tecnologías en la asistencia médica y quirúrgica; tiene el mayor número de intervenciones quirúrgicas realizadas mediante robots.</p>
                <img className="imgH" src={lHospital} alt="Logo Hospital" />
            </div>
            <div className="nHos contenedor" >
                <h3>Karolinska University Hospital</h3>
                <p>Ciudad: Estocolmo (Suecia)</p>
                <p>Centrado en la investigación biomédica y estrechamente relacionado con el Instituto Karolinska, cuyo comité científico designa cada año al Premio Nobel de Medicina.</p>
                <img className="imgH" src={lHospital} alt="Logo Hospital" />
            </div>
            <div className="nHos contenedor" >
                <h3>Toronto General Hospital</h3>
                <p>Ciudad: Toronto (Canadá)</p>
                <p>Es el centro hospitalario de referencia mundial para los trasplantes de órganos: corazón riñón, pulmón, páncreas, hígado…, y sus procedimientos técnicos son seguidos por toda la comunidad quirúrgica internacional</p>
                <img className="imgH" src={lHospital} alt="Logo Hospital" />
            </div>
        </main>
    </>
  )
}
