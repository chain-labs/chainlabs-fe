import React from 'react';
import Box, { BoxProps } from 'components/Box';

export const fontSizes = {
	headline: { mobS: '4rem', tabS: '5.6rem', deskM: '6.4rem' },
	h1: { mobS: '3.2rem', tabS: '4.8rem', deskM: '5.6rem' },
	h2: { mobS: '2.4rem', tabS: '4rem', deskM: '4.8rem' },
	h3: { mobS: '1.8rem', tabS: '3.2rem', deskM: '4rem' },
	h4: { mobS: '1.6rem', tabS: '2.4rem', deskM: '3.2rem' },
	h5: { tabS: '1.8rem', deskM: '2.4rem' },
	h6: '1.8rem',
	b1: '2.4rem',
	b2: '2.4rem',
	b3: '1.6rem',
	b4: '1.4rem',
	c1: '1.4rem',
	c2: '1.4rem',
	c3: '1.6rem',
};

function setLineHeights(lh) {
	switch (lh) {
		case 'headline':
			return { mobS: '125%', tabS: '120%', deskM: '115%' };
		case 'h1':
			return { mobS: '125%', tabS: '120%' };
		case 'h2':
			return { mobS: '125%', deskM: '120%' };
		case 'h3':
		case 'h4':
		case 'h5':
		case 'h6':
			return '125%';
		case 'b1':
			return '145%';
		case 'b2':
			return '150%';
		case 'b3':
			return '160%';
		case 'b4':
			return '165%';
		case 'c1':
		case 'c2':
			return '24px';
		case 'c3':
			return '115%';
	}
}

function setCharSpacing(cs) {
	switch (cs) {
		case 'headline':
			return { mobS: '-0.5px', tabS: '-1px' };
		case 'h1':
			return { mobS: '-0.5px', deskM: '-1px' };
		case 'h2':
			'-0.5px';
		case 'h3':
			return { mobS: '0', tabS: '-0.5px' };
		case 'h4':
			return '-0.5px';
		case 'h5':
			return { mobS: '0px', deskM: '-0.5px' };
		case 'h6':
			return '0px';
		case 'b1':
		case 'b2':
			return '-0.25px';
		case 'b3':
		case 'b4':
			return '-0.5px';
		case 'c1':
		case 'c2':
			return '-0.1px';
		case 'c3':
			return '0';
	}
}

const fontWeights = {
	'extra-bold': 800,
	bold: 700,
	medium: 600,
	regular: 400,
	thin: 300,
};

export interface TextProps extends BoxProps {
	as?: 'headline' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1' | 'b2' | 'b3' | 'b4' | 'c1' | 'c2' | 'c3';
	fontWeight?: 'extra-bold' | 'bold' | 'medium' | 'regular' | 'thin';
	lineHeight?: 'h1' | 'h2' | 'h4' | 'b2';

	children?: string | React.ReactNode;
	id?: string;
	dangerouslySetInnerHTML?: { __html: string };
	onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Text = ({ as = 'h6', fontWeight = 'regular', color, children, ...restProps }: TextProps): JSX.Element => {
	const fs = fontSizes[as];
	const lh = setLineHeights(as);
	const cs = setCharSpacing(as);

	function setAs() {
		switch (as) {
			case 'headline':
				return 'h1';
			case 'h1':
				return 'h2';
			case 'h2':
				return 'h2';
			case 'h3':
				return 'h3';
			case 'h4':
				return 'h4';
			case 'h5':
				return 'h5';
			case 'h6':
			case 'b1':
			case 'b2':
			case 'b3':
			case 'b4':
				return 'h6';
			case 'c1':
			case 'c2':
			case 'c3':
				return 'p';
		}
	}

	function setFontWeight() {
		switch (as) {
			case 'headline':
			case 'h1':
			case 'h2':
				return fontWeights.bold;
			case 'h3':
				return { mobS: fontWeights.medium, tabS: fontWeights.bold };
			case 'h4':
				return { mobS: fontWeights.medium, deskM: fontWeights.bold };
			case 'h5':
			case 'h6':
				return fontWeights.medium;
			case 'b3':
				return fontWeights.medium;
			default:
				return fontWeights.regular;
		}
	}

	return (
		<Box
			margin={0}
			padding={0}
			as={setAs()}
			color={color as string}
			fontSize={fs}
			letterSpacing={cs}
			fontWeight={setFontWeight()}
			lineHeight={lh}
			{...restProps}
		>
			{children}
		</Box>
	);
};

export default Text;
