import './navbar.css'
import { logoNavbar } from '../../assets/'
export const NavBar = () => {
  return (
    <div className="navBar">
      <div className='one'>
      <img className='imgNavbar' src={logoNavbar} />
      </div>
      <div className='second'>
        <h2>Registro</h2>
        <h2>Información de la empresa</h2>
        <h2>Contactos</h2>
      </div>
    </div>
  )
}
