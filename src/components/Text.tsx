import React from 'react';
import Box, { BoxProps } from 'components/Box';

export const fontSizes = {
	h1: { mobS: '4.8rem', tabS: '6.4rem', deskM: '7.2rem' },
	h2: { mobS: '4rem', tabS: '4.8rem', deskM: '6.4rem' },
	h3: { mobS: '3.6rem', tabS: '4rem', deskM: '4.8rem' },
	h4: { mobS: '3.2rem', tabS: '3.6rem', deskM: '4rem' },
	h5: { mobS: '2.4rem', tabS: '3.2rem', deskM: '3.6rem' },
	h6: { mobS: '2rem', tabS: '2.4rem', deskM: '3.2rem' },
	b1: { mobS: '1.6rem', tabS: '2rem', deskM: '2.4rem' },
	b2: { mobS: '1.6rem', tabS: '2rem', deskM: '2.4rem' },
	b3: { mobS: '1.2rem', tabS: '1.6rem', deskM: '2rem' },
	links: { mobS: '0.8rem', tabS: '1.2rem', deskM: '1.6rem' },
};

export const lineHeights = {
	h1: '150%',
	h2: '115%',
	h4: '125%',
	b2: '165%',
};

const fontWeights = {
	'extra-bold': 800,
	bold: 700,
	medium: 600,
	regular: 500,
	thin: 400,
};

export interface TextProps extends BoxProps {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1' | 'b2' | 'b3' | 'links';
	fontWeight?: 'extra-bold' | 'bold' | 'medium' | 'regular' | 'thin';
	lineHeight?: 'h1' | 'h2' | 'h4' | 'b2';

	children?: string | React.ReactNode;
	id?: string;
	dangerouslySetInnerHTML?: { __html: string };
	onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Text = ({
	as = 'h6',
	fontWeight = 'regular',
	color = 'primary-white',
	children,
	...restProps
}: TextProps): JSX.Element => {
	const fs = fontSizes[as];
	const fw = fontWeights[fontWeight];
	const lh = lineHeights[as] ?? '150%';

	return (
		<Box
			margin={0}
			padding={0}
			as={as}
			color={color as string}
			fontSize={fs}
			fontWeight={fw}
			lineHeight={lh}
			{...restProps}
		>
			{children}
		</Box>
	);
};

export default Text;
