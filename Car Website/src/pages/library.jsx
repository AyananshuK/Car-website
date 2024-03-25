import React, { useContext } from 'react'
import './library.css'
import bgImg from '../images/mclaren-1.jpg'
import PageTitle from '../components/pageTitle.jsx'
import { AppContext } from '../App.jsx'
import CarCard from '../components/carCard.jsx'
import { Link } from 'react-router-dom'

const Library = () => {
  const {library:cars} = useContext(AppContext)


  return (
    <div id='library' className='page library'>
      <img src={bgImg} alt="" className='img-fluid page-img'/>
      <div className="container">
        <PageTitle title='Liked Cars' subTitle='Here is your car collection'/>
        <div className="row">
          {
            cars && cars.length === 0 ?(
              <div className="text-center">
                <h3 className='empty'>You have no collection</h3>
                <Link className='browse' to='/cars'>
                  Browse Cars
                </Link>
              </div>
            ) : (
              cars.map(car=>(<CarCard key={car._id} car={car} />))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Library
