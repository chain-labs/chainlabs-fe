import React, { useState } from 'react';
import Box from 'src/components/Box';
import Dropdown from 'src/components/Dropdown';
import Text from 'src/components/Text';
import TextInput from 'src/components/TextInput';
import Button from '../home/components/Button';

const Contact = () => {
	const [query, setQuery] = useState();
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [message, setMessage] = useState();

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
				<form>
					<Box column color="grey-100" mt={{ mobS: 'wm', tabL: '0' }}>
						<TextInput as="input" type="text" name="Name*" value={name} setValue={setName} />
						<TextInput
							as="input"
							mt="mxxxl"
							type="Email"
							name="Email Address*"
							value={email}
							setValue={setEmail}
						/>
						<Dropdown
							placeholder="Blockchain"
							width={{ mobS: '38.2rem', tabL: '37.7rem', deskM: '48rem' }}
							setValue={setQuery}
							value={query}
						/>
						<Text as="c3" mt="mxxxl" color="grey-100">
							Message
						</Text>
						<TextInput
							mt="mxs"
							as="textarea"
							type="description"
							name="Try to be as descriptive as possible!"
							height="15.8rem"
							py="mxs"
							px="mxs"
							value={message}
							setValue={setMessage}
						/>
					</Box>
					<Button
						width={{ mobS: '34.2rem', tabL: '37.7rem', deskM: '48rem' }}
						height="56px"
						text="Send Message"
						mt="wm"
					></Button>
				</form>
			</Box>
		</Box>
	);
};

export default Contact;
