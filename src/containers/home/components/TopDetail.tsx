import Box from 'components/Box';
import Text from 'components/Text';
import React, { useRef, useState } from 'react';
import TopImg1 from '../../../svgs/topimg1.svg';

const TopDetail = () => {
	const [email, setEmail] = useState<string>('');

	const sendEmail = async (e) => {
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
		<Box display="flex" color="primary-white">
			<Box mt="15rem" max-width="10rem">
				<Text as="h1" fontWeight="bold" lineHeight="h2">
					Building
				</Text>
				<Box display="flex" mt="mxs">
					<Text as="h1" color="accent-green" fontWeight="bold" lineHeight="h2" mr="ml">
						decentralized
					</Text>
					<Text as="h1" fontWeight="bold" lineHeight="h2">
						apps
					</Text>
				</Box>
				<Box display="flex" mt="mxs">
					<Text as="h1" fontWeight="bold" lineHeight="h2" mr="ml">
						for the
					</Text>
					<Text as="h1" fontWeight="bold" lineHeight="h2" color="accent-green">
						decentralized
					</Text>
				</Box>
				<Text as="h1" fontWeight="bold" lineHeight="h2" mr="37rem" mt="mxs">
					World
				</Text>
				<Box mt="mxl" maxWidth="65rem">
					<Text as="b2" fontWeight="thin">
						A laboratory empowering the consumers by building truly transparent and decentralized products.
					</Text>
				</Box>
				<Box mt="ml" maxWidth="60rem">
					<Text as="b3" color="primary-green" fontWeight="thin">
						Sign up for our weekly newsletter for the latest updates about our products.
					</Text>
				</Box>
				<Box mt="ml" borderRadius="8px 8px 8px 8px" border="1px solid white" width="70%">
					<Box
						as="input"
						name="name"
						width="75.5%"
						height="3.6rem"
						bg="rgba(196, 196, 196, 0.09)"
						color="primary-white"
						border="none"
						value= {email}
						onChange={(e) => setEmail(e.target.value)}
					></Box>
					<Box
						as="button"
						bg="rgba(4, 255, 164, 0.1)"
						height="3.6rem"
						color="primary-white"
						border="none"
						borderLeft="1px solid white"
						px="wxxs"
						css={`
							cursor: pointer;
						`}
						type="submit"
						onClick={sendEmail}
					>
						<Text as="links" color="rgba(230, 231, 232, 0.4)" fontWeight="regular">
							Signup
						</Text>
					</Box>
				</Box>
			</Box>
			{/* <Box>
				<TopImg1 width="200%" height="100%" />
			</Box> */}
		</Box>
	);
};

export default TopDetail;
