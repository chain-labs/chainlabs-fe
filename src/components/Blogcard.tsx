import Image from 'next/image';
import React from 'react';
import Box from './Box';
import Text from './Text';

const Blogcard = ({ imageUrl, url, title }) => {
	return (
		<Box mx="mxxxl" target="_blank" cursor="pointer" as="a" href={url}>
			<Box
				width={{ mobS: '34.3rem', tabS: '27.6rem', deskM: '38rem' }}
				height={{ mobS: '20rem', tabS: '16.2rem', deskM: '22rem' }}
				position="relative"
				mb="mm"
			>
				<Image src={imageUrl} layout="fill" objectFit="cover" />
			</Box>
			<Box position={{ mobS: 'relative', tabL: 'absolute' }}>
				<Text as="h6" color="grey-100" width={{ mobS: '34.3rem', tabL: '27.6rem', deskM: '35.4rem' }}>
					{title}
				</Text>
			</Box>
		</Box>
	);
};

export default Blogcard;
