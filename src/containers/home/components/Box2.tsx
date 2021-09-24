import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import Vaccine from '../../../svgs/vaccine.svg';

const Box2 = () => {
	return (
		<Box
			row
			alignItems="center"
			mt="wl"
			borderRadius="2.4rem"
			bg="rgba(196, 196, 196, 0.072)"
			color="white"
			border="0.1rem solid white"
			p="ml"
		>
			<Box>
				<Vaccine />
			</Box>
			<Box ml="wxl">
				<Box>
					<Text as="h3" textAlign="left" color="primary-green">
						IPVC
					</Text>
				</Box>
				<Box mr="">
					<Text as="b2">
						Inter-planetary vaccine certificate is a secure health-data interoperability layer for already
						existing vaccine platforms.
					</Text>
				</Box>
				<Box row mt="ml">
					<Box as="button" bg="rgba(4, 255, 164, 0.5)" borderRadius="0.8rem" px="wm" py="ms" mr="mxxs">
						<Text as="links" color="primary-white">
							Learn More
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Box2;
