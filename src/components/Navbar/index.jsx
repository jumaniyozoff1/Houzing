import React from 'react';
import { Container, Header, Nav, Wrapper } from './style';
import { navbar } from '../../utils/navbar';
import {Outlet, useNavigate } from 'react-router-dom';
import  Button  from '../Generic/Button';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<Container className='navbar'>
			<Header>
				<Wrapper>
					<Logo style={{cursor: 'pointer'}} onClick={() => navigate('/home')}/>		
					<Nav>
						{navbar.map(({ title, path, id }) => {
							return (
								<Nav.Link key={id} to={path}>
									{title}
								</Nav.Link>
							);
						})}
					</Nav>
					<Button width="120px">Login</Button>
				</Wrapper>
			</Header>
			<main>
				<Outlet />
			</main>
		</Container>
	);
};

export default Navbar;