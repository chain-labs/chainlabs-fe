import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import Robots from '../../../svgs/robots.svg';

const Box1 = () => {
	return (
		<Box
			row
			// justifyContent="center"
			alignItems="center"
			mt="wl"
			borderRadius="24px"
			// boxShadow="inset 69.2667px -69.2667px 69.2667px rgba(149, 149, 149, 0.072), inset -69.2667px 69.2667px 69.2667px rgba(255, 255, 255, 0.072)"
			bg="rgba(196, 196, 196, 0.072)"
			color="white"
			border="1px solid white"
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
				<Box mr="">
					<Text as="b2" lineHeight="b2" fontWeight="regular">
						Warriors is a generation-based NFT Project, with each warrior being unique and accompanied by a
						story.
					</Text>
				</Box>
				<Box row mt="ml">
					<Box as="button" bg="rgba(4, 255, 164, 0.5)" borderRadius="8px" px="wm" py="ms" mr="mxxs">
						<Text as="links">Learn More</Text>
					</Box>
					<Box
						as="button"
						borderRadius="8px"
						px="wm"
						py="ms"
						bg="rgba(196, 196, 196, 0.1)"
						css={`
							backdrop-filter: blur(16px);
						`}
					>
						<Text as="links">Launch app</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Box1;
