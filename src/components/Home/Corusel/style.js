import styled from 'styled-components';
import { Carousel } from 'antd';
import {ReactComponent as Left} from '../../../assets/icons/Left.svg'
import {ReactComponent as Right} from '../../../assets/icons/Right.svg'




const Wrapper = styled.div`
    position: relative;
`

const Container = styled(Carousel)``

const Img = styled.img`
    filter: brightness(45%);
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
    /* @media(max-width: 1366px){
        left:-10%;
        top:90%;  
    } */
  
    
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
    /* @media(max-width: 1365px){
        left:-10%;
        top:90%;        
    } */
  
    
`





// const LeftArrow = styled.img`
//     position: absolute;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 45px;
//     height: 45px;
//     padding: 12px;
//     color: white;
//     background-color: white;
//     opacity: 0.5;
//     border-radius: 50%;
//     z-index: 999;
//     cursor: pointer;
//     user-select: none;
//     transform: translate(-100%,-40%);
//     :hover{
//         opacity: 0.77;
//     }
//     & path {
//         fill: #0d263b;
//     }
// `

// const RightArrow = styled.img`
//     position: absolute;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 45px;
//     height: 45px;
//     padding: 12px;
//     color: white;
//     background-color: white;
//     opacity: 0.5;
//     border-radius: 50%;
//     z-index: 999;
//     transform: translate(-100%,-40%);
//     cursor: pointer;
//     user-select: none;
//     :hover{
//         opacity: 0.77;
//     }
//     & path {
//         fill: #0d263b;
//     }
// `




export{
    Wrapper,
    Container,
    Img,
    LeftArrow,
    RightArrow,
    IconLeft,
    IconRight,
}


