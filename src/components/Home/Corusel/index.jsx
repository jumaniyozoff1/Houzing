import React from 'react'
import { Container, Wrapper, Img,Icons} from './style'
import HomeOne from '../../../assets/img/homeone.png'
import HomeTwo from '../../../assets/img/hometwo.png'



const Corusel = () =>{
    return(
        <Wrapper>
                {/* <Icons.LeftArrow/>
                <Icons.RightArrow/> */}
            <Container autoplay>
                <Img src={HomeOne}/>
                <Img src={HomeTwo}/>
            </Container>
        </Wrapper>

    )
}   
export default Corusel