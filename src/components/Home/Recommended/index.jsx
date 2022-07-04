import React,{useRef} from 'react'
import { Container } from './style'
import Card from '../../Card'
import { Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Recommended = () =>{
  return(
    <Container>
      <Swiper
					className="products__slider"
					loop={true} 
					navigation={true} 
					spaceBetween={20} 
					pagination={{
						clickable: true,
						dynamicBullets: true,
					}}
					modules={[Pagination, Navigation]} 
          breakpoints={{
						0: {
							slidesPerView: 1,
						},
						640: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
					}}
				>
          <Card/>
          <Card/>
          <Card/>
				</Swiper>
    </Container>
  )
}
export default Recommended