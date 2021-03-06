import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Box from 'src/components/Box';
import Dropdown from 'src/components/Dropdown';
import Text from 'src/components/Text';
import TextInput from 'src/components/TextInput';
import Button from 'src/containers/home/components/Button';
import { validateEmail } from './validEmail';

const Form = () => {
	const [query, setQuery] = useState<any>();
	const [name, setName] = useState<any>();
	const [email, setEmail] = useState<any>();
	const [message, setMessage] = useState<any>();
	const [success, setSuccess] = useState(false);
	const [buttonText, setButtonText] = useState('Send Message');

	const handleSubmit = async () => {
		setButtonText('Submitting Response...');
		const valid = await validateEmail(email);
		if (valid) {
			if (name != '' && query != '' && message != '') {
				const data = {
					name: name,
					email: email,
					query: query,
					message: message,
				};
				try {
					const res = await fetch('https://sheet.best/api/sheets/edf1463f-31ed-47de-9466-a73c7103296f', {
						method: 'POST',
						headers: {
							'Content-type': 'application/json',
						},
						body: JSON.stringify(data),
					});
					if (!res.ok) {
						console.log('Error Occured');
						toast.error('Error Occured');
					} else {
						toast.success('Message sent successfully');
						setName('');
						setEmail('');
						setQuery('');
						setMessage('');
						setSuccess(true);
						setButtonText('Your response was submitted. Thanks!');
					}
				} catch (err) {
					console.log(err);
				}
			} else {
				toast.error('Please fill all details');
				setButtonText('Send Message');
			}
		} else {
			toast.error('Invalid Email');
			setButtonText('Send Message');
		}
	};

	return (
		<form>
			<Box column color="grey-100" mt={{ mobS: 'wm', tabL: '0' }}>
				<TextInput as="input" type="text" name="Name*" value={name} setValue={setName} />
				<TextInput as="input" mt="mxxxl" type="Email" name="Email Address*" value={email} setValue={setEmail} />
				<Dropdown
					placeholder="Blockchain"
					width={{ mobS: '34.2rem', tabL: '37.7rem', deskM: '48rem' }}
					setValue={setQuery}
					value={query}
				/>
				<Text as="b2" mt="mxxxl" color="grey-100">
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
				text={buttonText}
				mt={{ mobS: 'mxl', tabL: 'wxs', deskM: 'wm' }}
				onClick={handleSubmit}
			></Button>
			{success ? (
				<Text as="b3" color="grey-100" width={{ mobS: '34.2rem', tabL: '37.7rem', deskM: '48rem' }}>
					Your response has been saved. A Chain Labs representative will contact you shortly.
				</Text>
			) : (
				''
			)}
		</form>
	);
};

export default Form;
