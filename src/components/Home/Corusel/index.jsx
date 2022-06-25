import React,{useRef} from 'react'
import { Container, Wrapper, Img, LeftArrow, RightArrow,IconLeft,IconRight} from './style'
import HomeOne from '../../../assets/img/homeone.png'
import HomeTwo from '../../../assets/img/hometwo.png'



const Corusel = () =>{
    const slider = useRef('click')
    return(
        <Wrapper>
            <IconLeft onClick={()=> slider.current.prev()}>
                <LeftArrow  />
            </IconLeft>
            <IconRight onClick={()=> slider.current.next()}>
              <RightArrow />
            </IconRight>
            <Container autoplay ref={slider}>
                <Img src={HomeOne}/>
                <Img src={HomeTwo}/>
            </Container>
        </Wrapper>

    )
}   
export default Corusel