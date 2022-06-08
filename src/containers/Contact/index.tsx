import React from 'react';
import Box from 'src/components/Box';
import Text from 'src/components/Text';
import Form from './components/Form';

const Contact = () => {
	return (
		<Box bg="purple-500" minHeight="100vh" px="wl" pt="10.9rem">
			<Box
				row
				between
				fontFamily="Inter"
				flexDirection={{ mobS: 'column', tabL: 'row' }}
				alignItems={{ tabL: 'flex-start' }}
			>
				<Box column width={{ mobS: '32.44rem', tabL: '36.451rem', deskL: '51.6rem' }}>
					<Text as="h1" color="green-100">
						Get in touch.
					</Text>
					<Text as="b2" mt="mxxxl" color="grey-100">
						Reach out to us to step in the decentralized world. Fill out the form with your enquiries or
						email us at{' '}
						<Box as="span" color="green-100">
							hello@chainlabs.in
						</Box>{' '}
						You can also schedule a call clicking here:
					</Text>
				</Box>
				<Form />
			</Box>
		</Box>
	);
};

export default Contact;
