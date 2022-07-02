import styled from "styled-components";
import { ReactComponent as Discord } from "../../../assets/icons/discord.svg";
import { ReactComponent as House } from "../../../assets/icons/house.svg";
import { ReactComponent as Calculator } from "../../../assets/icons/calculator.svg";
import { ReactComponent as Map } from "../../../assets/icons/map.svg";


const Container = styled.div`
  margin-top: 48px;
  width: 100%;
  height: 434px;
  background-color: #F5F7FC;
  .title{
    padding: 48px;
  }
  @media (max-width: 1366px){
    height: fit-content;
  }
  .nonedec{
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

const Wrapper =styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 130px;
  @media (max-width: 1366px){
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 540px){
      padding: 50px 10px;
  }


`
const Card =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .description{
    max-width: 235px;
    height: 5%;
  }
`

const Icons=styled.div``

  Icons.Discord=styled(Discord)`
    margin-bottom: 5px;
  `

  Icons.House=styled(House)`
    margin-bottom: 5px;
  `

  Icons.Calculator=styled(Calculator)`
    margin-bottom: 5px;
  `

  Icons.Map=styled(Map)`
    margin-bottom: 5px;
  `


export{
  Container,
  Wrapper,
  Icons,
  Card,
}