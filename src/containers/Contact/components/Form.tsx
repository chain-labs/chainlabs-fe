import React, { useState } from 'react';
import Box from 'src/components/Box';
import Dropdown from 'src/components/Dropdown';
import Text from 'src/components/Text';
import TextInput from 'src/components/TextInput';
import Button from 'src/containers/home/components/Button';

const Form = () => {
	const [query, setQuery] = useState();
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [message, setMessage] = useState();

	const handleSubmit = async () => {
		const valid = await validateEmail(email);
		if (valid) {
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
				}
			} catch (err) {
				console.log(err);
			}
		}
	};

	const validateEmail = async (email) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const res = await fetch('https://email-validator-0.herokuapp.com/email-verify', {
			method: 'POST',
			body: JSON.stringify({ email: email }),
			mode: 'cors',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'content-type': 'application/json',
			},
		});
		console.log(res);
		const json = await res.json();
		console.log(json.status);
		console.log(re.test(String(email).toLowerCase()));
		console.log(re.test(String(email).toLowerCase()) && json.status);
		return re.test(String(email).toLowerCase()) && json.status;
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
				text="Send Message"
				mt={{ mobS: 'mxl', tabL: 'wxs', deskM: 'wm' }}
				onClick={handleSubmit}
			></Button>
		</form>
	);
};

export default Form;
