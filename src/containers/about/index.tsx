import Image from 'next/image';
import React from 'react';
import Box from 'src/components/Box';
import MemberCard from 'src/components/MemberCard';
import OuterContainer from 'src/components/OuterContainer';
import Text from 'src/components/Text';

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
		linkedInUrl: '/in/pauldesigns',
	},

	{
		image: 'https://ik.imagekit.io/chainlabsfe/pfp/prabhat_pfp.png',
		name: 'Prabhat Gupta',
		role: 'project manager',
		twitterUrl: 'prabhat_g',
		linkedInUrl: '/in/prabhatguta1998/',
	},
	{
		image: 'https://ik.imagekit.io/chainlabsfe/pfp/vishakha_pfp.png',
		name: 'Vishakha Singh',
		role: 'social media strategist',
		twitterUrl: ' ',
		linkedInUrl: '/in/vishakha-singh14',
	},
	{
		image: 'https://ik.imagekit.io/chainlabs/Website_Media/Desktop/About/Team_Members/Desktop_Shivangi_QLlF5TQHG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656943247532',
		name: 'Shivangi Singh',
		role: 'social media manager',
		twitterUrl: 'Shivangi769',
		linkedInUrl: '/in/shivangi-singh769',
	},
	{
		image: 'https://ik.imagekit.io/chainlabs/Website_Media/Desktop/About/Team_Members/Desktop_Yash_-GXVv8HQb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656943281112',
		name: 'Yash',
		role: 'social media strategist',
		twitterUrl: ' ',
		linkedInUrl: '/in/vishakha-singh14',
	},
];

const About = () => {
	return (
		<OuterContainer bg="purple-500">
			<Box
				mx="wl"
				between
				pt="11rem"
				pb={{ mobS: '11.2rem', tabL: '16.1rem' }}
				flexDirection={{ mobS: 'column-reverse', tabL: 'row' }}
			>
				<Box width={{ mobS: '29.57rem', tabL: '39rem', deskM: '48rem' }} mr="5.2rem">
					<Text as="h1" color="green-200" mt={{ monbS: 'ml', tabL: '0' }}>
						Who we are
					</Text>
					<Text as="b2" color="grey-100" mt={{ mobS: 'ms', tabL: 'wl' }}>
						Established in 2021, Chain Labs is working towards bringing the power of decentralization to
						everyday life by researching and tackling problems one at a time. We want to make an ecosystem
						governed by people and not by single organizations.
					</Text>
					<Text as="b2" color="grey-100" mt="mxxxl">
						We enjoy celebrating by putting people at the forefront of everything we do. As we expand, we're
						always on a search for innovators, experimenters, and problem solvers to join our team
					</Text>
				</Box>
				<Box
					height={{ mobS: '26.4rem', tabL: '34rem', deskM: '52.1rem' }}
					width={{ mobS: '24.3rem', tabL: '34.8rem', deskM: '53.3rem' }}
					position="relative"
				>
					<Image
						src="https://ik.imagekit.io/chainlabs/Website_Media/Desktop/About/Illustration/Illustrtation_Desktop_EPQXlY8OU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656949181206"
						layout="fill"
					/>
				</Box>
			</Box>
			<Box ml={{ mobS: 'mm', mobL: 'mxl', tabL: 'wl' }} column mb={{ mobS: '6rem', tabL: '11rem' }}>
				<Box
					display={{ mobS: 'none', deskM: 'block' }}
					position="absolute"
					width="40.9rem"
					height="27.4rem"
					bg="#04FFA4"
					mt="12rem"
					ml="133rem"
					css={`
						filter: blur(456px);
					`}
				/>
				<Text as="h1" color="green-200">
					Our wonderful team
				</Text>
				<Box row flexWrap="wrap" mr={{ mobS: '0rem', tabL: '20.5rem', deskM: '48rem' }} mt="1.4rem">
					{MEMBERS.map((member) => (
						<Box mt="ws" mr={{ mobS: '3.4rem', tabL: '8.3rem', deskM: '7.2rem' }}>
							<MemberCard
								image={member.image}
								name={member.name}
								role={member.role}
								linkedInUrl={member.linkedInUrl}
								twitterUrl={member.twitterUrl}
							/>
						</Box>
					))}
				</Box>
			</Box>
		</OuterContainer>
	);
};

export default About;
