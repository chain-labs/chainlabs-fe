import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import Robots from '../../../svgs/robots.svg';

const Box1 = () => {
	return (
		<Box
			row
			alignItems="center"
			mt="wl"
			borderRadius="2.4rem"
			bg="rgba(196, 196, 196, 0.072)"
			color="primary-white"
			border="0.1rem solid white"
			p="ml"
		>
			<Box>
				<Robots />
			</Box>
			<Box ml="wxl">
				<Box>
					<Text as="h3" textAlign="left" color="primary-green">
						Warriors
					</Text>
				</Box>
				<Box>
					<Text as="b2">
						Warriors is a generation-based NFT Project, with each warrior being unique and accompanied by a
						story.
					</Text>
				</Box>
				<Box row mt="ml">
					<Box as="button" bg="rgba(4, 255, 164, 0.5)" borderRadius="0.8rem" px="wm" py="ms" mr="mxxs">
						<Text as="links" color="primary-white">
							Learn More
						</Text>
					</Box>
					<Box
						as="button"
						borderRadius="0.8rem"
						px="wm"
						py="ms"
						bg="rgba(196, 196, 196, 0.1)"
					>
						<Text as="links" color="primary-white">
							Launch app
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Box1;
