import React from 'react';
import Box from 'src/components/Box';
import If from 'src/components/If';
import WorksCard, { WorkCardProps } from 'src/components/WorksCard';

const WORKS: WorkCardProps[] = [
	{
		img: 'https://ik.imagekit.io/chainlabsfe/banners/tr:lo-true/simplr_banner.png',
		title: 'Simplr Collection',
		body: 'A simple to use, no-code platform to create NFT smart contracts to help launch your launch your NFT Collection hassle-free.',
		type: 'NFT Launchpad',
		twitter: 'https://twitter.com/SimplrDAO',
		ctaUrl: 'https://simplrcollection.com/',
	},
	{
		img: 'https://ik.imagekit.io/chainlabsfe/banners/tr:lo-true/simplr_banner.png',
		title: 'Simplr Collection',
		body: 'A simple to use, no-code platform to create NFT smart contracts to help launch your launch your NFT Collection hassle-free.',
		type: 'NFT Launchpad',
		twitter: 'https://twitter.com/SimplrDAO',
		ctaUrl: 'https://simplrcollection.com/',
	},
	{
		img: 'https://ik.imagekit.io/chainlabsfe/banners/tr:lo-true/simplr_banner.png',
		title: 'Simplr Collection',
		body: 'A simple to use, no-code platform to create NFT smart contracts to help launch your launch your NFT Collection hassle-free.',
		type: 'NFT Launchpad',
		twitter: 'https://twitter.com/SimplrDAO',
		ctaUrl: 'https://simplrcollection.com/',
	},
	{
		img: 'https://ik.imagekit.io/chainlabsfe/banners/tr:lo-true/simplr_banner.png',
		title: 'Simplr Collection',
		body: 'A simple to use, no-code platform to create NFT smart contracts to help launch your launch your NFT Collection hassle-free.',
		type: 'NFT Launchpad',
		twitter: 'https://twitter.com/SimplrDAO',
		ctaUrl: 'https://simplrcollection.com/',
	},
];

const WorksDemo = () => {
	return (
		<Box bg="purple-500" minHeight="100vh">
			<Box border="1px solid white" pl="7.2rem">
				{WORKS.map((work, index) => (
					<React.Fragment>
						<WorksCard
							img={work.img}
							title={work.title}
							type={work.type}
							body={work.body}
							twitter={work.twitter}
							ctaUrl={work.ctaUrl}
						/>
						<If condition={index !== WORKS.length - 1} then={<Box mb="ws" />} />
					</React.Fragment>
				))}
			</Box>
		</Box>
	);
};

export default WorksDemo;
