import React,{useState} from 'react';
import { Container, Form, Icon, Advanced, Focus } from './style';
import  Button  from '../Generic/Button';
import  Input from '../Generic/Input';
import { Popover } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import useSearch from '../Hooks/useSearch'
// import UseReplace from '../Hooks/useReplace'
const Filter = () => {
	const {pathname} = useLocation()
	const navigate = useNavigate()
    const query = useSearch()
	const [visible, setVisible] = useState(false);

	const change =({target})=>{
		const {value,name} =target
		navigate(`${pathname}?${name}=${value}`)
	}

	const hide = () => {
		setVisible(false);
	};

	const handleVisibleChange = (newVisible) => {
		setVisible(newVisible);
	};

	const advancedSearch = ( 
		<Advanced>
			<Advanced.Title>address</Advanced.Title>
			<Advanced.Input>
				<Input onChange={change} name='country' defaultValue={query.get('country')} width={'200px'} mr={20} placeholder={'Country'} />
				<Input onChange={change} name='region' defaultValue={query.get('region')} width={'200px'} mr={20} placeholder={'Region'} />
				<Input onChange={change} name='city' defaultValue={query.get('city')} width={'200px'} mr={20} placeholder={'City'} />
				<Input width={'200px'} placeholder={'Zip Code'} />
			</Advanced.Input>
			<Advanced.Title>apartment info</Advanced.Title>
			<Advanced.Input>
				<Input width="200px" mr={20} placeholder={'Rooms'} />
				<Input width="200px" mr={20} placeholder={'Size'} />
				<Input width="200px" placeholder={'Sort'} />
			</Advanced.Input>
			<Advanced.Title>price</Advanced.Title>
			<Advanced.Input>
				<Input width="200px" mr={20} placeholder={'Min price'} />
				<Input width="200px" placeholder={'Max price'} />
			</Advanced.Input>
			<Advanced.Button>
				<span></span>
				<Button onClick={hide} mr={'15'} width='128px' type='secondary'>Cancel</Button>
				<Button width='128px' type='primary'>Submit</Button>
			</Advanced.Button>
		</Advanced>
	);
	return (
		<Container>
			<Form>
				<Input
					placeholder={'Enter an address, neighborhood, city, or ZIP code'}
					pl={'42px'}
				>
					<Icon.HomeLogo />
				</Input>
				<Popover
					placement="bottomRight"
					content={advancedSearch}
					trigger={'click'}
					visible={visible}
					onVisibleChange={handleVisibleChange}
				>
					<Button ml={20} mr={20} width="160px" type={'secondary'}>
						<Icon.Setting /> Advanced
					</Button>
				</Popover>
				<Button width="190px" type={'primary'}>
					<Icon.Search /> Search
				</Button>
			</Form>
		</Container>
	);
};

export default Filter;