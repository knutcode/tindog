import styled from 'styled-components';

export const Header = styled.nav`
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 20px;
`;

export const NavIconWrapper = styled.div`
	width: 34px;
	height: 34px;
	cursor: pointer;
`;

export const NavIcon = styled.img`
	width: 100%;
	height: 100%;
`;

export const LogoWrapper = styled.div`
	width: 85px;
	height: 42px;
	background: linear-gradient(270deg, #fa695a 0%, #f83375 100%);
	border-radius: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export const Logo = styled.img`
	width: 22px;
	height: 20px;
	filter: brightness(100);
`;
