import React,{useRef} from 'react'
import { Container, } from './style'
import Carousel from "react-elastic-carousel";
import AliceCarousel from 'react-alice-carousel';
// import House from '../../../assets/img/house.png'
import Apartment from '../../../assets/img/apartment.png'
import Office from '../../../assets/img/office.png'
import Villa from '../../../assets/img/villa.png'



const Category= () => {
  // const slider = useRef('click')
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 980, itemsToShow: 2 },
    { width: 1120, itemsToShow: 3 },
    { width: 1305, itemsToShow: 3 },
    { width: 1440, itemsToShow: 3 },
    { width: 1920, itemsToShow: 3 },
  ];
  return (
    <Container>
        <h1 className='title'>Category</h1>
        <p className='description text-center'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
        <Carousel 
          itemsToShow={4}
          itemsToScroll={1}
          breakPoints ={breakPoints}
          itemPadding={[0, 20]}
          enableMouseSwipe={true}   
          // showArrows={false}
        >
          <Office/>
          <Office/>
          <Office/>
          <Office/>
        </Carousel>
    </Container>
  )
}

export default  Category