import Box from 'components/Box';
import Image from 'next/image';
import { ArrowRight } from 'phosphor-react';
import React from 'react';
import theme from 'src/styleguide/theme';
import InputBox from './InputBox';
import Navbar from './Navbar';
import Text from './Text';

const OuterContainer = ({ children, bg, controls }) => {
	return (
		<Box bg={bg} minHeight="100vh">
			<Navbar controls={controls} />
			{children}
			<Box bg="purple-500" color="white" py="wl" column px={{ mobS: 'ml', tabL: '0', deskM: 'wl' }}>
				<Box
					display="flex"
					justifyContent={{ mobS: 'space-around' }}
					flexDirection={{ mobS: 'column', tabS: 'row' }}
				>
					<Box column mr={{ mobS: '0', deskM: '16rem' }}>
						<Box
							position="relative"
							width={{ mobS: '19.8rem', tabS: '14.8rem', deskM: '16rem' }}
							height={{ mobS: '5.7rem', tabS: '4.3rem', deskM: '4.6rem' }}
						>
							<Image
								src="https://ik.imagekit.io/chainlabs/Website_Media/Chain_Labs_Logos/logo-footer-tablet_42hhHVYTlB.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1655915174616"
								layout="fill"
								objectFit="cover"
							/>
						</Box>
						<Box width="36rem" display={{ mobS: 'block', deskM: 'none' }} mt="mxl" row>
							<Text as="b3" color="grey-100" mr="wm">
								Join our mailing list to stay in the loop with our newest releases and updates about our
								products.
							</Text>
							<Box row>
								<Box zIndex={0} position="absolute">
									<InputBox width={{ mobS: '32rem', tabL: '36rem' }} />
								</Box>
								<Box mt="2.3rem" center zIndex={1} ml={{ mobS: '80%', tabL: '90%' }}>
									<ArrowRight size={24} color={theme.colors['green-400']} />{' '}
								</Box>
							</Box>
							<Text as="c1" mt="mxxxl" display={{ mobS: 'none', tabS: 'block' }} color="grey-200">
								© ALL RIGHTS RESERVED. CHAIN LABS 2022.
							</Text>
						</Box>
					</Box>
					<Box row flexWrap="wrap" mt={{ mobS: 'mxxxl', tabL: '0' }} mr={{ mobS: '0', deskM: '16rem' }}>
						<Box column mr={{ mobS: 'wm', tabS: 'wxs' }}>
							<Text as="h6" mb="mm" color="green-100">
								Company
							</Text>
							<Text as="b3" mb="mxs" color="grey-100">
								Home
							</Text>
							<Text as="b3" mb="mxs" color="grey-100">
								About
							</Text>
							<Text as="b3" mb="mxs" color="grey-100">
								Services
							</Text>
							<Text as="b3" mb="mxs" color="grey-100">
								Contact
							</Text>
						</Box>
						<Box column mr={{ mobS: 'wm', tabS: 'wxs' }}>
							<Text as="h6" mb="mm" color="green-100">
								Social
							</Text>
							<Text as="b3" mb="mxs" color="grey-100">
								Twitter
							</Text>
							<Text as="b3" mb="mxs" color="grey-100">
								Linkedin
							</Text>
							<Text as="b3" mb="mxs" color="grey-100">
								Medium
							</Text>
							<Text as="b3" mb="mxs" color="grey-100">
								Github
							</Text>
						</Box>
						<Box column mt={{ mobS: 'mxl', mobL: '0' }}>
							<Text as="h6" mb="mm" color="green-100">
								Work
							</Text>
							<Text as="b3" mb="mxs" color="grey-100">
								Simplr Collection
							</Text>
							<Text as="b3" mb="mxs" color="grey-100">
								Primobots
							</Text>
							<Text as="b3" mb="mxs" color="grey-100">
								Daughters of Blockchain
							</Text>
							<Text as="b3" mb="mxs" color="grey-100">
								IPVC
							</Text>
						</Box>
					</Box>
					<Box width="36rem" display={{ mobS: 'none', deskM: 'block' }}>
						<Text as="b3" color="grey-100">
							Join our mailing list to stay in the loop with our newest releases and updates about our
							products.
						</Text>
						<Box row>
							<InputBox width={{ tabL: '36rem' }} />
							<Box mt="1.7rem" center zIndex={1} ml="-10%">
								<ArrowRight size={24} color={theme.colors['green-400']} />{' '}
							</Box>
						</Box>
						<Text as="c1" mt="mxxxl" color="grey-200">
							© ALL RIGHTS RESERVED. CHAIN LABS 2022.
						</Text>
					</Box>
				</Box>
				<Text as="c1" mt="mxxxl" display={{ mobS: 'block', tabS: 'none' }} color="grey-200">
					© ALL RIGHTS RESERVED. CHAIN LABS 2022.
				</Text>
			</Box>
		</Box>
	);
};

export default OuterContainer;
