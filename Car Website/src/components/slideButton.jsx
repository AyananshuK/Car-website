import React from 'react'
import './slideButton.css'

const SlideButton = ({index, slideChange}) => {
  return (
    <a className='slide-btn' href="#" onClick={()=>{slideChange(index)}}>
        <i className='bi bi-play-fill'></i>
    </a>
  )
}

export default SlideButton
