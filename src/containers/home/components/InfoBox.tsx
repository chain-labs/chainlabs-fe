import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';

const InfoBox = ({ children, text }) => {
	return (
		<Box mr="mxxl" column>
			{children}
			<Text as="b2" textAlign="left" fontWeight="thin" mr="mxxl" mt="mxxl">
				{text}
			</Text>
		</Box>
	);
};

export default InfoBox;
