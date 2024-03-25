import React, { useContext } from 'react'
import {AppContext} from '../App'
import './cars.css'
import bgImg from '../images/mclaren-1.jpg'
import PageTitle from '../components/pageTitle'
import CarCard from '../components/carCard'

const Cars = () => {
  const {data:cars, setData:setCars} = useContext(AppContext)

  return (
    <div id='cars' className='page cars'>
      <img src={bgImg} alt="" className='img-fluid page-img'/>
      <div className="container">
        <PageTitle title="Cars Catalouge" subTitle='Here are our new arrivals'
        />
        <div className="row">
          {cars && cars.length>0 && cars.map(car=> <CarCard key={car._id} car={car}/>)}
        </div>
      </div>
    </div>
  )
}

export default Cars
