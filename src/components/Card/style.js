import styled from "styled-components";
import {ReactComponent as SqFt} from '../../assets/icons/SqFt.svg'
import {ReactComponent as Garage} from '../../assets/icons/Garage.svg'
import {ReactComponent as Baths} from '../../assets/icons/Baths.svg'
import {ReactComponent as Beds} from '../../assets/icons/Beds.svg'
import {ReactComponent as Zoom} from '../../assets/icons/zoom.svg'
import {ReactComponent as Like} from '../../assets/icons/like.svg'


const Container = styled.div`
  flex: 0 1 300px;
  background: #FFFFFF;
  border: 1px solid #E6E9EC;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  position: relative;
  :hover{
    -webkit-box-shadow: 0px 0px 34px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 34px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 34px 0px rgba(34, 60, 80, 0.2);
  }
`

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 42px;
  height: 42px;
  border-radius:50%;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
  top:  46.5%;
  right:  20px;

`

const Featured = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 12px;
  position: absolute;
  height: 23px;
  width: 100px;
  background: #0061DF;
  border-radius: 3px;
  user-select: none;
  color: #ffffff;
  font-weight: 600;
  top:20px;
  left: 3%;
  
`

const ForSale = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 12px;
  color: #ffffff;
  font-weight: 600;
  position: absolute;
  height: 23px;
  width: 100px;
  background: #0D263B;
  border-radius: 3px;
  user-select: none;
  top:20px;
  left: 68%;
  @media (max-width: 1180px){
    left: 67%;
  }
  @media (max-width: 1098px){
    left: 64.5%;
  }
  @media (max-width: 1049px){
    left: 62.5%;
  }
  @media (max-width: 1023px){
    left: 75%;
  }
  @media (max-width: 913px){
    left: 70%;
  }
  @media (max-width: 780px){
    left: 68%;
  }
  @media (max-width: 725px){
    left: 66%;
  }
  @media (max-width: 680px){
    left: 64.5%;
  }
  @media (max-width: 664px){
    left: 62.5%;
  }
  @media (max-width: 639px){
    left: 80%;
  }
  @media (max-width: 600px){
    left: 78%;
  }
  @media (max-width: 554px){
    left: 76%;
  }
  @media (max-width: 505px){
    left: 74.5%;
  }
  @media (max-width: 470px){
    left: 72.8%;
  }
  @media (max-width: 449px){
    left: 71.8%;
  }
  @media (max-width: 417px){
    left: 71%;
  }
  @media (max-width: 400px){
    left: 69.5%;
  }
  @media (max-width: 385px){
    left: 68.5%;
  }
  @media (max-width: 375px){
    left: 67.5%;
  }
  @media (max-width: 365px){
    left: 66.5%;
  }
  @media (max-width: 350px){
    left: 64.5%;
  }
  @media (max-width: 335px){
    left: 63.5%;
  }
`

const Img = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`
const ImgUser =styled.img``

const Wrapper = styled.div`
  padding: 20px 18px 10px 18px;
  border-top: 1px solid #E6E9EC;;
  border-bottom: 1px solid #E6E9EC;;

`

const Infowrap = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`

const Detailes = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

`

const Icon = styled.div``
Icon.SqFt = styled(SqFt)``
Icon.Garage = styled(Garage)``
Icon.Baths = styled(Baths)``
Icon.Beds = styled(Beds)``
Icon.Zoom = styled(Zoom)`
  margin-right:20px;
  cursor: pointer;
`
Icon.Like = styled(Like)`
  cursor: pointer;
`

const Footer = styled.div`
  padding: 8px 20px 8px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Oldprice = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #696969;
`
const Price =styled.div`
  display: flex;
  flex-direction: column;
`
const Section = styled.div`
  display: flex;
`

export{
  Container,
  Wrapper,
  Img,
  Infowrap,
  Detailes,
  Icon,
  Footer,
  Oldprice,
  Price,
  Section,
  Featured,
  ForSale,
  User,
  ImgUser,
}