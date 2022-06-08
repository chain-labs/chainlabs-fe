import React from 'react';
import Box from 'src/components/Box';
import Text from 'src/components/Text';
import Blogcard from 'src/components/Blogcard';
const BLOGS = [
	{
		image: 'https://ik.imagekit.io/chainlabs/Website_Media/Desktop/Home/Blogs/Desktop_Blog1_BP-PR8Z8I.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653732691786',
		text: 'Tokens and Birth of NFTs',
		link: 'https://blog.chainlabs.in/tokens-and-the-birth-of-nfts-4b02a8ddd98a',
	},
	{
		image: 'https://ik.imagekit.io/chainlabs/Website_Media/Desktop/Home/Blogs/Desktop_Blog2_HWR6OwnWd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653732840482',
		text: 'Think you know NFTs? Think Again',
		link: 'https://blog.chainlabs.in/think-you-know-nfts-think-again-ee799f3f4789',
	},
	{
		image: 'https://ik.imagekit.io/chainlabs/Website_Media/Desktop/Home/Blogs/Desktop_Blog3_0ia-0Aet7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653732695004',
		text: 'You’ll see NFTs in a whole new light read this again',
		link: 'https://blog.chainlabs.in/youll-see-nfts-in-a-whole-new-light-after-reading-this-d6ebd6aecd9a',
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
					{BLOGS.map((blog) => (
						<Blogcard blogdetail={blog} />
					))}
				</Box>
				<Box as="a" target="_blank" column alignItems="end" cursor="pointer" href="https://blog.chainlabs.in/">
					<Text as="b3" color="green-100" pt="mxl" pr="wxxs" textDecoration="underline">
						View All
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default BlogCard;
