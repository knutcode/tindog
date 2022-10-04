import { NopeBtn, LikeBtn, BtnIcon, BtnContainer } from './styles';
import cross from '../../../img/nope-icon.png';
import heart from '../../../img/like-icon.png';
import { useState } from 'react';

export const Btns = ({ swipedRight, swipedLeft }) => {
	const [disable, setDisable] = useState(false);

	const liked = () => {
		if (disable === false) {
			setDisable(true);
			swipedRight();
			setTimeout(function () {
				setDisable(false);
			}, 2000);
		} else return;
	};

	const noped = () => {
		if (disable === false) {
			setDisable(true);
			swipedLeft();
			setTimeout(function () {
				setDisable(false);
			}, 2000);
		} else return;
	};

	return (
		<BtnContainer>
			<NopeBtn
				onClick={noped}
				disabled={disable}
			>
				<BtnIcon
					src={cross}
					alt="cross"
				/>
			</NopeBtn>
			<LikeBtn
				onClick={liked}
				disabled={disable}
			>
				<BtnIcon
					src={heart}
					alt="cross"
				/>
			</LikeBtn>
		</BtnContainer>
	);
};
