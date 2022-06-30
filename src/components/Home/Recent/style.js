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
    padding: 0 100px;
    .alice-carousel{
        /* padding-left: 150px;
        border: 1px solid red;
        @media (max-width: 1366px){
            padding-left:-10px;
        }
        @media (max-width: 1919px){
            padding-left: 150px;
        }
        /* @media (width: 1900px){
            padding-left: 200px;
        } */
        @media (min-width: 1920px){
            padding-left: 40px;
        }
        @media (max-width: 1935px){
            padding-left: 35px;
        }
        @media (max-width: 1980px){
            padding-left: 50px;
        }
        @media (min-width: 2000px){
            padding-left: 60px;
        }
        @media (min-width: 2080px){
            padding-left: 70px;
        } */
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
    @media(max-width: 1440px){
        right:92.8%;
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
    @media (max-width: 1920px){
        left: 93.8%;
    }
    @media (min-width: 1920px){
        left: 93.8%;
    }
  
    
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