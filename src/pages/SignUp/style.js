import styled from "styled-components";

const Container =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-top: 95px; */
    height: 90vh;
`
const Wrapper =styled.div`
    padding:24px 30px;
    width: 580px;
    height: fit-content;
    background: #FFFFFF;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    .title{
        width: 100%;
        text-align: start;
    }
`

export{
    Container,
    Wrapper,
}