import React from 'react'
import InfoSection from '../../Components/InfoSection/InfoSection'
import Services from '../../Components/Services/Services'
import { homeObjOne,homeObjtwo } from '../../Components/InfoSection/Data'
import Footer from '../../Components/Footer/Footer'
import Login from '../../Components/Login/Login'
import Navbar from '../../Components/Navbar/Navbar'


function WelcomePage() {

  return (
    <>
      
      <Navbar /> 
      <Login />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjtwo} />
      <Services />
      <Footer />


    </>
  )
}

export default WelcomePage