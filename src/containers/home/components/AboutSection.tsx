import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import styled from 'styled-components';
import theme from 'styleguide/theme';
import Illustration from 'svgs/art2.svg';

const AboutSection = () => {
	return (
		<Box
			id="vision"
			display="flex"
			flexDirection={{ mobS: 'column', tabS: 'row-reverse' }}
			justifyContent="space-between"
			alignItems={{ mobS: 'center', tabS: 'flex-start' }}
			mt={{ mobS: 'ml', tabS: '10rem' }}
			pr={{ mobS: '0', tabL: 'wl' }}
			px={{ tabS: 'ws', tabL: '0' }}
			position="relative"
		>
			{/* <SVGContainer ml={{ mobS: '0', deskM: '15rem' }}>
				<Illustration />
			</SVGContainer> */}
			<Box
				position="absolute"
				left={{ mobS: '0', tabS: '-25rem' }}
				top={{ mobS: '0', tabS: '-30rem', deskM: '-15rem', deskL: '-30rem' }}
				width={{ mobS: '100%', tabS: '96rem', deskL: '120rem' }}
				transform={{ mobS: 'scale(2)', tabS: 'scale(1)' }}
			>
				<Box width="inherit" as="img" src="/static/images/ill_2.png"></Box>
			</Box>
			<Box
				mt={{ mobS: '40rem', tabS: '0rem', tabL: '15rem' }}
				maxWidth={{ mobS: '30rem', tabL: '50rem' }}
				textAlign={{ mobS: 'center', tabS: 'left' }}
			>
				<Text as="h2" color="primary-green" fontWeight="bold">
					About Chain Labs
				</Text>
				<Text as="b2" fontWeight="regular" color="primary-white" mt={{ mobS: 'mxxl', tabS: 'ml' }}>
					Established in 2021, Chain Labs is working towards bringing the power of decentralization to
					everyday life by researching and tackling problems one at a time. We want to make an ecosystem
					governed by people and not by single organizations.
				</Text>
			</Box>
		</Box>
	);
};

export default AboutSection;

const SVGContainer = styled(Box)(
	() => `
		& svg {
			width: 43.8rem;

			@media only screen and (min-width: ${theme.breakpoints.tabL}) and (max-width: ${theme.breakpoints.deskL}) {
				width: 32rem;
			}

			@media only screen and (max-width: ${theme.breakpoints.tabL}) {
				width: 27rem;
			}
`
);
