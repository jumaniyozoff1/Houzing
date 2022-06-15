import styled from "styled-components";
import {ReactComponent as Left} from '../../../assets/icons/Left.svg'
import {ReactComponent as Right} from '../../../assets/icons/Right.svg'

const Contaier = styled.div`
    position: relative;
    width: 100%;
    margin-top: 50px;

`
const Img =styled.img``
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    /* align-items: center;
    justify-content: space-around; */
    padding: 0 50px;
    .alice-carousel{
        max-width:  1280px;
    }
    .alice-carousel__stage{
        padding: 20px;
    }
`
const Icons =styled.div`
    display: flex;

`
Icons.Left =styled(Left)`
    position: absolute;
    text-align: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
    top: 50%;

`
Icons.Right =styled(Right)`
    top: 50%;
    left: 80%;
    position: absolute;
    text-align: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
`


export {
    Contaier,
    Wrapper,
    Icons,
    Img,
}