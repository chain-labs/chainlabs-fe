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
];

const About = () => {
	return (
		<OuterContainer bg="purple-500">
			<Box mx="wl" between pt="11rem" pb="16.1rem">
				<Box width="48rem" mr="5.2rem">
					<Text as="h1" color="green-200">
						Who we are
					</Text>
					<Text as="b2" color="grey-100">
						Established in 2021, Chain Labs is working towards bringing the power of decentralization to
						everyday life by researching and tackling problems one at a time. We want to make an ecosystem
						governed by people and not by single organizations.
					</Text>
					<Text as="b2" color="grey-100">
						We enjoy celebrating by putting people at the forefront of everything we do. As we expand, we're
						always on a search for innovators, experimenters, and problem solvers to join our team
					</Text>
				</Box>
				<Box
					height={{ mobS: '14.866rem', tabL: '34rem', deskM: '52.1rem' }}
					width={{ mobS: '14.866rem', tabL: '34.8rem', deskM: '53.3rem' }}
					position="relative"
				>
					<Image
						src="https://ik.imagekit.io/chainlabs/Website_Media/Desktop/About/Illustration/Desktop_About_oMrWVlOdf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653732696288"
						layout="fill"
					/>
				</Box>
			</Box>
			<Box ml={{ mobS: 'mxl', tabL: 'wl' }} column mb="11rem">
				<Text as="h1" color="green-200">
					Our wonderful team
				</Text>
				<Box
					row
					flexWrap="wrap"
					alignItems="center"
					justifyContent={{ mobS: 'space-around', tabS: 'normal' }}
					mr={{ mobS: '0rem', tabL: '20.5rem', deskM: '48rem' }}
					mt="1.4rem"
				>
					{MEMBERS.map((member) => (
						<Box mt="ws">
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
