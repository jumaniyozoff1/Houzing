import React from 'react'
import { Wrapper,Text, Inputs, Buttons } from './style'
import Input from '../../../Generic/Input'
import Button from '../../../Generic/Button'

const Advanced = () =>{
    return(
        <Wrapper>
            <Wrapper.item>
                <Text>Address</Text>
                <Inputs>
                    <Input widht='200px' placeholder="Country"/>
                    <Input widht='200px' placeholder="Region"/>
                    <Input widht='200px' placeholder="City"/>
                    <Input widht='200px' placeholder="Zip code"/>
                </Inputs>
            </Wrapper.item>
            <Wrapper.item>
                <Text>Apartment info</Text>
                <Inputs>
                    <Input widht='200px' placeholder="Rooms"/>
                    <Input widht='200px' placeholder="Size"/>
                    <Input widht='200px' placeholder="Sort"/>
                </Inputs>
            </Wrapper.item>
            <Wrapper.item>
                <Text>Price</Text>
                <Inputs>
                    <Input widht='200px' placeholder="Min price"/>
                    <Input widht='200px' placeholder="Max price"/>
                </Inputs>
            </Wrapper.item>
            <Buttons>
                <span></span>
                <Button width='128px' type='primary'>Submit</Button>
            </Buttons>
        </Wrapper>
    )
}
export default Advanced