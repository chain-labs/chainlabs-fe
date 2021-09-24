import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';

const TopDetail = () => {
	return (
		<Box display="flex" color="primary-white">
			<Box mt="20rem">
				<Text as="h1" mr="37rem" lineHeight="h2">
					Building
				</Text>
				<Box display="flex" mt="mxs">
					<Text as="h1" color="accent-green" lineHeight="h2" mr="ml">
						decentralized
					</Text>
					<Text as="h1" lineHeight="h2">
						apps
					</Text>
				</Box>
				<Box display="flex" mt="mxs">
					<Text as="h1" lineHeight="h2" mr="ml">
						for the
					</Text>
					<Text as="h1" lineHeight="h2" color="accent-green">
						decentralized
					</Text>
				</Box>
				<Text as="h1" lineHeight="h2" mr="37rem" mt="mxs">
					World
				</Text>
				<Box mr="50rem" mt="mxl">
					<Text as="b2">
						A laboratory empowering the consumers by building truly transparent and decentralized products.
					</Text>
				</Box>
				<Box mt="ml">
					<Text as="links" mr="51rem" color="primary-green">
						Sign up for our weekly newsletter for the latest updates about our products.
					</Text>
				</Box>
				<label>
					<input type="text" name="name" />
				</label>
				<input type="submit" value="Submit" />
			</Box>
		</Box>
	);
};

export default TopDetail;
