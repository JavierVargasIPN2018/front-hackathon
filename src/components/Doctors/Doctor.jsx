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
            <div className="nHos">
                <h3>Hospital 1</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Reprehenderit facere ipsa debitis modi, quam incidunt temporibus 
                    architecto accusantium eligendi doloremque omnis voluptas perferendis 
                    aliquid magnam perspiciatis, suscipit officiis sunt laborum?</p>
                    <img className="imgH" src={lHospital} alt="Logo Hospital" />
            </div>
            <div className="nHos">
                <h3>Hospital 2</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Reprehenderit facere ipsa debitis modi, quam incidunt temporibus 
                    architecto accusantium eligendi doloremque omnis voluptas perferendis 
                    aliquid magnam perspiciatis, suscipit officiis sunt laborum?</p>
                <img className="imgH" src={lHospital} alt="Logo Hospital" />
            </div>
            <div className="nHos" >
                <h3>Hospital 3</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Reprehenderit facere ipsa debitis modi, quam incidunt temporibus 
                    architecto accusantium eligendi doloremque omnis voluptas perferendis 
                    aliquid magnam perspiciatis, suscipit officiis sunt laborum?</p>
                <img className="imgH" src={lHospital} alt="Logo Hospital" />
            </div>
            <div className="nHos" >
                <h3>Hospital 4</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Reprehenderit facere ipsa debitis modi, quam incidunt temporibus 
                    architecto accusantium eligendi doloremque omnis voluptas perferendis 
                    aliquid magnam perspiciatis, suscipit officiis sunt laborum?</p>
                <img className="imgH" src={lHospital} alt="Logo Hospital" />
            </div>
        </main>
    </>
  )
}
