import React,{useRef} from 'react'
import { Container, Wrapper,Icons,Img,IconLeft,IconRight } from './style'
import AliceCarousel from 'react-alice-carousel';
import Villa from '../../../assets/img/villa.png'
import GenericCard from './GenericCard'


const Category= () => {
  const slider = useRef('click')
  const Responsive = {
    0:{
      items:1,
    },
    1024:{
      items:2,
    }
  }
  const items = [
    <GenericCard className='card'/>,
    <GenericCard/>,
    <GenericCard/>,
    <GenericCard/>,
    // <Img  src={Villa}></Img>,
  ];
  return (
    <Container>
        <h1 className='title'>Category</h1>
        <p className='description text-center'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
        <Wrapper >
            <IconLeft onClick={()=> slider.current.slidePrev()}>
              <Icons.Left  />
            </IconLeft>
            <IconRight  onClick={()=> slider.current.slideNext()}>
              <Icons.Right/>
            </IconRight>
            <AliceCarousel  
              controlsStrategy='alternate'
              mouseTracking
              keyboardNavigation={true} 
              disableButtonsControls={true}
              responsive={Responsive}
              infinite={true}
              items={items} 
              ref={slider}
            />
        </Wrapper>
    </Container>
  )
}

export default  Category