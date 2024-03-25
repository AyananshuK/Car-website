import React, { useEffect, useState } from 'react'
import './carRating.css'

const CarRating = ({rating}) => {
    const [stars, setStars] = useState([])
    const generateStars = ()=>{
        let st = []
        if(rating>5 || rating<1){
            return
        }
        for(let i=0;i<rating;i++){
            st.push(i)
        }
        return st
    }

    useEffect(()=>{
        setStars(generateStars())
    },[])

  return (
    <div className="stars">
        {stars.map(star=>(
            <i key={star} className='bi bi-star-fill'></i>
        ))}
    </div>
  )
}

export default CarRating
