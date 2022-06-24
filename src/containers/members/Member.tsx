import Box from 'src/components/Box';
import MemberCard from 'src/components/MemberCard';
import dynamic from 'next/dynamic';
// const Contacts = dynamic(() => import('src/components/MemberCard'));

const MEMBERS = [
	{
		image: 'https://ik.imagekit.io/chainlabsfe/pfp/angel_pfp.png',
		name: 'Angel Lakra',
		role: 'front-end lead',
		twitterUrl: 'iamngl',
		linkedInUrl: '/in/ngllakra',
	},
	{
		image: 'https://ik.imagekit.io/chainlabsfe/pfp/khushboo_pfp.png',
		name: 'Khushboo Dalwani',
		role: 'front-end dev',
		twitterUrl: 'DalwaniKhushboo',
		linkedInUrl: '/in/khushboodalwani',
	},
	{
		image: 'https://ik.imagekit.io/chainlabsfe/pfp/jay_pfp.png',
		name: 'Jay Kadam',
		role: 'ui/ux designer',
		twitterUrl: '_j4yke_',
		linkedInUrl: '/in/jaykadam',
	},
	{
		image: 'https://ik.imagekit.io/chainlabsfe/pfp/raj_pfp.png',
		name: 'Raj Paul',
		role: 'digital designer',
		twitterUrl: 'pauldesigns',
		linkedInUrl: 'in/pauldesigns',
	},
	{
		image: 'https://ik.imagekit.io/chainlabsfe/pfp/angel_pfp.png',
		name: 'Angel Lakra',
		role: 'front-end lead',
		twitterUrl: '//',
		linkedInUrl: '/;;',
	},
	{
		image: 'https://ik.imagekit.io/chainlabsfe/pfp/prabhat_pfp.png',
		name: 'Prabhat Gupta',
		role: 'project manager',
		twitterUrl: 'prabhat_g',
		linkedInUrl: 'in/prabhatguta1998/',
	},
	{
		image: 'https://ik.imagekit.io/chainlabsfe/pfp/vishakha_pfp.png',
		name: 'Vishakha Singh',
		role: 'social media strategist',
		twitterUrl: '//',
		linkedInUrl: '/;;',
	},
];

const Member = () => {
	return (
		<Box bg="purple-500" row flexWrap="wrap" alignItems="center" minHeight="100vh" mx="auto" px="wl">
			{MEMBERS.map((member) => (
				<MemberCard
					image={member.image}
					name={member.name}
					role={member.role}
					linkedInUrl={member.linkedInUrl}
					twitterUrl={member.twitterUrl}
				/>
			))}
		</Box>
	);
};

export default Member;
