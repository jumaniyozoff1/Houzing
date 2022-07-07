import React,{useRef} from 'react'
import { Container, Wrapper } from './style'
import Card from '../../Card'
import { Swiper,SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Recent = () =>{
  return(
    <Container>
      <h1 className='title'>Recent Properties for Rent</h1>
      <p className='dec'>112 Glenwood Ave Hyde Park, Boston, MA</p>
      <p className='description'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
      <Wrapper>
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
      </Wrapper>
    </Container>
  )
}
export default Recent