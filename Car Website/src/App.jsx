import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'boxicons/css/boxicons.min.css'
import './App.css'
import React,{useState, useEffect} from 'react'
import Header from './components/header'
import {Routes, Route} from 'react-router-dom'
import Banner from './pages/banner'
import Cars from './pages/cars'
import Services from './pages/services'
import CarsDetails from './pages/carsDetails'
import Library from './pages/library'
import Contact from './pages/contact'

export const AppContext = React.createContext()

function App() {
const [data, setData] = useState([])
const [library, setLibrary] = useState([])

useEffect(() => {
  let libraryString = localStorage.getItem("library")
  if(libraryString){ //If not null
    let library = JSON.parse(localStorage.getItem("library"))
    setLibrary(library)
  }
}, [])

const fetchData = ()=>{
  fetch("http://localhost:5173/public/api/vehiclesData.json").then(res=>res.json()).then(data => setData(data)).catch(e=>console.log(e))
}

useEffect(()=>{
  fetchData()
},[])




  return (
    <>
      <AppContext.Provider value={{data, setData, library, setLibrary}}>
        <Header />
        <Routes>
         <Route exact path='/' element={<Banner />}/>
         <Route exact path='/cars' element={<Cars />}/>
         <Route exact path='/cars/:id' element={<CarsDetails />}/>  {/* 'id' in the link is a parameter here. The value of id will change. */}
         <Route exact path='/library' element={<Library />}/>
         <Route exact path='/services' element={<Services />}/>
         <Route exact path='/contact' element={<Contact />}/>
        </Routes>

      </AppContext.Provider>
    </>
  )
}

export default App
