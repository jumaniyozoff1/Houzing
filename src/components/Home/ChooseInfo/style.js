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

`

const Wrapper =styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 130px;

`
const Card =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .description{
    width: 235px;
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