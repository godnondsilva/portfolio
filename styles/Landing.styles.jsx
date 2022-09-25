import styled from 'styled-components';

export const LandingContainer = styled.div`
	padding-left: 15%;
	height: 100vh;
	width: 40%;
	display: flex;
	justify-content: center;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		width: 70%;
	}
`;

export const Subtitle = styled.div`
	font-size: 1rem;
	color: #999;
`;

export const Title = styled.div`
	font-size: 3rem;
	font-weight: 600;
	padding-bottom: 0.5rem;
`;

export const Description = styled.div`
	font-size: 1.4rem;
	font-weight: 300;
	padding-bottom: 1rem;
	color: #bbb;
`;

export const Anchor = styled.a``;

export const Flex = styled.div`
	display: flex;
	gap: 10px;
`;

export const BottomCaret = styled.div`
	position: absolute;
	bottom: 50px;
	right: 50%;
	transform: translateX(50%);
`;
