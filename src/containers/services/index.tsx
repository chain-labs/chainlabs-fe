import React from 'react';
import Box from 'src/components/Box';
import ServicesCard from 'src/components/ServicesCard';
import TestimonialCard from 'src/components/TestimonialCard';
import Text from 'src/components/Text';
import BlurSVG from '../../svgs/blur.svg';

const Services = () => {
	return (
		<Box bg="purple-500" minHeight="100vh">
			<Box pl={{ mobS: 'ml', tabL: 'wl' }} pt={{ mobS: '12rem', tabL: '15.2rem', deskM: '19rem' }} zIndex={3}>
				<Text as="h2" color="green-100">
					Services we provide
				</Text>
				<Box
					mt={{ mobS: '0', deskM: 'wxxs' }}
					row
					flexDirection={{ mobS: 'row', tabL: 'column' }}
					flexWrap="wrap"
				>
					<ServicesCard
						title="Smart Contract Development"
						description="We've got everything covered, from your MVPs to production-ready contracts!"
					/>
					<ServicesCard
						title="Web3 Research"
						description="Are you having trouble making your website web3-friendly? Don't worry, we'll make your websites web3 compliant and capable of interacting with smart contracts."
					/>
					<ServicesCard
						title="Technical Advisory"
						description="We advise you throughout the project life cycle to ensure you don't run into any technical issues. As an experienced team, we can provide extensive information and advice for your project."
					/>
					<ServicesCard
						title="Web3 Integration"
						description="Are you having trouble making your website web3-friendly? Don't worry, we'll make your websites web3 compliant and capable of interacting with smart contracts."
					/>
				</Box>
			</Box>
			<Box mt={{ mobS: 'wxs', deskM: 'wxxl' }} pb="wl" bg="highlight" overflowY="hidden">
				<Box
					position="absolute"
					display={{ mobS: 'none', deskM: 'block' }}
					right={{ mobS: '-20%', tabS: '-30%' }}
					top={{ mobS: '-40%', tabS: '-40%' }}
					transform="scale(0.7)"
					zIndex={2}
				>
					<BlurSVG />
				</Box>
				<Box
					position="absolute"
					display={{ mobS: 'none', deskM: 'block' }}
					left={{ mobS: '0%', tabL: '-30%' }}
					top={{ mobS: '0%', tabL: '130%' }}
					transform="scale(0.7)"
					zIndex={2}
				>
					<BlurSVG />
				</Box>

				<Box
					position="absolute"
					display={{ mobS: 'none', deskM: 'block' }}
					left={{ mobS: '0%', tabL: '60%' }}
					top={{ mobS: '0%', tabL: '100%' }}
					transform="scale(0.7)"
					zIndex={2}
					// border="1px solid white"
				>
					<BlurSVG />
				</Box>
				{/* </Box> */}
				<Text as="h6" textAlign="center" pt={{ mobS: 'wxs', tabL: 'wl', deskM: 'wxxs' }} color="white-10">
					WHAT OUR CLIENTS SAY
				</Text>
				<Box
					center
					flexDirection={{ mobS: 'column', tabL: 'row' }}
					justifyContent={{ mobS: 'center', tabL: 'space-around' }}
					flexWrap="wrap"
				>
					<TestimonialCard
						url="https://ik.imagekit.io/chainlabs/Website_Media/Desktop/Services/Desktop_Primobots_gX1euCNLy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654882459115"
						comment="The team at Chain Labs delivered on their promise and beyond. Their smart contract work for Primobots and post-deployment support had a huge positive impact on our NFT project."
						name="Ish"
						title="Founder, Primobots"
					/>
					<TestimonialCard
						url="https://ik.imagekit.io/chainlabs/Website_Media/Desktop/Services/Desktop_DOB_TSwibgD0m.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654882459115"
						comment="Chain Labs went the extra mile to build, launch and support the Daughters of Blockchain Genesis collection of 1,000 unique NFTs minting on Polygon."
						name="Baps"
						title="Founder, Daughters of Blockchain"
					/>
					<TestimonialCard
						url="https://ik.imagekit.io/chainlabs/Website_Media/Desktop/Services/Desktop_DOB_TSwibgD0m.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654882459115"
						comment="Chain Labs went the extra mile to build, launch and support the Daughters of Blockchain Genesis collection of 1,000 unique NFTs minting on Polygon."
						name="Jillian"
						title="Founder, Daughters of Blockchain"
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default Services;
