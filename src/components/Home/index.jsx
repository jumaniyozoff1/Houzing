import React from 'react'
import Filter from '../Filter'
import Corusel from '../Home/Corusel'
import Reacommended from './Recommended'
import ChooseInfo from './ChooseInfo'
import Category from './Category'
import FarmHouse from './FarmHouse'
import Recent from './Recent'
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
      {/* <Testimonials/> */}
    </div>
  )
}

export default Home