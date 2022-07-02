import styled from "styled-components";

const Container =styled.div`
    margin-top: 96px;
    padding: 50px 50px;
    @media (max-width:600px){
        padding: 50px 5px;
    }
    .blNrpH{
        background-color : #ffffff;
        :hover{
            background-color: var(--activeColor);
        }
        @media (max-width: 700px){
            position: relative;
            top: 60%;
            left: 80px;
        }
        @media (max-width: 500px){
            display: none;
        }
    }
    .gqGntl{
        background-color : #ffffff;
        :hover{
            background-color: var(--activeColor);
        }
        @media (max-width: 700px){
            position: relative;
            top: 60%;
            right: 80px;
        }
        @media (max-width: 500px){
            display: none;
        } 
    }
    .description{
        @media (max-width: 690px){
            display: none;
           
        }
    }
    .dec{
        display: none;
        @media (max-width: 690px){
            display: flex;
            align-items: center;
            justify-content:center;
        }
    }    
`   

export{
    Container,
}