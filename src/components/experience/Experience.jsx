import React from 'react'
import './experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3, DiJavascript, DiSass, DiReact, DiBootstrap, DiMysql} from 'react-icons/di'
import {SiFirebase} from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'
import {SiRedux} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experiencie' >
      <h2>Skills</h2>


      <div className='container experiencie__container'>
        
          <div className='experiencie__content'>
            <article className='experiencie__details'>
              <AiOutlineHtml5 className='experiencie_details-icon'/>
              <div>
              <h4>HTML</h4>
              </div>
            </article>
            <article className='experiencie__details'>
              <DiCss3 className='experiencie_details-icon'/>
              <div>
              <h4>CSS</h4>
              </div>
            </article>
            <article className='experiencie__details'>
              <DiJavascript className='experiencie_details-icon'/>
              <div>
              <h4>Javascript</h4>
              </div>
            </article>
            {/* <article className='experiencie__details'>
              <div>
              <DiSass className='experiencie_details-icon'/>
              <h4>SASS</h4>
              </div>
            </article> */}
            <article className='experiencie__details'>
              <DiReact className='experiencie_details-icon'/>
              <div>
              <h4>React</h4>
              </div>
            </article>
            <article className='experiencie__details'>
              
              <DiBootstrap className='experiencie_details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              </div>
            </article>
            <article className='experiencie__details'>
              <BsGithub className='experiencie_details-icon'/>
              <div>
              <h4>Git(github)</h4>
              </div>
            </article>
            <article className='experiencie__details'>
              <SiRedux className='experiencie_details-icon'/>
              <div>
              <h4>Redux</h4>
              </div>
            </article>
          </div>
        
      </div>
    </section>
  )
}

export default Experience