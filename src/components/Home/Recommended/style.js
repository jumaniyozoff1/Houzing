import styled from "styled-components";
import {ReactComponent as Left} from '../../../assets/icons/Left.svg'
import {ReactComponent as Right} from '../../../assets/icons/Right.svg'

const Contaier = styled.div`
    width: 100%;
    margin-top: 96px;

`
const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    max-width: 1440px;
    padding: 0 100px;
    .alice-carousel{
        max-width: 1440px;
        /* border: 1px solid red; */
    }
    .alice-carousel__stage{
        padding:0 7px;
    }
`
const Icons =styled.div``

const IconLeft =styled.div`
    position: absolute;
    z-index: 999;
    top: 43%;
    right: 93.8%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 50%;
    border: 1px solid #E6E9EC;
    cursor: pointer;
    user-select: none;
    @media(max-width: 1365px){
        left:-10%;
        top:90%;

        
    }
  
    
`
const  IconRight =styled.div`
    position: absolute;
    z-index: 999;
    top: 43%;
    left: 92.8%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 50%;
    border: 1px solid #E6E9EC;
    cursor: pointer;
    user-select: none;
  
    
`
Icons.Left =styled(Left)`
    user-select: none;
    position: relative;
    z-index: 999;
    right: 3px;
    width: 18px;
    height: 18px;
`
Icons.Right =styled(Right)`
    user-select: none;
    position: relative;
    z-index: 999;
    left: 4px;
    width: 18px;
    height: 18px;
`


export {
    Contaier,
    Wrapper,
    IconLeft,
    IconRight,
    Icons,
}