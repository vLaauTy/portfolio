import React from 'react'
import CV_Lautaro_Atencio_Exequiel2 from '../../assets/CV_Lautaro_Atencio_Exequiel2.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV_Lautaro_Atencio_Exequiel2} download className='btn'>Descargar CV</a>
        <a href="#contact" className='btn btn-primary'>Hablame!</a>
    </div>
  )
}

export default CTA