import React from 'react';
import { Container, Header, Nav, Wrapper,NavLogo, Login,Icon } from './style';
import { navbar } from '../../utils/navbar';
import {Outlet, useNavigate,useLocation } from 'react-router-dom';
import  Button  from '../Generic/Button';

const Navbar = () => {
	const navigate = useNavigate();
	const Locatin =useLocation()
	return (
		<Container className='navbar'>
			<Header>
				<Wrapper>
					<Icon.NavMenu/>
					<NavLogo style={{cursor: 'pointer'}} onClick={() => navigate('/home')}/>		
					<Nav>
						{navbar.map(({ title, path, id,hidden }) => {
							return !hidden &&(
								<Nav.Link key={id} to={path}>
									{title}
								</Nav.Link>
							);
						})}
					</Nav>
					<Icon.NavUser/>
					<Login>
						{
							Locatin.pathname !== '/signin' && <Button className='loginButton' width="120px" onClick={()=> navigate('./signin')}>Login</Button>
						}
					</Login>
					
				</Wrapper>
			</Header>
			<main>
				<Outlet />
			</main>
		</Container>
	);
};

export default Navbar;