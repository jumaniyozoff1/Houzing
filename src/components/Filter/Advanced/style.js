import styled from 'styled-components'

const Wrapper = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    padding: 10px 10px;
`
Wrapper.item = styled.span`
    display: flex;
    flex-direction: column;
`
const Text = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0D263B;
    margin: 5px 0;
`
const Inputs = styled.span`
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 5px 0;
`
const Buttons =styled.span`
    display: flex;
    justify-content: space-between;
`
export {Wrapper,Text,Inputs,Buttons}