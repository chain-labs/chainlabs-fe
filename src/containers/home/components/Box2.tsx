import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import Vaccine from '../../../svgs/vaccine.svg';
import BoxButton from './BoxButton';
import BoxComp from './BoxComp';

const Box2 = () => {
	return (
		<BoxComp>
			<Box>
				<Vaccine />
			</Box>
			<Box ml="wxxl">
				<Box>
					<Text as="h3" fontWeight="bold" textAlign="left" color="primary-green">
						IPVC
					</Text>
				</Box>
				<Box>
					<Text as="b2" fontWeight="thin">
						Inter-planetary vaccine certificate is a secure health-data interoperability layer for already
						existing vaccine platforms.
					</Text>
				</Box>
				<BoxButton bg="rgba(4, 255, 164, 0.5)" text="Learn More" />
			</Box>
		</BoxComp>
	);
};

export default Box2;
