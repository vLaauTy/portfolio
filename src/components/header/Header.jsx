import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/descarga.jfif'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola soy</h5>
        <h1>Lautaro</h1>
        <h5 className="text-light">Desarrollador Front End React</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" className='header__img' />
        </div>

        <a href="#contact" className="scroll__down">Hacia abajo</a>
      </div>
    </header>
  )
}

export default Header