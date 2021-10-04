import Box from 'components/Box';
import If from 'components/If';
import Text from 'components/Text';
import React from 'react';
import theme from 'styleguide/theme';
import BoxButton from './BoxButton';

interface Props {
	image: string;
	title: string;
	subtext: string | React.ReactNode;
	launched?: boolean;
}

const BoxComp = ({ image, title, subtext, launched }: Props) => {
	return (
		<Box
			row
			mt={{ mobS: 'mxl', tabL: '16rem' }}
			borderRadius="2.4rem"
			bg="rgba(196, 196, 196, 0.072)"
			color="primary-white"
			border="0.1rem solid"
			borderColor={`${theme.colors['accent-green']}30`}
			p="ml"
			flexDirection={{ mobS: 'column', tabL: 'row' }}
			mx={{ mobS: 'mxs', tabL: '0' }}
		>
			<Box
				// @ts-expect-error as img
				as="img"
				src={image}
				height={{ mobS: '20.4rem', tabS: '30rem', deskM: '52rem' }}
				width={{ mobS: '32rem', tabS: '39.2rem', deskM: '72rem' }}
			></Box>
			<Box mt={{ mobS: 'ml', tabL: '0' }} ml={{ mobS: '0', tabL: 'wxxl' }} overflow="hidden">
				<Text as="h3" fontWeight="bold" textAlign="left" color="primary-green">
					{title}
				</Text>
				<Text as="b2" fontWeight="regular">
					{subtext}
				</Text>
				<Box row>
					<BoxButton bg="rgba(4, 255, 164, 0.5)" text="Learn More" />
					<If
						condition={launched}
						then={
							<a href="https://warriors.chainlabs.in">
								<BoxButton bg="rgba(196, 196, 196, 0.1)" text="Launch app" />
							</a>
						}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default BoxComp;
