import styled from "styled-components";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Card = styled.div`
    width: 380px;
    height: 197px;
    background: #FFFFFF;
    box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    .description{
        width: 284px;
        height: 96px;
    }
`
const AboutUser =styled.div`
    position: absolute;
    top: 89%;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
const UserPhoto=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius:50%;
    background: #FFFFFF;
    box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
`
const Img =styled.img``



export {
    Container,
    Img,
    Card,
    AboutUser,
    UserPhoto,
}