import React from 'react'
import Filter from '../Filter'
import Corusel from '../Home/Corusel'
import Category from './Category'
import Reacommended from './Recommended'
const Home = () => {
  return (
    <div>
      <Filter/>
      <Corusel/>
      <Reacommended/>
      <Category/>
    </div>
  )
}

export default Home