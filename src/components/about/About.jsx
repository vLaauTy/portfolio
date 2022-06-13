import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h2>Sobre mi</h2>

      <div className="container about__container">
        <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon'></FaAward>
          <h5>Desarrollador de ecommerce</h5>
        </article>
        <article className='about__card'>
          <VscFolderLibrary className='about__icon'></VscFolderLibrary>
          <h5>Proyectos</h5>
          <small>2 proyectos hechos con javascript y react</small>
        </article>
      </div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium molestias recusandae laudantium magnam hic quisquam asperiores, est repellendus in tempora earum quidem laboriosam ipsum veniam autem, fugiat doloremque! Odit, voluptatibus.</p>
        </div>
      </div>
    </section>
  )
}

export default About