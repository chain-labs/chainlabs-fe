import React from 'react';
import Box from './Box';
import Image from 'next/image';
import Text from './Text';

const TestimonialCard = ({ url, comment, name, title }) => {
	return (
		<Box center column width="55rem">
			<Box
				height={{ mobS: '6rem', deskM: '8rem' }}
				width={{ mobS: '6rem', deskM: '8rem' }}
				position="relative"
				center
			>
				<Image layout="fill" src={url}></Image>
			</Box>
			<Text as="h5" textAlign="center" mt="mxl" color="white-10">
				"{comment}"
			</Text>
			<Text as="h5" textAlign="center" mt="mxl" color="green-200">
				{name}
			</Text>
			<Text as="h6" textAlign="center" color="grey-100" mt="mxxs">
				{title}
			</Text>
		</Box>
	);
};

export default TestimonialCard;
