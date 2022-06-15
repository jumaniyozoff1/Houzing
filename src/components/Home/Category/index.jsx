import React,{useRef} from 'react'
import { Contaier, Wrapper,Icons,Img,IconLeft,IconRight } from './style'
import AliceCarousel from 'react-alice-carousel';
// import House from '../../../assets/img/house.png'
import Apartment from '../../../assets/img/apartment.png'
import Office from '../../../assets/img/office.png'
import Villa from '../../../assets/img/villa.png'



const Category= () => {
  const slider = useRef('click')
  const Responsive = {
    0:{
      items:1,
    },
    1024:{
      items:3,
    }
  }
  const items = [
    <Img  src={Villa}></Img>,
    <Img  src={Apartment}></Img>,
    <Img  src={Office}></Img>,
    <Img  src={Villa}></Img>,
  ];
  return (
    <Contaier>
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
    </Contaier>
  )
}

export default  Category