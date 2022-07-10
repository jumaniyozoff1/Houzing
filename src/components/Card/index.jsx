import React from 'react'
import { Container, Img, ImgUser, Wrapper, Infowrap, Detailes, Icon, Footer, Price, Section, Oldprice, Featured,ForSale,User} from './style'
import  NotImage from '../../assets/img/notAvailbale.jpg'
import  NotUser from '../../assets/img/user.png'

const Card = ({info}) => {
  return (
    <Container>
      <div className='pos'>
        <Featured>FEATURED</Featured>
        <ForSale>FOR SALE</ForSale>
      </div>
      <User><ImgUser src={info?.notuser || NotUser}/></User>
      <Img src={info?.attachments[0]?.imgPath || NotImage}/>
      <Wrapper>
        <h2 className='sub-title'>{info?.address || 'New Apartment Nice Wiew'}</h2>
        <p className='samll-descrition'>{info?.city || 'Quincy St, Brooklyn, NY, USA'}</p>
        <Infowrap>
          <Detailes>
            <Icon.Beds/>
            <p className='small-description'>{info?.houseDetails.room || '0'} Beds</p>
          </Detailes>
          <Detailes>
            <Icon.Baths/>
            <p className='small-description'>{info?.houseDetails.bath || '0'} Baths</p>
          </Detailes>
          <Detailes>
            <Icon.Garage/>
            <p className='small-description'>{info?.houseDetails.garage || '0'} Garage</p>
            </Detailes>
            <Detailes>
              <Icon.SqFt/>
              <p className='small-description'>{info?.houseDetails.area || '0'} Sq Ft</p>
            </Detailes>
          </Infowrap>
        </Wrapper>
        <Footer>
        <Price>
          <Oldprice>{info?.oldprice || '$2,800/mo'}</Oldprice>
          <span className='sub-title'>{info?.price || '$7,500/mo'}</span>
        </Price>
        <Section>
          <Icon.Zoom/>
          <Icon.Like/>
        </Section>
      </Footer>
    </Container>


  )
}

export default Card