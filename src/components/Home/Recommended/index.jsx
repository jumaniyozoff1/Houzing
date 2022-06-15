import React,{useRef} from 'react'
import { Contaier, Wrapper,Icons } from './style'
import Card from '../../Card'
import AliceCarousel from 'react-alice-carousel';





const Reacommended= () => {
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
    <Card  />,
    <Card  />,
    <Card  />,
    <Card  />,
    <Card  />,
  ];
  return (
    <Contaier>
      <span>
        <Icons.Left  onClick={()=> slider.current.slidePrev()}/>
      </span>
      <span>
        <Icons.Right onClick={()=> slider.current.slideNext()}/>
      </span>
        <h1 className='title'>Reacommended</h1>
        <p className='description text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, pariatur?</p>
        <Wrapper >
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

export default  Reacommended