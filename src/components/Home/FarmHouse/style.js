import styled from "styled-components"

const Container = styled.div`
    width:100%;
    height: 571px;
    margin-top: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
const Img =styled.img`
    width: 100%;
    height: 571px;
    filter: brightness(45%);
`
const Title =styled.div`
    position: absolute;
    display: flex;
    flex-direction:column;
    align-items: center;
    width: fit-content;
    z-index: 999;
    .title{
    width: 567px;
    height: 72px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    }
`


export {
    Container,
    Img,
    Title,
}