import React from 'react';
import Box from './Box';
import Text from './Text';

const FooterComp = () => {
	return (
		<Box
			display="flex"
			justifyContent="space-around"
			alignItems="flex-start"
			bg="purple-500"
			color="white"
			py="wl"
			// pl="8.1rem"
			// pr="8.3rem"
		>
			<Box>Chain Labs</Box>
			<Box display="flex" justifyContent="space-around" width="45.9rem">
				<Box column>
					<Text mb="mm" color="green-200">
						Company
					</Text>
					<Text as="c3" mb="mxs">
						Home
					</Text>
					<Text as="c3" mb="mxs">
						About
					</Text>
					<Text as="c3" mb="mxs">
						Services
					</Text>
					<Text as="c3" mb="mxs">
						Contact
					</Text>
				</Box>
				<Box column>
					<Text as="c3" mb="mm" color="green-200">
						Social
					</Text>
					<Text as="c3" mb="mxs">
						Twitter
					</Text>
					<Text as="c3" mb="mxs">
						Linkedin
					</Text>
					<Text as="c3" mb="mxs">
						Medium
					</Text>
					<Text as="c3" mb="mxs">
						Github
					</Text>
				</Box>
				<Box column>
					<Text as="c3" mb="mm" color="green-200">
						Work
					</Text>
					<Text as="c3" mb="mxs">
						Simplr Collection
					</Text>
					<Text as="c3" mb="mxs">
						Primobots
					</Text>
					<Text as="c3" mb="mxs">
						Daughters of Blockchain
					</Text>
					<Text as="c3" mb="mxs">
						IPVC
					</Text>
				</Box>
			</Box>
			<Box width="36rem">
				<Text>
					Join our mailing list to stay in the loop with our newest releases and updates about our products.
				</Text>
			</Box>
		</Box>
	);
};

export default FooterComp;
