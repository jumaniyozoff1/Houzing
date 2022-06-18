import styled from "styled-components";
import {ReactComponent as SqFt} from '../../assets/icons/SqFt.svg'
import {ReactComponent as Garage} from '../../assets/icons/Garage.svg'
import {ReactComponent as Baths} from '../../assets/icons/Baths.svg'
import {ReactComponent as Beds} from '../../assets/icons/Beds.svg'
import {ReactComponent as Zoom} from '../../assets/icons/zoom.svg'
import {ReactComponent as Like} from '../../assets/icons/like.svg'


const Container = styled.div`
  width: 350px;
  height: 430px;
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


const PositionSection =styled.div`
  width: 100%;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 999;
`

const PositionUser = styled.div`
  position: absolute;

`

PositionSection.Featured = styled.div`
  /* text-align: center; */
  width: 80px;
  height: 23px;
  background: #0061DF;
  border-radius: 3px;
  color: white;
  user-select: none;


`
PositionSection.ForSale = styled.div`
  text-align: center;
  width: 80px;
  height: 23px;
  background: #0D263B;
  border-radius: 3px;
  color: white; 
  user-select: none;
`

const Img = styled.img`
  width: 100%;
  height: 220px;
`

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

`
Icon.Like = styled(Like)``

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
  PositionSection,
  PositionUser
}