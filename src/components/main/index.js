import { Btns } from './buttons';
import { dogs } from '../../data/dog';
import TindogCard from './tindog-card';
import { useState } from 'react';
import TindogPlaceholder from './tindog-placeholder';

const Main = () => {
	const [count, setCount] = useState(0);
	const [liked, setLiked] = useState(false);
	const [noped, setNoped] = useState(false);

	const swiped = (action, bool) => {
		if (count < dog.length) {
			action(true);
			setTimeout(function () {
				action(false);
				getNewDog();
			}, 2000);
		}
	};

	const swipedRight = () => {
		swiped(setLiked);
	};

	const swipedLeft = () => {
		swiped(setNoped);
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
