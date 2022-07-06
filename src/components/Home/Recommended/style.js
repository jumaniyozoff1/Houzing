import styled from "styled-components";

const Container =styled.div`
    padding: 96px 0px 96px;
    padding: 96px 50px;
    .swiper-slide{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .siwper{
        padding: 0px 0px 65px 0px;
		display: flex;
		overflow: visible;
		position: relative;
    }
    .swiper-wrapper {
		align-items: stretch;
	}
    .swiper-button-prev,
	.swiper-button-next {
		padding: 0;
		width: 45px;
		height: 45px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.2);
		transition: all 0.2s ease 0s;
		padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background: #ffffff;
		border: 1px solid #e6e9ec;
		box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
		z-index: 11;
		&:hover {
			box-shadow: 0px 0px 0px 5px rgba(181, 178, 178, 0.2);
		}
		&:active {
			transform: translate(-5px, 0);
		}
		&::after {
			transform: translate(-1px, 0);
			font-size: 16px;
			font-weight: 700;
			color: #000;
			opacity: 1;
		}
	}
    .swiper-button-prev {
        @media (max-width: 1090px) {
            position: relative;
            top: 100%;
            
        }
	}
    .swiper-button-next {
		
	}
    .swiper-pagination{
        position: relative;
        top: 150%;
        z-index: 999;
    }
   
 
    
  
`

    


export{
    Container,
}