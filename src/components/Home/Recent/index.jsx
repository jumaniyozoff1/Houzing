import React,{useRef} from 'react'
import { Container,Wrapper,Carousel } from './style'
import Card from '../../Card'
// import Carousel from "react-elastic-carousel";
const Recommended = () =>{
  const ref =useRef('click')
  const width =  {
    0: {
        items: 1,
    },
    1024: {
        items: 3
    }

  }
  const items =[
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
  ]
  return(
    <Container>
      <h1 className='title'>Recent Properties for Rent</h1>
      {/* <p className='description'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p> */}
      <p className='description dec'>112 Glenwood Ave Hyde Park, Boston, MA</p>
      <Wrapper>
        <Card/>
          {/* <button onClick={()=>ref.current.slidePrev()}>prive</button> */}
          {/* <button onClick={()=>ref.current.slideNext()}>next</button> */}
          {/* <Carousel keyboardNavigation={true} disableButtonsControls={true} ref={ref} mouseTracking infinite={true} responsive={width} controlsStrategy="alternate" items={items}/> */}
        </Wrapper>
    </Container>
  )
}
export default Recommended