import styled from "styled-components";
import { ReactComponent as Pin } from "../../assets/icons/pin.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Fb } from "../../assets/icons/fb.svg";
import { ReactComponent as Tw } from "../../assets/icons/tw.svg";
import { ReactComponent as Insta } from "../../assets/icons/insta.svg";
import { ReactComponent as  In } from "../../assets/icons/in.svg";
 
const Container = styled.footer`
    /* max-width: 1440px; */
    width: 100%;
    height: 417px;
    margin-top: 48px;
    background: #0D263B;
    @media (max-width:1044px){
        height: fit-content;
        
    }

`
const Wrapper =styled.div`
    padding: 48px 130px 48px 130px;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    @media (max-width: 1044px){
        flex-direction: column;
    }
    .sub-title{
        color: #ffffff;
        padding-bottom: 20px;
    }
    .des{
        color: #ffffff;
        height: 24px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
    .location{
        width: 250px;
    }
`

const ContactSection =styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* gap: 5px; */
`
ContactSection.item =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* gap: 5px; */
`
const DiscoverSection =styled.div`
    display: flex;
    flex-direction: column;
`

const ListSection =styled.div`
    display: flex;
    flex-direction: column;

`

const CategorySection =styled.div`
    display: flex;
    flex-direction: column;

`
const Icon =styled.div``

Icon.Pin =styled(Pin)``
Icon.Phone =styled(Phone)``
Icon.Email =styled(Email)``
Icon.Fb =styled(Fb)``
Icon.Tw =styled(Tw)``
Icon.Insta =styled(Insta)``
Icon.In =styled(In)``

export{
    Container,
    Wrapper,
    ContactSection,
    DiscoverSection,
    ListSection,
    CategorySection,
    Icon,
}