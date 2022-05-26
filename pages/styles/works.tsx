import Box from 'src/components/Box';
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
];

const WorksDemo = () => {
	return (
		<Box bg="purple-500" minHeight="100vh">
			<Box center>
				{WORKS.map((work) => (
					<WorksCard
						img={work.img}
						title={work.title}
						type={work.type}
						body={work.body}
						twitter={work.twitter}
						ctaUrl={work.ctaUrl}
					/>
				))}
			</Box>
		</Box>
	);
};

export default WorksDemo;
