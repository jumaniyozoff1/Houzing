import styled from "styled-components";
// import AliceCarousel from 'react-alice-carousel';

const Container =styled.div`
    margin-top: 96px;
    padding: 50px 50px;
    @media(max-width: 600px){
        padding: 50px 5px;
    }
`   
const Wrapper =styled.div`
    padding-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`
// const Carousel =styled.div(AliceCarousel)``

export{
    Container,
    Wrapper,
    // Carousel,
}