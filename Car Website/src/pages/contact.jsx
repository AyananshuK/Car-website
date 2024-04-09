import React, { useContext } from 'react'
import './contact.css'
import bgImg from '../images/mclaren-1.jpg'
import PageTitle from '../components/pageTitle.jsx'
import ContactDetail from '../components/contactDetail.jsx'
import { useForm } from "react-hook-form"

const Contact = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()


  const onSubmit = async (data)=>{
    console.log(data)
    let r =await fetch("http://localhost:3000/", {method:"POST", headers: {"Content-Type": "application/json"}, body:JSON.stringify(data)}) 
    let res = await r.text()
  }


  return (
    <div id='contact' className='page contact'>
      <img src={bgImg} alt="" className='img-fluid page-img'/>
      <div className="container">
        <PageTitle title='Contact us' subTitle='We are happy to hear from you'/>
        <div className="contact-details">
          <iframe className='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0409982844803!2d79.15335867515302!3d12.969228414930127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1712599533908!5m2!1sen!2sin" allowfullsscreen='true' loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div className="row">
            <div className="col-lg-4">
              <ContactDetail heading={'Location'} description={'Tiruvalam road, Katpadi, 632014'} icon={'bi bi-geo-alt'}/>
              <ContactDetail heading={'Email'} description={'akoner@gmail.com'} icon={'bi bi-envelope'}/>
              <ContactDetail heading={'Phone'} description={'+91 9999999999'} icon={'bi bi-telephone'}/>
            </div>

            <div className="col-lg-8 form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-lg-6">
                    <input {...register("name", {required:{value: true, message: "Name is required"}})} className='name' type="text" placeholder='Your name' />
                  </div>
                  <div className="col-lg-6">
                    <input {...register("email", {required:{value: true, message: "Email is required"}})} className='email' type="email" placeholder='Your email'/>
                  </div>
                </div>
                
                <input {...register("subject", {required:{value: true, message: "Subject is required"}})} className='sub' type="text" placeholder='Subject'/>
                
                <textarea {...register("message", {required:{value: true, message: "Write your message"}})} className='des' placeholder='Message'></textarea>
                
                <input className='btn' disabled={isSubmitting} type="submit" value={'Send Message'} />
                {(errors.name || errors.email || errors.subject || errors.message) && <span style={{fontFamily:"Arial", fontWeight:"600", color:"red", paddingLeft:"15px"}}>All fields are required!</span>}
                {isSubmitting && <span style={{fontFamily:"Arial", fontWeight:"600", color:"#0eaccc", paddingLeft:"15px"}}>Loading...</span>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
