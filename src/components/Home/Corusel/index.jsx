import React,{useRef} from 'react'
import { Container, Wrapper, Img, LeftArrow, RightArrow,IconLeft,IconRight,Infowrap,Detailes,Icon, Position} from './style'
import HomeOne from '../../../assets/img/homeone.png'
import HomeTwo from '../../../assets/img/hometwo.png'
import Button from '../../Generic/Button'



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
            <Position>
                <h1 className='title'>Skyper Pool Partment</h1>
                <h2 className='sub-title'>112 Glenwood Ave Hyde Park, Boston, MA</h2>
                <Infowrap>
                    <Detailes>
                        <Icon.Beds/>
                        <p className='small-description'> 4 Beds</p>
                    </Detailes>
                    <Detailes>
                        <Icon.Baths/>
                        <p className='small-description'>5 Baths</p>
                    </Detailes>
                    <Detailes>
                        <Icon.Garage/>
                        <p className='small-description'>1 Garage</p>
                    </Detailes>
                    <Detailes>
                        <Icon.SqFt/>
                        <p className='small-description'>1200 Sq Ft</p>
                    </Detailes>
                </Infowrap>
                <h1 className='title-small'>$5,250/mo</h1>
                <Button className='button' mt={10} width={'180px'}>Read more</Button>
            </Position>
            <Container autoplay ref={slider}>
                <Img src={HomeOne}/>
                <Img src={HomeTwo}/>
            </Container>
        </Wrapper>

    )
}   
export default Corusel