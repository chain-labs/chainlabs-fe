import React from 'react';
import Box from './Box';
import Text from './Text';

const LinkComp = ({ text, link, ...restprops }) => {
	return (
		<Box as="a" href={link} cursor="pointer" {...restprops}>
			<Text as="b3" mb="mxs" color="grey-100">
				{text}
			</Text>
		</Box>
	);
};

export default LinkComp;
