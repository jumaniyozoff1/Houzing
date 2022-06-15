import React,{useRef} from 'react'
import { Contaier, Wrapper,Icons,Icon, IconLeft, IconRight } from './style'
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
      
        <h1 className='title'>Reacommended</h1>
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

export default  Reacommended