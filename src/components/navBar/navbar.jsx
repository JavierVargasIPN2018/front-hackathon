import './navbar.css'
import { logoNavbar, Oficial } from '../../assets/'
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a href="/"><img className='imgNavbar' src={Oficial} /></a>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav"> 
          <li className="nav-item active">
            <a className="nav-link navbar-text" href="/register">Registro<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-text" href="/information">Información</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-text" href="/contacts">Contactos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-text" href="/qr">QR code</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}