import { ArrowUpRight } from 'phosphor-react';
import React from 'react';
import Box from 'src/components/Box';
import Text from 'src/components/Text';

const Link = ({ text }) => {
	return (
		<Box row color="green-100" cursor="pointer">
			<Text as="c3" mx="mxxs" fontFamily="Inter">
				{text}
			</Text>
			<ArrowUpRight size={20} />
		</Box>
	);
};

export default Link;
