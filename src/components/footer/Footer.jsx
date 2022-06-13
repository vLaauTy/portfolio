import React from 'react'
import './footer.css'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Lautaro Exequiel Atencio</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiencies">Skills</a></li>
        <li><a href="#portfolio">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/lautaro-atencio-40b0511a0/"><AiFillLinkedin/></a>
        <a href="https://github.com/vLaauTy"><AiFillGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Lautaro Exequiel Atencio. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer