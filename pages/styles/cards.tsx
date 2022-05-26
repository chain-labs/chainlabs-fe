import Box from 'src/components/Box';
import MemberCard from 'src/components/MemberCard';

const MEMBERS = [
	{
		image: 'https://ik.imagekit.io/chainlabsfe/pfp/angel_pfp.png',
		name: 'Angel Lakra',
		role: 'front-end lead',
	},
	{
		image: 'https://ik.imagekit.io/chainlabsfe/pfp/khushboo_pfp.png',
		name: 'Khushboo Dalwani',
		role: 'front-end dev',
	},
	{
		image: 'https://ik.imagekit.io/chainlabsfe/pfp/jay_pfp.png',
		name: 'Jay Kadam',
		role: 'ui/ux designer',
	},
	{
		image: 'https://ik.imagekit.io/chainlabsfe/pfp/raj_pfp.png',
		name: 'Raj Paul',
		role: 'digital designer',
	},
	{
		image: 'https://ik.imagekit.io/chainlabsfe/pfp/angel_pfp.png',
		name: 'Angel Lakra',
		role: 'front-end lead',
	},
	{
		image: 'https://ik.imagekit.io/chainlabsfe/pfp/prabhat_pfp.png',
		name: 'Prabhat Gupta',
		role: 'project manager',
	},
	{
		image: 'https://ik.imagekit.io/chainlabsfe/pfp/vishakha_pfp.png',
		name: 'Vishakha Singh',
		role: 'social media strategist',
	},
];

const CardsPage = () => {
	return (
		<Box bg="purple-500" row flexWrap="wrap" alignItems="center" minHeight="100vh" mx="auto" px="wl">
			{MEMBERS.map((member) => (
				<MemberCard image={member.image} name={member.name} role={member.role} />
			))}
		</Box>
	);
};

export default CardsPage;
