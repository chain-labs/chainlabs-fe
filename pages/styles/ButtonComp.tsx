import React from 'react';
import Box from 'src/components/Box';
import Button from 'src/containers/home/components/Button';

const ButtonComp = () => {
	return (
		<Box>
			<Button width="342px" height="40px" text="Launch App"></Button>
			<Button width="201px" height="56px" text="Get in touch"></Button>
			<Button width="143px" height="48px" text="Send Message"></Button>
			<Button width="122px" height="36px" text="Learn more"></Button>
		</Box>
	);
};

export default ButtonComp;
