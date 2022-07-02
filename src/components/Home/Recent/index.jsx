import React,{useRef} from 'react'
import { Container } from './style'
import Card from '../../Card'
import Carousel from "react-elastic-carousel";

const Recommended = () =>{
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 980, itemsToShow: 2 },
    { width: 1120, itemsToShow: 3 },
    { width: 1305, itemsToShow: 3 },
    { width: 1440, itemsToShow: 3 },
    { width: 1920, itemsToShow: 3 },
  ];
  return(
    <Container>
      <h1 className='title'>Recent Properties for Rent</h1>
      <p className='description'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
      <p className='description dec'>112 Glenwood Ave Hyde Park, Boston, MA</p>
        <Carousel 
          itemsToShow={4}
          itemsToScroll={1}
          breakPoints ={breakPoints}
          itemPadding={[0, 20]}
          enableMouseSwipe={true}   
          // showArrows={false}
        >
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
        </Carousel>
    </Container>
  )
}
export default Recommended