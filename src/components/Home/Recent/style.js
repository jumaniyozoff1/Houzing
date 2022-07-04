import styled from "styled-components";
import AliceCarousel from 'react-alice-carousel';
import { ReactComponent as LeftArrow} from '../../../assets/icons/Left.svg'
import { ReactComponent as RightArrow} from '../../../assets/icons/Right.svg'


const Container = styled.div`
    margin-top:  96px;
    width: 100%;
`;
const Wrapper = styled.div`
	margin: 32px 0px;
    width: 100%;
    position: relative;
    height: fit-content;
    .alice-carousel{
        padding: 0 50px;
    }
	.alice-carousel__stage-item{
        /* border:1px solid red;     */
        padding: 0 33px;
        @media (max-width:1390px){
            padding: 0 30px;
        }
	}
`
const Carousel = styled(AliceCarousel)`
`;
const Icon = styled.div``;
Icon.Left = styled(LeftArrow)`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 47%;
	left: -30px;
	transform: translate(100%, -50%);
	width: 45px;
	height: 45px;
	padding: 12px;
	color: white;
	background: white;
	padding: 12px;
	opacity: 0.5;
	border-radius: 50%;
	z-index: 999;
	cursor: pointer;
    border: 1px solid #E6E9EC;
    -webkit-box-shadow: 0px 0px 11px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 11px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 11px 2px rgba(34, 60, 80, 0.2);
	:hover {
		opacity: 0.77;
	}
	& path {
		fill: #0d263b;
	}
`;
Icon.Right = styled(RightArrow)`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 46%;
	right: -30px;
	transform: translate(-100%, -40%);
	width: 45px;
	height: 45px;
	padding: 12px;
	color: white;
	background: white;
	padding: 12px;
	opacity: 0.5;
	border-radius: 50%;
	z-index: 999;
	cursor: pointer;
    -webkit-box-shadow: 0px 0px 11px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 11px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 11px 2px rgba(34, 60, 80, 0.2);
    border: 1px solid #E6E9EC;
	:hover {
		opacity: 0.97;
	}
	& path {
		fill: #0d263b;
	}
`;

export {Container,Carousel,Wrapper,Icon}