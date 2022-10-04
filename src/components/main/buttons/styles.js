import styled from 'styled-components';

export const BtnContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 25px;
	padding: 20px;
`;

export const LikeBtn = styled.button`
	background: #fff;
	height: 90px;
	width: 90px;
	border-radius: 50%;
	box-shadow: 0px 10px 20px #e9e9ea;
	border-style: none;
	cursor: pointer;
	&:hover,
	:active {
		background: #dbfff4;
		box-shadow: 0px 10px 20px #ccf1e6;
	}
`;

export const NopeBtn = styled.button`
	background: #fff;
	height: 90px;
	width: 90px;
	border-radius: 50%;
	box-shadow: 0px 10px 20px #e9e9ea;
	border-style: none;
	cursor: pointer;
	&:hover,
	:active {
		background: #ffe7ef;
		box-shadow: 0px 10px 20px #edd9df;
	}
`;

export const BtnIcon = styled.img`
	height: 35px;
	width: auto;
	display: inline-block;
	margin: 0;
	padding: 0;
`;
