import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';

const BoxButton = ({ bg, text }) => {
	return (
		<Box row mt="ml">
			<Box
				as="button"
				bg={bg}
				borderRadius="0.8rem"
				px={{ mobS: 'mm', tabS: 'wm' }}
				py="ms"
				mr="mxxs"
				border="none"
			>
				<Text as="links" fontWeight="regular" color="primary-white">
					{text}
				</Text>
			</Box>
		</Box>
	);
};

export default BoxButton;
