import React from 'react'
import './experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3, DiJavascript, DiSass, DiReact, DiBootstrap, DiMysql} from 'react-icons/di'
import {SiFirebase} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experiencie' >
      <h2>Skills</h2>


      <div className='container experiencie__container'>
        <div className="experiencie__frontend">
          <h3>Frontend</h3>
          <div className='experiencie__content'>
            <article className='experiencie__details'>
              <AiOutlineHtml5 className='experiencie_details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiencie__details'>
              <DiCss3 className='experiencie_details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiencie__details'>
              <DiJavascript className='experiencie_details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiencie__details'>
              <div>
              <DiSass className='experiencie_details-icon'/>
              <h4>SASS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiencie__details'>
              <DiReact className='experiencie_details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiencie__details'>
              
              <DiBootstrap className='experiencie_details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experiencie__backend">
        <h3>Backend</h3>
          <div className='experiencie__content'>
          <article className='experiencie__details'>
            
              <SiFirebase className='experiencie_details-icon'/>
              <div>
              <h4>Firebase</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiencie__details'>
              <DiMysql className='experiencie_details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience