import React from 'react'
import { Card, Container, Icons, Wrapper } from './style'

const ChooseInfo = () => {
  return (
    <Container>
        <h1  className='title margin-top'>Why Choose Us?</h1>
        <p className='description nonedec'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
        <p className='description dec'>112 Glenwood Ave Hyde Park, Boston, MA</p>
      <Wrapper>
        <Card>
          <Icons.Discord/>
          <h2 className='sub-title'>Trusted By Thousands</h2>
          <p className='small-description description'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
        </Card>
        <Card>
          <Icons.House/>
          <h2 className='sub-title'>Wide Renge Of Properties</h2>
          <p className='small-description description'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
        </Card>
        <Card>
          <Icons.Calculator/>
          <h2 className='sub-title'>Financing Made Easy</h2>
          <p className='small-description description'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
        </Card>
        <Card>
          <Icons.Map/>
          <h2 className='sub-title'>See Neighborhoods</h2>
          <p className='small-description description'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
        </Card>
      </Wrapper>
    </Container>
  )
}

export default ChooseInfo