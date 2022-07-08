import React,{useState} from 'react';
import { Container, Header, Nav, Wrapper,NavLogo, Login,Icon } from './style';
import { navbar } from '../../utils/navbar';
import {Outlet, useNavigate,useLocation } from 'react-router-dom';
import  Button  from '../Generic/Button';
import {Popover} from 'antd'

const Navbar = () => {
	const navigate = useNavigate();
	const Locatin =useLocation()
	const [Count,setCount] =useState(true)
	let user =localStorage.getItem('token')
	function logOut (){
		localStorage.clear()
		navigate('/signin')
	}
	const [visible, setVisible] = useState(false);

	const hide = () => {
	  setVisible(false);
	};
	const handleVisibleChange = (newVisible) => {
		setVisible(newVisible);
	  };
	return (
		<Container className='navbar'>
			<Header>
				<Wrapper>
					<Icon.NavMenu />
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
					<Popover
						content={
						// <a onClick={hide}>Close</a>,
						<Button width={'150px'} type={'primary'} onClick={logOut}>log out</Button>
						}
						// title="Title"
						trigger="click"
						visible={visible}
						onVisibleChange={handleVisibleChange}
					  	>
							<Icon.NavUser/>
					  	</Popover>
					{
						user ?
						<Popover
						content={
						// <a onClick={hide}>Close</a>,
						<Button width={'150px'} type={'primary'} onClick={logOut}>log out</Button>
						}
						// title="Title"
						trigger="click"
						visible={visible}
						onVisibleChange={handleVisibleChange}
					  	>
							<Icon.NavUserBig/>
					  	</Popover>
						
						:
						<Login>
						{
							Locatin.pathname !== '/signin' && <Button className='loginButton' width="120px" onClick={()=> navigate('./signin')}>Login</Button>
						}
						</Login>
						
					}  
						
					
						
				</Wrapper>
			</Header>
			<main>
				<Outlet />
			</main>
		</Container>
	);
};

export default Navbar;