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
			mb={{ mobS: 'mxl', tabL: '10rem', deskL: '16rem' }}
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
				height={{ mobS: '20.4rem', tabS: '30rem', deskL: '52rem' }}
				width={{ mobS: 'auto', tabS: '39.2rem', deskL: '72rem' }}
			></Box>
			<Box mt={{ mobS: 'ml', tabL: '0' }} ml={{ mobS: '0', tabL: 'wxxl' }} overflow="hidden">
				<Text as="h3" fontWeight="bold" textAlign="left" color="primary-green">
					{title}
				</Text>
				<Text as="b2" fontWeight="regular">
					{subtext}
				</Text>
				<Box row>
					<BoxButton
						bg="rgba(4, 255, 164, 0.1)"
						text="Learn More"
						color="rgba(255, 255, 255, 0.4)"
						hoverBg="rgba(4, 255, 164, 0.5)"
						hoverColor="#ffffff"
					/>
					<If
						condition={launched}
						then={
							<a href="https://warriors.chainlabs.in">
								<BoxButton
									bg="rgba(196, 196, 196, 0.1)"
									color="rgba(255, 255, 255, 0.4)"
									text="Launch app"
									hoverBg=""
									hoverColor="#ffffff"
								/>
							</a>
						}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default BoxComp;
