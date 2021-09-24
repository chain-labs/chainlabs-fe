import { useLayoutEffect, useState } from 'react';
import Box from 'components/Box';
import Container from 'components/Container';
import Text from 'components/Text';
import Hamburger from 'svgs/hamburger.svg';
import RightArrow from 'svgs/arrow-right.svg';
import If from 'components/If';
import { gsap } from 'gsap';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Box
			py={{ mobS: 'mxs', tabS: 'mxxxl' }}
			px={{ mobS: 'mm', tabS: 'wxs', desk: '0' }}
			bg="rgba(236, 236, 236, 0.09)"
			borderBottom="1px solid"
			borderBottomColor="accent-green"
			position="fixed"
			width="100%"
		>
			<Container>
				<Box between>
					<Box center>
						<Box as="img" src="/static/images/logo.png" mr={{ mobS: 'mxs', tabS: 'mxl' }} />
						<Box as="img" src="/static/images/brand.png" />
					</Box>
					<Box color="primary-white" display={{ mobS: 'none', tabS: 'block' }}>
						<Text as="links">Vision</Text>
						<Text as="links" ml="wm">
							Products
						</Text>
						<Text as="links" ml="wm">
							Contact
						</Text>
					</Box>
					<Box
						color="primary-white"
						onClick={() => setIsMenuOpen(true)}
						display={{ mobS: 'block', tabS: 'none' }}
					>
						<Hamburger />
					</Box>
				</Box>
			</Container>
			<If condition={isMenuOpen} then={<Menu {...{ setIsMenuOpen }} />} />
		</Box>
	);
};

export default Navbar;

const Menu = ({ setIsMenuOpen }) => {
	useLayoutEffect(() => {
		gsap.from('.menu', { left: '100%' });
	}, []);

	return (
		<Box
			className="menu"
			bg="accent-green"
			height="100vh"
			width="100vw"
			position="fixed"
			top="0"
			left="8.2rem"
			px="mm"
			pt="wxs"
		>
			<Box
				color="black"
				onClick={() => {
					gsap.to('.menu', { left: '100%', onComplete: () => setIsMenuOpen(false) });
				}}
			>
				<RightArrow />
			</Box>
			<Box ml="mxxxl" color="black" mt="17.5rem">
				<Text as="h5" mb="wxs" fontWeight="medium" letterSpacing="-5%" textDecoration="underline">
					Vision
				</Text>
				<Text as="h5" mb="wxs" fontWeight="medium" letterSpacing="-5%" textDecoration="underline">
					Products
				</Text>
				<Text as="h5" fontWeight="medium" letterSpacing="-5%" textDecoration="underline">
					Contact
				</Text>
			</Box>
		</Box>
	);
};
