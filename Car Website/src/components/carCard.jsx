import React, { useContext } from 'react'
import './carCard.css'
import {Link} from 'react-router-dom'
import CarRatnig from './carRating'
import { AppContext } from '../App'

const CarCard = ({car}) => {
  const {library, setLibrary} = useContext(AppContext)
  const handleAddToLibrary = car=>{
    setLibrary([...library, car])
  }

  const handleRemoveFromLibrary = car=>{
    setLibrary(library.filter(item=> item._id !== car._id))
  }

  return (
    <div className='col-lg-4 col-md-6'>
      <div className="car">
        <div className="car-img">
          <img src={car.bannerImg} alt="" className='img-fluid' />
        </div>
        <h3>
          <Link to={`/cars/${car._id}`}>{car.title}</Link>
        </h3>
        <CarRatnig rating={car.rating}/>
        <p>{car.description.substring(0,30)}...</p>
        <div className="price">${car.price && car.price.toLocaleString('en-US')}</div>
        <div className="buttons">
          <Link className={`like ${library.includes(car) ? 'active' : undefined}`} onClick={library.includes(car) ? ()=>handleRemoveFromLibrary(car) : ()=>handleAddToLibrary(car)}>
            Like <i className='bi bi-heart-fill'></i>
          </Link>
          <Link to={`/cars/${car._id}`} className='details'>
            Details <i className='bi bi-plus-lg'></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CarCard
