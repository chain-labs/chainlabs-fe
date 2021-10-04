import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import theme from 'styleguide/theme';

const InfoBox = ({ icon, text }) => {
	return (
		<Box column alignItems={{ mobS: 'center', tabS: 'flex-start' }} mt={{ mobS: 'ml', tabS: '0' }}>
			<Box
				// @ts-expect-error as img
				as="img"
				src={icon}
				width={{ mobS: '96px', tabS: '110px' }}
				height={{ mobS: '96px', tabS: '110px' }}
			></Box>
			<Text
				as="b2"
				fontWeight="regular"
				maxWidth={{ mobS: '90%', tabS: 'unset' }}
				mt={{ mobS: 'ml', tabS: 'mxxl' }}
				textAlign={{ mobS: 'center', tabS: 'left' }}
			>
				{text}
			</Text>
		</Box>
	);
};

export default InfoBox;
