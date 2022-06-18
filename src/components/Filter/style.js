import styled from 'styled-components';
import { ReactComponent as Home } from '../../assets/icons/Home.svg';
import { ReactComponent as AdvancedSetting } from '../../assets/icons/Advanced.svg';
import { ReactComponent as search } from '../../assets/icons/Search.svg';

const Container = styled.div`
	display: flex;
	justify-content: center;

	/* margin: 10px 0; */
`;
const Icon = styled.div``;
Icon.HomeLogo = styled(Home)`
	margin-top: 6px;
	margin-right: 8px;
`;
Icon.Setting = styled(AdvancedSetting)`
	margin-right: 8px;
`;
Icon.Search = styled(search)`
	margin-right: 8px;
`;

const Form = styled.div`
	display: flex;
	max-width: 1440px;
	width: 100%;
	padding: 10px 130px;
`;
const Advanced = styled.div`
	width: fit-content;
	height: fit-content;
`;
Advanced.Title = styled.h2`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	text-transform: capitalize;
`;
Advanced.Input = styled.div`
	display: flex;
	justify-content: flex-start;
	margin-bottom: 20px;
`;
Advanced.Button = styled.div`
	display: flex;
	justify-content: space-between;

`
export { Container, Form, Icon, Advanced };