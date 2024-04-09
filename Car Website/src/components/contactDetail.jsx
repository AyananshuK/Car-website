import React from 'react'
import './contactDetail.css'

const ContactDetail = ({heading, description, icon}) => {
  return (
    <div className="d-flex mb-2 mt-2">
        <div className="icon-background"><i className={`${icon} icon`}></i></div>
        <div className="details">
        <h4>{heading}:</h4>
        <p>{description}</p>
        </div>
    </div>
  )
}

export default ContactDetail
