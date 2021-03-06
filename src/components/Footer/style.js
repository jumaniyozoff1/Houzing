import styled from "styled-components";
import { ReactComponent as Pin } from "../../assets/icons/pin.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Fb } from "../../assets/icons/fb.svg";
import { ReactComponent as Tw } from "../../assets/icons/tw.svg";
import { ReactComponent as Insta } from "../../assets/icons/insta.svg";
import { ReactComponent as  In } from "../../assets/icons/in.svg";
import { ReactComponent as  NavLogo } from "../../assets/icons/Logo.svg";
import { ReactComponent as  BottomIcon } from "../../assets/icons/bottomIcon.svg";
 
const Container = styled.footer`
    width: 100%;
    height: 450px;
    margin-top: 38px;
    background: #0D263B;
    @media (max-width:1152px){
        height: fit-content;
    }

`
const Wrapper =styled.div`
    padding: 48px 130px 48px 130px;
    display: flex;
    align-items: stretch;
    justify-content: space-between; 
    @media (max-width:1152px){
        padding: 30px 30px;
        flex-direction: column;
        gap: 10px;
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
    .leftbottom{
        display: flex;
        align-items: stretch;
        justify-content: space-around;
        flex: 1;
        @media (max-width: 875px){
            flex-direction: column;
            gap: 20px;
        }
    }
    .rightbottom{
        display: flex;
        align-items: stretch;
        justify-content: space-around;
        flex: 1;
        @media (max-width: 875px){
            flex-direction: column;
            gap: 20px;
        }
    }
`

const ContactSection =styled.div`
    display: flex;
    flex-direction: column;
    .phoneNumber{
        margin-top: 20px;
    }
`
ContactSection.item =styled.div`
    display: flex;
    gap: 21px;
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

Icon.Pin =styled(Pin)`
    position: relative;
    top: 10px;
`
Icon.Phone =styled(Phone)``
Icon.Email =styled(Email)`
    position: relative;
    top: 2px;
`
Icon.Fb =styled(Fb)`
 cursor: pointer;
`
Icon.Tw =styled(Tw)`
 cursor: pointer;
`
Icon.Insta =styled(Insta)`
 cursor: pointer;
`
Icon.In =styled(In)`
 cursor: pointer;
`
Icon.NavLogo=styled(NavLogo)``
Icon.BottomIcon =styled(BottomIcon)`
   
`

const FooterBottom =styled.div`
    padding: 13px 130px 0 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    @media (max-width: 875px){
        padding: 40px 30px;
        flex-direction: column;
        gap: 10px;
    }
    p{
        color: #ffffff;
        @media (max-width:588px){
            width: 234px;
        }
    }
    div{
        display: flex;
        align-items: center;
    }
    span{
        position: relative;
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 50px;
        width: 35px;
        height: 35px;
        background: #0061DF;
        border-radius: 3px;
    }
    .iconbottom{
        @media (max-width:400px){
        position: relative;
        right: 20px;
        }
    }
`
export{
    Container,
    Wrapper,
    ContactSection,
    DiscoverSection,
    ListSection,
    CategorySection,
    Icon,
    FooterBottom,
}