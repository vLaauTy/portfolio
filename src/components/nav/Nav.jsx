import React from 'react'
import './nav.css'
import{ AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { AiOutlineContacts } from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [active, setActive] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' :''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' :''}><AiOutlineUser/></a>
      <a href="#experiencie" onClick={() => setActive('#experiencie')} className={active === '#experiencie' ? 'active' :''}><BiBook/></a>
      <a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' :''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav