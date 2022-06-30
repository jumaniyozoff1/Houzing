import React from 'react'
import Filter from '../Filter'
import Corusel from '../Home/Corusel'
import Reacommended from './Recommended'
import ChooseInfo from './ChooseInfo'
import Category from './Category'
import FarmHouse from './FarmHouse'
import Recent from './Recent'
import Footer from '../Footer'
// import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
      <Filter/>
      <Corusel/>
      <Reacommended/>
      <ChooseInfo/>
      <Category/>
      <FarmHouse/>
      <Recent/>
      <Footer/>
      {/* <Testimonials/> */}
    </div>
  )
}

export default Home