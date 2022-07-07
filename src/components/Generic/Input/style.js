import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  position: relative;
  width: ${({width})=>(width ? width: '100%')};
  height: ${({height})=> height || '44px'};
  margin-top: ${({mt})=> `${mt}px`};
  margin-bottom: ${({mb})=> `${mb}px`};
  margin-right: ${({mr})=> `${mr}px`};
  margin-left: ${({ml})=> `${ml}px`};
  border: 1px solid #E6E9EC;
  border-radius: 5px;
`
const Icon =styled.div`
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 30px;
`
const SearchInput =styled.input`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  padding-left: ${({pl})=> pl || '14px'};
  border-radius: 2px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  :focus{
    box-shadow: 0px 0px 5px 0.2px var(--activeColor);
  }
`


export {Container,Icon,SearchInput}