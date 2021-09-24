import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';

const TopDetail = () => {
	return (
		<Box display="flex">
			<Box fontSize="72px" mt="wxxs">
				<Text fontSize="inherit" mr="370px" lineHeight="h2">
					Building
				</Text>
				<Box display="flex" fontSize="72px" mt="mxs">
					<Text fontSize="inherit" color="accent-green" lineHeight="h2" mr="ml">
						decentralized
					</Text>
					<Text fontSize="inherit" lineHeight="h2">
						apps
					</Text>
				</Box>
				<Box display="flex" fontSize="72px" mt="mxs">
					<Text fontSize="inherit" lineHeight="h2" mr="ml">
						for the
					</Text>
					<Text fontSize="inherit" color="accent-green" lineHeight="h2">
						decentralized
					</Text>
				</Box>
				<Text fontSize="inherit" mr="370px" lineHeight="h2" mt="mxs">
					World
				</Text>
				<Text fontSize="24px" mr="450px" mt="mxl" lineHeight="h1" fontWeight="regular" fontStyle="normal">
					A laboratory empowering the consumers by building truly transparent and decentralized products.
				</Text>
				<Text
					fontSize="20px"
					mr="510px"
					mt="ml"
					lineHeight="h1"
					color="primary-green"
					fontWeight="regular"
					fontStyle="normal"
				>
					Sign up for our weekly newsletter for the latest updates about our products.
				</Text>
				<label>
					<input type="text" name="name" />
				</label>
				<input type="submit" value="Submit" />
			</Box>
		</Box>
	);
};

export default TopDetail;
