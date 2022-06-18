import React from 'react'
import Filter from '../Filter'
import Corusel from '../Home/Corusel'
import Reacommended from './Recommended'
import ChooseInfo from './ChooseInfo'
import Category from './Category'

const Home = () => {
  return (
    <div>
      <Filter/>
      <Corusel/>
      <Reacommended/>
      <ChooseInfo/>
      <Category/>
    </div>
  )
}

export default Home