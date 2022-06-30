import React from 'react';
import Box from 'src/components/Box';
import ServicesCard from 'src/components/ServicesCard';
import TestimonialCard from 'src/components/TestimonialCard';
import Text from 'src/components/Text';

const Services = () => {
	return (
		<Box bg="purple-500" minHeight="100vh">
			<Box pl={{ mobS: 'ml', tabL: 'wl' }} pt={{ mobS: 'wm', tabL: 'wm', deskM: 'wxl' }}>
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
			<Box mt={{ mobS: 'wxs', deskM: 'wxxl' }} pb="wl" bg="rgba(81, 0, 220, 0.1)">
				<Box
					display={{ mobS: 'none', deskM: 'block' }}
					position="absolute"
					width="40.9rem"
					height="27.4rem"
					bg="#04FFA4"
					mt="10.2rem"
					ml="-26rem"
					css={`
						filter: blur(356px);
					`}
				/>
				<Box
					position="absolute"
					width="19.3rem"
					height="12.9rem"
					bg="#04FFA4"
					mt={{ mobS: '40.4rem', tabL: '22rem' }}
					ml={{ mobS: '-9.2rem', tabL: '-9.2rem' }}
					css={`
						filter: blur(190px);
						transform: rotate(-43.41deg);
					`}
					display={{ deskM: 'none' }}
				/>
				<Box position="relative" display={{ deskM: 'none' }}>
					<Box
						position="absolute"
						width="19.3rem"
						height="12.9rem"
						bg="#04FFA4"
						mt="5rem"
						ml={{ mobS: '70%', tabS: '70%', tabL: '100.6rem' }}
						css={`
							filter: blur(190px);
							transform: rotate(-43.41deg);
						`}
					></Box>
				</Box>
				<Text as="h6" textAlign="center" pt={{ mobS: 'wxs', tabL: 'wl', deskM: 'wxxs' }} color="white-10">
					WHAT OUR CLIENTS SAY
				</Text>
				<Box
					center
					flexDirection={{ mobS: 'column', tabL: 'row' }}
					justifyContent={{ mobS: 'center', tabL: 'space-around' }}
					mt={{ tabL: 'wxs', deskM: 'wm' }}
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
						name="Jillian"
						title="Founder, Daughters of Blockchain"
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default Services;
