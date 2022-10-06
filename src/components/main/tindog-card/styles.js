import styled from 'styled-components';

export const TindogCardContainer = styled.div`
	position: relative;
	padding-inline: 8px;
`;

export const TindogBackgroundWrapper = styled.div``;

export const TindogBackground = styled.img`
	width: 100%;
	height: 75vh;
	border-radius: 15px;
	object-fit: cover;
	display: inline-block;
`;

export const TindogCardTextWrapper = styled.div`
	position: absolute;
	bottom: 20px;
	left: 0;
	padding-inline: 25px;
`;

export const TindogInfo = styled.h2`
	color: #f8f8f8;
	font-weight: 600;
	font-size: 32px;
	margin: 0;
`;

export const TindogBio = styled.p`
	color: #b7b7b7;
	font-weight: 400;
	font-size: 24px;
	margin: 0;
`;

export const TindogLiked = styled.img`
	width: 250px;
	position: absolute;
	padding: 20px;
	top: 0;
	right: 0;
`;

export const TindogNoped = styled.img`
	width: 250px;
	position: absolute;
	padding: 20px;
	top: 0;
	left: 0;
`;
