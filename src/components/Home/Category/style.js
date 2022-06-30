import styled from "styled-components";
import {ReactComponent as Left} from '../../../assets/icons/Left.svg'
import {ReactComponent as Right} from '../../../assets/icons/Right.svg'
import {ReactComponent as Villa} from '../../../assets/icons/villa.svg' 

const Contaier = styled.div`
    position: relative;
    width: 100%;
    margin-top: 96px;

`
const Img =styled.img`
    position: relative;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 0 100px;
    .alice-carousel{
        max-width: 1440px;
        text-align: center;
    }
`
const Icons =styled.div``

Icons.Villa =styled(Villa)`
    position: absolute;
`

const IconLeft =styled.div`
    position: absolute;
    z-index: 999;
    top: 50%;
    right: 92.8%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 50%;
    border: 1px solid #E6E9EC;
    /* box-shadow: 0px 0px 55px; */
    cursor: pointer;
    user-select: none;
    
`
const  IconRight =styled.div`
    position: absolute;
    z-index: 999;
    top: 50%;
    left: 92.8%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 50%;
    border: 1px solid #E6E9EC;
    /* box-shadow: 0px 0px 55px; */
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
    Icons,
    Img,
    IconLeft,
    IconRight,
}