import React from 'react'
import { Container,Img,Title } from './style'
import HomePhoto from '../../../assets/img/hometwo.png'
import Button from '../../../components/Generic/Button'


const FarmHouse = ()=>{
    return(
        <Container>
            <Title>
                <h1 className="title">Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home</h1>
                <Button type={'primary'} width={'180px'}>Read more</Button>
            </Title>
            <Img src={HomePhoto}/>
        </Container>
    )
}
export default FarmHouse