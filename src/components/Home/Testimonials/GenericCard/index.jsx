import React from 'react'
import { Container, Card, AboutUser, Img, UserPhoto } from './style'
import User from '../../../../assets/img/AboutUser.png'
const GenericCard = () => {
  return (
    <Container>
      <Card>
        <p className='description'>“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “</p>
      </Card>
      <AboutUser>
        <UserPhoto>
          <Img src={User}/>
        </UserPhoto>
        <h2 className='sub-title'>Marvin McKinney</h2>
        <p className='description'>Designer</p>
      </AboutUser>
    </Container>
  )
}

export default GenericCard