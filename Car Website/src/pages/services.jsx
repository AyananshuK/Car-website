import React from 'react'
import './services.css'
import bgImg1 from '../images/lamborghini-1-1.jpg'
import bgImg2 from '../images/lamborghini-2-1.jpg'
import bgImg3 from '../images/mclaren-1.jpg'
import bgImg4 from '../images/mclaren-3.jpeg'
import PageTitle from '../components/pageTitle.jsx'
import ServiceBox from '../components/serviceBox.jsx'
import ServiceBoxImg from '../components/serviceBoxImg.jsx'

const Services = () => {
  return (
    <>
      <div id='services' className='page services'>
        <img src={bgImg3} alt="" className='img-fluid page-img'/>
        <div className="container">
          <PageTitle className={'services-title'} title='Services' subTitle='Here are our services'/>

          <div className="service">
            <div className="row">
              <div className="col-lg-3">
                <ServiceBox title={'Routine Maintenance'} icon={'bi bi-geo-alt'} description=' Includes regular, scheduled maintenance.'/>
              </div>
              <div className="col-lg-3">
              <ServiceBox title={'Diagnostic and Repair'} icon={'bi bi-geo-alt'} description='Involves identifying and fixing specific issues.'/>
              </div>
              <div className="col-lg-3">
              <ServiceBox title={'Preventive Maintenance'} icon={'bi bi-geo-alt'} description="Maintain the vehicle's reliability and longevity."/>
              </div>
              <div className="col-lg-3">
              <ServiceBox title={'Specialized Service'} icon={'bi bi-geo-alt'} description={"Services tailored to specific needs or circumstances."}/>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <ServiceBoxImg img={bgImg1} descripiton={"This includes regular, scheduled maintenance tasks recommended by the vehicle manufacturer to keep the car in good working condition. It often involves tasks such as oil changes, tire rotations, fluid checks and top-ups, and inspections of various components like brakes, filters, belts, and hoses."} title={'Routine Maintenance'}/>
              </div>
              <div className="col-lg-6">
                <ServiceBoxImg img={bgImg2} descripiton={" This type of servicing involves identifying and fixing specific issues or problems with the vehicle. It may include troubleshooting engine problems, addressing electrical issues, repairing brakes, replacing worn-out components, and resolving any other mechanical or technical issues that arise."} title={'Diagnostic and Repair'}/>
              </div>
              <div className="col-lg-6">
                <ServiceBoxImg img={bgImg3} descripiton={"This focuses on proactive measures to prevent potential problems and maintain the vehicle's reliability and longevity. It may include services such as fuel system cleaning, cooling system flushes, transmission fluid changes, and other preventive measures aimed at avoiding major repairs or breakdowns in the future."} title={'Preventive Maintenance'}/>
              </div>
              <div className="col-lg-6">
                <ServiceBoxImg img={bgImg4} descripiton={"This category encompasses services tailored to specific needs or circumstances, such as seasonal maintenance (e.g., preparing the car for winter or summer driving), performance upgrades or modifications, restoration work for classic or vintage cars, and services for specialized vehicles like hybrids, electric cars, or high-performance vehicles."} title={'Specialized Service'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
