import styled from "styled-components";


const Container =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const Wrapper =styled.div`
    margin-top: 150px;
    width: 520px;
    height: 300px;
    background: #FFFFFF;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
    padding: 24px 30px;
    .login{
        width: 41px;
        height: 20px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #0D263B;
        margin-top: 10px;
    }
    span{
        user-select: none;
        cursor: pointer;
        color: var(--activeColor);
        font-weight: 520;
    }

`

export{
    Container,
    Wrapper,
}