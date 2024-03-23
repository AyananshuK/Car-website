import React from 'react'
import './carsDetails.css'
import { useParams } from 'react-router-dom'

const CarsDetails = () => {
    const {id} = useParams()
  return (
    <div>
      {id}
    </div>
  )
}

export default CarsDetails
