import { Btns } from './buttons';
import { dogs } from '../../data/dog';
import TindogCard from './tindog-card';
import { useState } from 'react';
import TindogPlaceholder from './tindog-placeholder';

const Main = () => {
	const [count, setCount] = useState(0);
	const [liked, setLiked] = useState(false);
	const [noped, setNoped] = useState(false);

	const swipedRight = () => {
		if (count < dog.length) {
			setLiked(true);
			console.log('Like!');
			setTimeout(function () {
				setLiked(false);
				getNewDog();
			}, 2000);
		}
	};

	const swipedLeft = () => {
		if (count < dog.length) {
			setNoped(true);
			console.log('Nope!');
			setTimeout(function () {
				setNoped(false);
				getNewDog();
			}, 2000);
		}
	};

	const getNewDog = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const dog = dogs.map((item) => {
		return (
			<TindogCard
				key={item.id}
				name={item.name}
				age={item.age}
				bio={item.bio}
				avatar={item.avatar}
				alt={item.alt}
				liked={liked}
				noped={noped}
			/>
		);
	});
	return (
		<>
			{count < dog.length ? dog[count] : <TindogPlaceholder msg={'No more dogs in your area! :('} />}
			<Btns
				swipedRight={swipedRight}
				swipedLeft={swipedLeft}
			/>
		</>
	);
};

export default Main;
