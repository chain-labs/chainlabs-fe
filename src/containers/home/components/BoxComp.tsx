import Box from 'components/Box';
import React from 'react';

const BoxComp = ({ children }) => {
	return (
		<Box
			row
			alignItems="center"
			mt="16rem"
			borderRadius="2.4rem"
			bg="rgba(196, 196, 196, 0.072)"
			color="primary-white"
			border="0.1rem solid white"
			p="ml"
		>
			{children}
		</Box>
	);
};

export default BoxComp;
