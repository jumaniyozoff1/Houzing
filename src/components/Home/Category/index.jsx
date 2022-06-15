import React,{useRef} from 'react'
import { Contaier, Wrapper,Icons,Img } from './style'
import Card from '../../Card'
import AliceCarousel from 'react-alice-carousel';
import House from '../../../assets/img/house.png'



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
    <Img   src={House}/>,
    <Img   src={House}/>,
    <Img   src={House}/>,
    <Img   src={House}/>,
  ];
  return (
    <Contaier>
        <h1 className='title'>Category</h1>
        <p className='description text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, pariatur?</p>
          <Icons.Left  onClick={()=> slider.current.slidePrev()}/>
          <Icons.Right onClick={()=> slider.current.slideNext()}/>
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

export default  Category