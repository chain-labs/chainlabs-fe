import Box from 'components/Box';
import Text from 'components/Text';
import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'styleguide/theme';

import Illustration from 'svgs/art1.svg';
import Illustration_Sm from 'svgs/art1.001.svg';
import ArrowRight from 'svgs/arrow-right.svg';

const TopDetail = () => {
	const [email, setEmail] = useState<string>('');

	function validateEmail(email) {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	const sendEmail = async (e) => {
		e.preventDefault();

		if (!validateEmail(email)) {
			window.alert('Enter a valid email id');
			setEmail('');
			return;
		}
		const data = {
			email: email,
		};
		e.preventDefault();
		try {
			const res = await fetch('https://sheet.best/api/sheets/d8f5a38d-3edb-4f15-8395-7fc805ff5c56', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			if (res.ok) {
				window.alert('Submitted Successfully');
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Box display="flex" color="primary-white" flexDirection={{ mobS: 'column-reverse', tabL: 'column' }} id="top">
			<SVGContainer display={{ mobS: 'block', tabS: 'none' }}>
				<Illustration_Sm />
			</SVGContainer>
			<Box
				column
				mt={{ mobS: '35rem', tabS: '60rem', deskL: '25rem' }}
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
					borderRadius="4px"
					border="1px solid"
					borderColor={`${theme.colors['primary-green']}30`}
					width={{ mobS: '20rem', tabS: '72rem' }}
					display="flex"
					justifyContent="space-between"
					pl={{ mobS: 'mm', tabS: 'mm', deskL: 'mxl' }}
					fontSize={{ mobS: '1rem', tabS: '1.2rem', deskL: '1.6rem' }}
				>
					<InputBox
						as="input"
						placeholder="name@service.domain"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type="email"
					></InputBox>
					<Box
						as="button"
						bg={{ mobS: 'transparent', tabS: 'rgba(4, 255, 164, 0.1)' }}
						color="primary-white"
						border="none"
						px={{ mobS: 'mxs', tabS: 'wxs' }}
						py={{ mobS: 'mxxs', tabS: 'ms', deskL: 'mm' }}
						css={`
							cursor: pointer;
						`}
						type="submit"
						onClick={sendEmail}
					>
						<Text
							fontSize={{ tabS: '1.2rem', deskL: '1.6rem' }}
							color="rgba(230, 231, 232, 0.4)"
							fontWeight="regular"
							display={{ mobS: 'none', tabS: 'block' }}
						>
							Signup
						</Text>
						<Box color="accent-green" height="32px" width="auto" display={{ mobS: 'block', tabS: 'none' }}>
							<ArrowRight />
						</Box>
					</Box>
				</Box>
			</Box>
			<SVGContainer display={{ mobS: 'none', tabS: 'block' }}>
				<Illustration />
			</SVGContainer>
		</Box>
	);
};

export default TopDetail;

const InputBox = styled.input(
	({ theme }) => `
		color: ${theme.colors['primary-white']};
		border: none;
		flex: 1;
		outline: none;
		background: transparent;
		& :placeholder {
			color: ${theme.colors['primary-white']};
		}
		font-family: inherit;
		font-weight: 500;
`
);

const SVGContainer = styled(Box)(
	() => `
		position: absolute;
		right: -20rem;

		@media screen and (max-width: ${theme.breakpoints.tabL}) {
			top: 5rem;
			right: 0;
		}

		& svg {
			width: 133.3rem;

			@media screen and (min-width: ${theme.breakpoints.tabL} and max-width: ${theme.breakpoints.deskL}) {
				width: 80rem;
			}

			@media screen and (max-width: ${theme.breakpoints.tabL}) {
				width: 100vw;
			}
		}
`
);
