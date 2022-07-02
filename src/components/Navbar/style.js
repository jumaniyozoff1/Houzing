import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import { ReactComponent as Navlogo } from '../../assets/icons/navLogo.svg';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import { ReactComponent as NavMenu } from '../../assets/icons/navMenu.svg';
import { ReactComponent as NavUser } from '../../assets/icons/navUser.svg';


const Container = styled.div``;

const Header = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--primaryColor);
	-webkit-touch-callout: none; //IOS safari
	-webkit-user-select: none; //safari
	-khtml-user-select: none; //Konqueror HTML
	-moz-user-select: none; //firefox old version
	-ms-user-select: none; // internet explorer/ Edge
	user-select: none; //Non-prefixed version, supported by chrome,firefox and opera
`;
const Nav = styled.nav`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	.active {
		color: #00fff5;
	}
	@media (max-width:934px){
		display: none;
	}
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 0 130px;
	justify-content: space-between;
	max-width: 1440px;
	height: 64px;
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
	width: 100%;
	color: #ffffff;
	@media (max-width:934px){
		padding: 0 30px;
	}
`;
Nav.Title = styled.span`
	display: inline-block;
	font-weight: 600;
	font-size: 22px;
	color: white;
	margin-left: 10px;
`;

Nav.Link = styled(NavLink)`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	margin: 0 32px;
	line-height: 24px;
	text-decoration: none;
	color: #ffffff;
`;

const NavLogo =styled(Logo)`
	/*   */
`
const Login =styled.div`
	@media (max-width:934px){
		display: none;
	}
`
const Icon =styled.div``

Icon.NavMenu = styled(NavMenu)`
	display: none;
	@media (max-width:934px){
		display: flex;
	}
`

Icon.NavUser = styled(NavUser)`
	display: none;
	@media (max-width:934px){
		display: flex;
	}
`

export { Container, Header, Nav, Wrapper,NavLogo,Login,Icon};