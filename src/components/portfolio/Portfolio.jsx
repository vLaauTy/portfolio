import React from 'react'
import './portfolio.css'
import img from '../../assets/topdrinks.png'
import img2 from '../../assets/javascript.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mis proyectos</h5>
      <h2>Portafolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img} alt="topDrinks" />
          </div>
          <h3>TopDrinks</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/vLaauTy/topDrinkAtencio" className='btn' target='_blank'>Github</a>
          <a href="https://topdrinks-e8419.web.app/" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img2} alt="javascript" />
          </div>
          <h3>ecommerce javascript</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/vLaauTy/proyecto_javascript" className='btn' target='_blank'>Github</a>
          <a href="https://vlaauty.github.io/proyecto_javascript/" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio