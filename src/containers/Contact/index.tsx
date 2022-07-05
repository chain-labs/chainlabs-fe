import React from 'react';
import Box from 'src/components/Box';
import Text from 'src/components/Text';
import Form from './components/Form';

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
				display={{ mobS: 'none', deskM: 'block' }}
				position="absolute"
				width="40.9rem"
				height="27.4rem"
				bg="#04FFA4"
				mt="45.6rem"
				ml="-16rem"
				css={`
					filter: blur(456px);
				`}
			/>
			<Box row between flexDirection={{ mobS: 'column', tabL: 'row' }} alignItems={{ tabL: 'flex-start' }}>
				<Box column width={{ mobS: '32.44rem', tabL: '36.451rem', deskM: '51.6rem' }}>
					<Text as="h1" color="green-200">
						Get in touch.
					</Text>
					<Text as="b1" mt="mxxxl" color="grey-100">
						Reach out to us to step in the decentralized world. Fill out the form with your enquiries or
						email us at{' '}
						<Box as="span" color="green-200">
							hello@chainlabs.in
						</Box>{' '}
						You can also schedule a call clicking{' '}
						<Box as="span" color="green-100">
							here.
						</Box>
					</Text>
				</Box>
				<Form />
			</Box>
		</Box>
	);
};

export default Contact;
