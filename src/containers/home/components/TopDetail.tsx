import Box from 'components/Box';
import Text from 'components/Text';
import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'styleguide/theme';
import { db } from 'src/firebase';
import ArrowRight from 'svgs/arrow-right.svg';
import ReactLoading from 'react-loading';
import If from 'src/components/If';

const TopDetail = () => {
	const [email, setEmail] = useState<string>('');
	const [placeholder, setPlaceholder] = useState<string>('name@service.domain');
	const [disable, setDisable] = useState<boolean>(true);
	const [emailValid, setEmailValid] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [placeholderColor, setPlaceholderColor] = useState<string>('');

	const setValues = () => {
		setPlaceholder('name@service.domain');
		setDisable(false);
		setPlaceholderColor('');
	};

	const validateEmail = async (email) => {
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
		console.log(json);
		return json.status;
	};

	const sendEmail = async (e) => {
		e.preventDefault();
		const emailsInFirestore = await db.collection('emails');
		setLoading(true);
		let isEmailValid = await validateEmail(email);
		if (!isEmailValid) {
			setPlaceholder('The Entered is email is not valid');
			setPlaceholderColor('primary-red');
			setDisable(true);
			setEmailValid(false);
			setEmail('');
			setLoading(false);
			return;
		}
		const emailDocs = await db.collection('emails').get();
		emailDocs.forEach((doc) => {
			const data = doc.data();
			if (email == data.email) isEmailValid = false;
		});
		if (!isEmailValid) {
			setEmailValid(false);
			setPlaceholder('Email already registered');
			setPlaceholderColor('primary-red');
			setEmail('');
			setLoading(false);
			return;
		} else {
			const data = {
				email: email,
			};

			try {
				const docRef = emailsInFirestore.doc();
				docRef.set(data);
				setEmailValid(true);
				setPlaceholder('Email Submitted Successfully');
				setPlaceholderColor('accent-green');
				setEmail('');
				setLoading(false);
			} catch (err) {
				console.log(err);
			}
		}
	};

	return (
		<Box
			display="flex"
			color="primary-white"
			flexDirection={{ mobS: 'column', tabL: 'row' }}
			id="top"
			overflowX="hidden"
		>
			<Box
				width="100vw"
				css={`
					height: calc(100vw / 0.867);
				`}
				display={{ mobS: 'block', tabL: 'none' }}
				position="relative"
				// border="1px solid red"
				overflow="hidden"
			>
				<Box
					position="absolute"
					left="50%"
					top="5%"
					transform="translateX(-50%)"
					width="125%"
					as="img"
					src="/static/images/ill_1.png"
				></Box>
			</Box>
			<Box
				column
				mt={{ mobS: '-5rem', tabS: '-15rem', tabL: '20rem' }}
				alignItems={{ mobS: 'center', tabL: 'flex-start' }}
				textAlign={{ mobS: 'center', tabL: 'start' }}
			>
				<Box display="flex" flexDirection="column" alignItems={{ mobS: 'center', tabL: 'flex-start' }}>
					<Text as="h1" fontWeight="bold" lineHeight="h2">
						Building
					</Text>
					<Box display="flex" mt="mxs" justifyContent={{ mobS: 'center', tabL: 'flex-start' }}>
						<Text as="h1" color="accent-green" fontWeight="bold" lineHeight="h2" mr="mm">
							decentralized
						</Text>
						<Text as="h1" fontWeight="bold" lineHeight="h2">
							apps
						</Text>
					</Box>
					<Box display="flex" mt="mxs" justifyContent={{ mobS: 'center', tabL: 'flex-start' }}>
						<Text as="h1" fontWeight="bold" lineHeight="h2" mr="mm">
							for the
						</Text>
						<Text as="h1" fontWeight="bold" lineHeight="h2" color="accent-green">
							decentralized
						</Text>
					</Box>
					<Text as="h1" fontWeight="bold" lineHeight="h2" mt="mxs">
						World
					</Text>
				</Box>
				<Box mt={{ mobS: 'mxs', tabS: 'wxxs', deskL: 'wxs' }} maxWidth="65rem">
					<Text as="b1" fontWeight="regular">
						A laboratory empowering the consumers by building truly transparent and decentralized products.
					</Text>
				</Box>
				<Box mt={{ mobS: 'mxs', tabS: 'mxl', deskL: 'ws' }} maxWidth="60rem">
					<Text as="b3" color="primary-green" fontWeight="regular">
						Sign up for our weekly newsletter for the latest updates about our products.
					</Text>
				</Box>
				<Box
					mt="mxl"
					bg={`${theme.colors['primary-white']}10`}
					borderRadius="8px"
					border="1px solid"
					borderColor={`${theme.colors['primary-green']}30`}
					width={{ mobS: '25rem', tabL: '40rem', deskM: '72rem' }}
					display="flex"
					justifyContent="space-between"
					pl={{ mobS: 'mm', tabS: 'mm', deskL: 'mxl' }}
					fontSize={{ mobS: '1rem', tabS: '1.2rem', deskL: '1.6rem' }}
					zIndex={10}
				>
					<InputBox
						as="input"
						placeholder={placeholder}
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type="email"
						onFocus={setValues}
						color={`${placeholderColor}`}
					></InputBox>
					<Box
						as="button"
						display="flex"
						bg={
							disable
								? { mobS: 'transparent', tabS: 'rgba(4, 255, 164, 0.1)' }
								: { mobS: 'transparent', tabS: 'rgba(4, 255, 164, 0.5)' }
						}
						color="primary-white"
						border="none"
						borderTopRightRadius="8px"
						borderBottomRightRadius="8px"
						px={{ mobS: 'mxs', tabL: 'wxs' }}
						py={{ mobS: 'mxxs', tabL: 'ms', deskL: 'mm' }}
						css={`
							cursor: pointer;
						`}
						type="submit"
						zIndex={1}
						disabled={disable ? true : false}
						onClick={sendEmail}
						alignItems="center"
					>
						<Text
							fontSize={{ tabS: '1.2rem', deskL: '1.6rem' }}
							color={disable ? 'rgba(230, 231, 232, 0.4)' : 'primary-white'}
							fontWeight="regular"
							display={{ mobS: 'none', tabL: 'block' }}
						>
							Signup
						</Text>
						<If
							condition={loading}
							then={
								<Box ml="mxs" my="mxxs" alignItems="center">
									<ReactLoading type="spin" color="white" height={22} width={22} />
								</Box>
							}
						/>
						<If
							condition={!loading}
							then={
								<Box
									color="accent-green"
									height="32px"
									width="auto"
									display={{ mobS: 'block', tabL: 'none' }}
								>
									<ArrowRight />
								</Box>
							}
						/>
					</Box>
				</Box>
			</Box>
			<Box
				width={{ tabL: '120rem', deskL: '150rem' }}
				display={{ mobS: 'none', tabL: 'block' }}
				position="absolute"
				right={-300}
				top={-50}
				overflow="hidden"
			>
				<Box as="img" width="inherit" src="/static/images/ill_1.png"></Box>
			</Box>
		</Box>
	);
};

export default TopDetail;

const InputBox = styled.input(
	({ theme, color }: { theme: any; color: string }) => `
		color: ${theme.colors['primary-white']};
		border: none;
		flex: 1;
		outline: none;
		background: transparent;
		&::placeholder {
			color: ${theme.colors[color]};
		}
		font-family: inherit;
		font-weight: 500;
`
);

