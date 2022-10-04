import { Header, Logo, LogoWrapper, NavIcon, NavIconWrapper } from './styles';
import profile from '../../img/profile-icon.png';
import logo from '../../img/paw-icon.png';
import chat from '../../img/chat-icon.png';

const Nav = () => {
	return (
		<Header>
			<NavIconWrapper>
				<NavIcon
					src={profile}
					alt="profile"
				/>
			</NavIconWrapper>
			<LogoWrapper>
				<Logo
					src={logo}
					alt="logo"
				/>
			</LogoWrapper>
			<NavIconWrapper>
				<NavIcon
					src={chat}
					alt="chat"
				/>
			</NavIconWrapper>
		</Header>
	);
};

export default Nav;
