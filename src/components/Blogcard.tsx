import Image from 'next/image';
import React from 'react';
import Box from './Box';
import Text from './Text';

const Blogcard = ({ blogdetail }) => {
	return (
		<Box mx="mxxxl" target="_blank" cursor="pointer" as="a" href={blogdetail.link}>
			<Box
				height={{ mobS: '34.3rem', tabS: '27.6rem', deskM: '22rem' }}
				width={{ mobS: '20rem', tabS: '16.2rem', deskM: '38rem' }}
				position="relative"
				mb="mxl"
			>
				<Image src={blogdetail.image} layout="fill" objectFit="cover" />
			</Box>
			<Box position="absolute">
				<Text color="grey-100" mt="mxxs" width="38rem">
					{blogdetail.text}
				</Text>
			</Box>
		</Box>
	);
};

export default Blogcard;
