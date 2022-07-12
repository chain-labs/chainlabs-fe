import React from 'react';
import Box from 'src/components/Box';
import Text from 'src/components/Text';
import Form from './components/Form';
import BlurSVG from '../../svgs/blur.svg';

const Contact = () => {
	return (
		<Box
			bg="purple-500"
			minHeight="100vh"
			px="wl"
			pt={{ mobS: 'wm', tabL: '10.34rem', deskM: '10.9rem' }}
			zIndex={1}
		>
			<Box
				position="absolute"
				display={{ mobS: 'none', deskM: 'block' }}
				left={{ mobS: '0%', tabS: '-22%' }}
				top={{ mobS: '0%', tabS: '15%' }}
				transform="scale(0.7)"
			>
				<BlurSVG />
			</Box>
			<Box row between flexDirection={{ mobS: 'column', tabL: 'row' }} alignItems={{ tabL: 'flex-start' }}>
				<Box column width={{ mobS: '32.44rem', tabL: '36.451rem', deskM: '51.6rem' }}>
					<Text as="h1" color="green-200">
						Get in touch.
					</Text>
					<Text as="b1" mt="mxxxl" color="grey-100">
						Reach out to us to step in the decentralized world. Fill out the form with your enquiries or
						email us at{' '}
						<Box as="a" color="green-200" href="mailto:hello@chainlabs.in">
							hello@chainlabs.in
						</Box>{' '}
						You can also schedule a call clicking{' '}
						<Box as="a" href="/contact/calendly" cursor="pointer">
							<Box as="span" color="green-200">
								here.
							</Box>
						</Box>
					</Text>
				</Box>
				<Form />
			</Box>
		</Box>
	);
};

export default Contact;
