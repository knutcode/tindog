import { TindogBackground, TindogCardContainer, TindogCardTextWrapper } from '../tindog-card/styles';

const TindogPlaceholder = (props) => {
	return (
		<>
			<TindogCardContainer>
				<TindogBackground src="https://media.istockphoto.com/photos/opened-wooden-door-to-modern-home-exterior-as-background-picture-id692718260?k=20&m=692718260&s=612x612&w=0&h=d4wJFCR_CGfHpzWhWJEm3wO_bOV_IHrqs9Z05vR3veg=" />
				<TindogCardTextWrapper>
					<h2>{props.msg}</h2>
				</TindogCardTextWrapper>
			</TindogCardContainer>
		</>
	);
};

export default TindogPlaceholder;
