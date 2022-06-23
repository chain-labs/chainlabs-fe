import Box from 'components/Box';
import Image from 'next/image';
import React from 'react';
import InputBox from './InputBox';
import Text from './Text';

const OuterContainer = ({ children, bg }) => {
	return (
		<Box bg={bg} minHeight="100vh">
			{children}
			<Box bg="purple-500" color="white" py="wl" column px={{ mobS: 'ml' }}>
				<Box display="flex" justifyContent="space-around" flexDirection={{ mobS: 'column', tabL: 'row' }}>
					<Box column>
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
						<Box width="36rem" display={{ mobS: 'block', deskM: 'none' }} mt="mxl">
							<Text as="b3" color="grey-100" mr="wm">
								Join our mailing list to stay in the loop with our newest releases and updates about our
								products.
							</Text>
							<InputBox />
							<Text as="c1" mt="mxxxl" display={{ mobS: 'none', tabL: 'block' }}>
								© ALL RIGHTS RESERVED. CHAIN LABS 2022.
							</Text>
						</Box>
					</Box>
					<Box row flexWrap="wrap" mt={{ mobS: 'mxxxl', tabL: '0' }}>
						<Box column mr="wxs">
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
						<Box column mr="wxs">
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
						<Box column mt={{ mobS: 'mxl', tabL: '0' }}>
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
						<InputBox />
						<Text as="c1" mt="mxxxl">
							© ALL RIGHTS RESERVED. CHAIN LABS 2022.
						</Text>
					</Box>
				</Box>
				<Text as="c1" mt="mxxxl" display={{ mobS: 'block', tabL: 'none' }}>
					© ALL RIGHTS RESERVED. CHAIN LABS 2022.
				</Text>
			</Box>
		</Box>
	);
};

export default OuterContainer;
