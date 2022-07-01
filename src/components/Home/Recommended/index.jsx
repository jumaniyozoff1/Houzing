import React,{useRef} from 'react'
import { Container } from './style'
import Card from '../../Card'
import Carousel from "react-elastic-carousel";

const Recommended = () =>{
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 1120, itemsToShow: 3 },
    { width: 1305, itemsToShow: 3 },
    { width: 1440, itemsToShow: 3 },
    { width: 1920, itemsToShow: 3 },
  ];
  return(
    <Container>
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