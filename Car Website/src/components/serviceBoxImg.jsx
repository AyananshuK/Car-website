import React from 'react'
import './serviceBoxImg.css'

const ServiceBoxImg = ({img, title, descripiton}) => {
  return (
    <>
        <div className="service-box">
            <img src={`${img}`} alt="" className='img-fluid img'/>    
            <div className="details">
                <h5 className='title'>{title}</h5>
                <p className='desc'>{descripiton}</p>
            </div>
        </div>
    </>
  )
}

export default ServiceBoxImg
