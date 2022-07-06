import React,{useRef} from 'react'
import { Container } from './style'
import Card from '../../Card'
import { Swiper,SwiperSlide } from "swiper/react";
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
							slidesPerView: 2,
						},
            1330: {
							slidesPerView: 3,
						},
            1900: {
							slidesPerView: 4,
						},
					}}
				>
          <SwiperSlide>
            <Card/>
          </SwiperSlide>
          <SwiperSlide>
            <Card/>
          </SwiperSlide>
          <SwiperSlide>
            <Card/>
          </SwiperSlide>
          <SwiperSlide>
            <Card/>
          </SwiperSlide>
          <SwiperSlide>
            <Card/>
          </SwiperSlide>
          <SwiperSlide>
            <Card/>
          </SwiperSlide>
				</Swiper>
    </Container>
  )
}
export default Recommended