import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import Robots from '../../../svgs/robots.svg';
import BoxButton from './BoxButton';
import BoxComp from './BoxComp';

const Box1 = () => {
	return (
		<BoxComp>
			<Box>
				<Robots />
			</Box>
			<Box ml="wxxl">
				<Box>
					<Text as="h3" fontWeight="bold" textAlign="left" color="primary-green">
						Warriors
					</Text>
				</Box>
				<Box>
					<Text as="b2" fontWeight="thin">
						Warriors is a generation-based NFT Project, with each warrior being unique and accompanied by a
						story.
					</Text>
				</Box>
				<Box row>
					<BoxButton bg="rgba(4, 255, 164, 0.5)" text="Learn More" />
					<BoxButton bg="rgba(196, 196, 196, 0.1)" text="Launch app" />
				</Box>
			</Box>
		</BoxComp>
	);
};

export default Box1;
