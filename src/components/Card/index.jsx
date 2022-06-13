import React from 'react'
import { Test, Container, Img, Wrapper, Infowrap, Detailes, Icon, Footer, Price, Section, Oldprice, PositionSection} from './style'
import  NotImage from '../../assets/img/notAvailbale.jpg'

const Card = ({info}) => {
  return (
    <Test>
    <Container>
      <PositionSection>
        <PositionSection.Featured>FEATURED</PositionSection.Featured>
        <PositionSection.ForSale>FOR SALE</PositionSection.ForSale>
      </PositionSection>
      <Img src={NotImage}/>
      <Wrapper>
        <h2 className='sub-title'>{info ?.title || 'New Apartment Nice Wiew' }</h2>
        <p className='samll-descrition'>{info?.smalldescription || 'Quincy St, Brooklyn, NY, USA'}</p>
        <Infowrap>
          <Detailes>
            <Icon.Beds/>
            <p className='small-description'>{info?.beds || '0'} Beds</p>
          </Detailes>
          <Detailes>
            <Icon.Baths/>
            <p className='small-description'>{info?.beds || '0'} Baths</p>
          </Detailes>
          <Detailes>
            <Icon.Garage/>
            <p className='small-description'>{info?.beds || '0'} Garage</p>
          </Detailes>
          <Detailes>
            <Icon.SqFt/>
            <p className='small-description'>{info?.beds || '0'} Sq Ft</p>
          </Detailes>
        </Infowrap>
      </Wrapper>
      <Footer>
        <Price>
          <Oldprice>{info ?.oldprice || '$2,800/mo'}</Oldprice>
          <span className='sub-title'>{info ?.newprice || '$7,500/mo'}</span>
        </Price>
        <Section>
          <Icon.Zoom/>
          <Icon.Like/>
        </Section>
      </Footer>
    </Container>

    </Test>
  )
}

export default Card