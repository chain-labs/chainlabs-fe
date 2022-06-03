import React from 'react';
import Box from 'src/components/Box';
import Image from 'next/image';
import Text from 'src/components/Text';
import theme from 'src/styleguide/theme';
const MEMBERS = [
	{
		image: 'https://ik.imagekit.io/chainlabs/Website_Media/Desktop/Home/Blogs/Desktop_Blog2_HWR6OwnWd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653732840482',
		text: 'Tokens and Birth of NFTs',
		link: 'front-end lead',
	},
	{
		image: 'https://ik.imagekit.io/chainlabs/Website_Media/Desktop/Home/Blogs/Desktop_Blog3_0ia-0Aet7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653732695004',
		text: 'Think you know NFTs? Think Again',
		link: 'front-end dev',
	},
	{
		image: 'https://ik.imagekit.io/chainlabs/Website_Media/Desktop/Home/Blogs/Desktop_Blog1_BP-PR8Z8I.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653732691786',
		text: 'You’ll see NFTs in a whole new light read this again',
		link: 'ui/ux designer',
	},
];

const BlogCard = () => {
	return (
		<Box bg="purple-500" column alignItems="center">
			<Box minHeight="100vh">
				<Box>
					{' '}
					<Text as="h4" color="green-100" pt="mxl" pl="mxxxl">
						Blog
					</Text>
				</Box>
				<Box between flexDirection={{ mobS: 'column', tabS: 'row' }} flexWrap="wrap" py="mxl">
					{MEMBERS.map((member) => (
						<Box mx="mxxxl" cursor="pointer" as="a" href="">
							<Box
								height={{ mobS: '34.3rem', tabS: '27.6rem', deskM: '22rem' }}
								width={{ mobS: '20rem', tabS: '16.2rem', deskM: '38rem' }}
								position="relative"
								mb="mxl"
							>
								<Image src={member.image} layout="fill" objectFit="cover" />
							</Box>
							<Box position="absolute">
								<Text color="grey-100" mt="mxxs" width="38rem">
									{member.text}
								</Text>
							</Box>
						</Box>
					))}
				</Box>
				<Box as="a" column alignItems="end" cursor="pointer">
					<Text as="b3" color="green-100" pt="mxl" pr="wxxs" textDecoration="underline">
						View All
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default BlogCard;
