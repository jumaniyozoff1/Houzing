import styled from 'styled-components';
import { Carousel } from 'antd';
import {ReactComponent as Left} from '../../../assets/icons/Left.svg'
import {ReactComponent as Right} from '../../../assets/icons/Right.svg'
import {ReactComponent as SqFt} from '../../../assets/icons/SqFt.svg'
import {ReactComponent as Garage} from '../../../assets/icons/Garage.svg'
import {ReactComponent as Baths} from '../../../assets/icons/Baths.svg'
import {ReactComponent as Beds} from '../../../assets/icons/Beds.svg'



const Wrapper = styled.div`
    position: relative;


`

const Container = styled(Carousel)`
`

const Img = styled.img`
    width: 100%;
    height: 571px;
    filter: brightness(45%);
    object-fit: cover;
`



const LeftArrow =styled(Left)`
    width: 20px;
    height: 20px;
`
const RightArrow = styled(Right)`
    width: 20px;
    height: 20px;
`
const IconLeft =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 999;
    top: 50%;
    right: 93.8%;
    width: 45px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 50%;
    opacity: 0.2;
    /* transform: matrix(-1, 0, 0, 1, 0, 0); */
    border: 1px solid #E6E9EC;
    cursor: pointer;
    user-select: none;
    :hover{
        opacity: 0.3;
    }
    @media(max-width: 935px){
        display: none;
    }
  
    
`

const IconRight =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 999;
    top: 50%;
    left: 93.8%;
    width: 45px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 50%;
    opacity: 0.2;
    /* transform: matrix(-1, 0, 0, 1, 0, 0); */
    border: 1px solid #E6E9EC;
    cursor: pointer;
    user-select: none;
    :hover{
        opacity: 0.3;
    }
    @media(max-width: 935px){
        display: none;
    }
  
    
`



const Position =styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 7;
    left: 32%;
    /* display: none; */
    .title{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 44px;
        line-height: 48px;
        letter-spacing: -0.02em;
        color: #FFFFFF;
        margin-top: 130px;
        @media (max-width: 935px){
            margin-top: 30px;
        }
        @media (max-width: 935px){
            font-size: 28px;
        }
    }
    .sub-title{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
        margin-top: 5px;

    }
    .title-small{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 36px;
        letter-spacing: -0.02em;
        color: #FFFFFF;
        margin-top: 10px;
    }
    @media (max-width: 935px){
        left: 32%;
    }
`


const Infowrap = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 24px;
  margin-top: 10px;
`

const Detailes = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .small-description{
    color: #ffffff;
  }

`

const Icon = styled.div``
Icon.SqFt = styled(SqFt)`
    /* &path{
        fill: white;
    } */
`
Icon.Garage = styled(Garage)``
Icon.Baths = styled(Baths)``
Icon.Beds = styled(Beds)``


export{
    Wrapper,
    Container,
    Img,
    LeftArrow,
    RightArrow,
    IconLeft,
    IconRight,
    Position,
    Infowrap,
    Detailes,
    Icon,
}


