import styled from 'styled-components';
import { Carousel } from 'antd';
import Left from '../../../assets/icons/Left.svg'
import Right from '../../../assets/icons/Right.svg'




const Wrapper = styled.div`
    position: relative;
`

const Container = styled(Carousel)``

const Icons = styled.div``

Icons.Left = styled(Left)``
Icons.Right = styled(Right)``






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


const Img = styled.img``





export{Wrapper,Container,Img,Icons}


