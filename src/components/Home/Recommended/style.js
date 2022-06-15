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
    padding: 0 50px;
    .alice-carousel{
        max-width:  1280px;
    }
    .alice-carousel__stage{
        padding: 20px;
    }
`
const Icons =styled.div``

const IconLeft =styled.div`
    position: absolute;
    z-index: 999;
    top: 43%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 50%;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 0px 55px;
    cursor: pointer;
    user-select: none;
  
    
`
const  IconRight =styled.div`
    position: absolute;
    z-index: 999;
    top: 43%;
    left: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 50%;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 0px 55px;
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