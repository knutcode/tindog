import {
	TindogBackground,
	TindogBio,
	TindogCardContainer,
	TindogInfo,
	TindogCardTextWrapper,
	TindogLiked,
	TindogNoped,
} from './styles';
import liked from '../../../img/like-image.png';
import noped from '../../../img/nope-image.png';

const TindogCard = (props) => {
	return (
		<>
			<TindogCardContainer>
				<TindogBackground src={props.avatar} />
				{props.liked && <TindogLiked src={liked} />}
				{props.noped && <TindogNoped src={noped} />}
				<TindogCardTextWrapper>
					<TindogInfo>
						{props.name}, {props.age}
					</TindogInfo>
					<TindogBio>{props.bio}</TindogBio>
				</TindogCardTextWrapper>
			</TindogCardContainer>
		</>
	);
};

export default TindogCard;
