import React from 'react'
import {CategorySection, ContactSection, Container, DiscoverSection, Icon, ListSection, Wrapper } from './style'


const Footer = () =>{
    return(
        <Container>
            <Wrapper>
                <ContactSection>
                    <h2 className='sub-title'>Contact Us</h2>
                    <ContactSection.item>
                        <Icon.Pin/>
                        <p className='des location'>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                    </ContactSection.item>
                    <ContactSection.item>
                        <Icon.Phone/>
                        <p className='des'>+998 33 420 70 71</p>
                    </ContactSection.item>
                    <ContactSection.item>
                        <Icon.Email/>
                        <p className='des'>support@houzing.com</p>
                    </ContactSection.item>
                    <ContactSection.item>
                        <Icon.Fb/>
                        <Icon.Tw/>
                        <Icon.Insta/>
                        <Icon.In/>
                    </ContactSection.item>
                </ContactSection>
                <DiscoverSection>
                    <h2 className='sub-title'>Discover</h2>
                    <p className='des'>Chicago</p>
                    <p className='des'>Los Angeles</p>
                    <p className='des'>Miami</p>
                    <p className='des'>New York</p>
                </DiscoverSection>
                <ListSection>
                    <h2 className='sub-title'>Lists by Category</h2>
                    <p className='des'>Apartments</p>
                    <p className='des'>Condos</p>
                    <p className='des'>Houses</p>
                    <p className='des'>Offices</p>
                    <p className='des'>Retail</p>
                    <p className='des'>Villas</p>
                </ListSection>
                <CategorySection>
                    <h2 className='sub-title'>Lists by Category</h2>
                    <p className='des'>About Us</p>
                    <p className='des'>Terms & Conditions</p>
                    <p className='des'>Support Center</p>
                    <p className='des'>Contact Us</p>
                </CategorySection>
            </Wrapper>
        </Container>
    )
}
export default Footer 