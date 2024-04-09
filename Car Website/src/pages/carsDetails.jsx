import React, {useEffect, useState} from 'react'
import './carsDetails.css'
import { useParams } from 'react-router-dom'
import '../App.css'
import IconBox from '../components/iconBox'

const CarsDetails = () => {
  const [car, setCar] = useState({})
  const {id} = useParams()
  const index = parseInt(id)-1

  const fetchData = ()=>{
    fetch("http://localhost:5173/public/api/vehiclesData.json").then(res=>res.json()).then(data => setCar(data[index])).catch(e=>console.log(e))
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div id='car-details' className='page car-details'>
      <img src={car.pageBgImg} alt="" className='img-fluid page-img'/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 p-0 details-left">
            <img src={car.bannerImg} alt="" className="img-fluid details-img-left" />
            <div className="price">
              ${car.price && car.price.toLocaleString('en-US')}
              <span>Drive away</span>
            </div>
            <a href="" className='contact-seller'>
              <i className='bi bi-telephone-fill'></i>Contact Dealer
            </a>
          </div>
          <div className="col-lg-4 p-0 details-middle">
            <div className='content'>
              <h2>Car Details</h2>
              <div className="details-box">
                <i className='bi bi-emoji-smile'></i>
                <span>Engine</span>
                <p><strong>Engine data: </strong>{car.engineData}</p>
              </div>

              <div className="details-box">
                <i className='bi bi-journal-richtext'></i>
                <span>Transmission</span>
                <p><strong>Transmission: </strong>{car.transmission}</p>
              </div>

              <div className="details-box">
                <i className='bi bi-clock'></i>
                <span>Type</span>
                <p><strong>Type: </strong>{car.type}</p>
              </div>

              <div className="details-box">
                <i className='bi bi-award'></i>
                <span>Category</span>
                <p><strong>Category: </strong>{car.category}</p>
              </div>
            </div>

            <img src={car.leftImg} alt="" className='img-fluid details-img-middle'/>
          </div>
          <div className="col-lg-4 p-0 details-right">
            <img src={car.rightImg} alt="" className='details-img-right img-fluid'/>
            <div className="d-flex gap-2">
              <IconBox icon='bx bx-tachometer' title='Top speed' description={car.topSpeed} />
              <IconBox icon='bx bx-world' title='Rating' description={`${car.rating} stars`}/>
            </div>
            <div className="details-description">
              <h4>Description</h4>
              <p>{car.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarsDetails
