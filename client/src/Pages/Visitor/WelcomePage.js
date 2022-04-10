import React from 'react'
import InfoSection from '../../Components/InfoSection/InfoSection'
import Services from '../../Components/Services/Services'
import { homeObjOne,homeObjtwo } from '../../Components/InfoSection/Data'
import Footer from '../../Components/Footer/Footer'
const WelcomePage = () => {
  return (
    <>
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjtwo}/>
    <Services/>
    <Footer/>
  </>
  )
}

export default WelcomePage