import React,{useRef} from 'react'
import { Container } from './style'
import GenericCard from './GenericCard'
import Carousel from "react-elastic-carousel";

const Recommended = () =>{
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 2 },
    { width: 1180, itemsToShow: 3 },
    // { width: 1440, itemsToShow: 4 },
    // { width: 1440, itemsToShow: 4 },
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
          <GenericCard/>
          <GenericCard/>
          <GenericCard/>
          <GenericCard/>
          <GenericCard/>
          <GenericCard/>
          <GenericCard/>
          <GenericCard/>
        </Carousel>
    </Container>
  )
}
export default Recommended