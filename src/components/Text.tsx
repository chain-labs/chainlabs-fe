import React from 'react';
import Box, { BoxProps } from 'components/Box';

export const fontSizes = {
	h1: { mobS: '3.2rem', tabS: '4rem', deskM: '5.6rem' },
	h2: { mobS: '3.2rem', tabS: '3.2rem', deskM: '4.8rem' },
	h3: { mobS: '3.2rem', tabS: '3.2rem', deskM: '4rem' },
	h4: { mobS: '2.4rem', tabS: '2.4rem', deskM: '3.2rem' },
	h5: { mobS: '1.8rem', tabS: '1.8rem', deskM: '2.4rem' },
	h6: { mobS: '1.6rem', tabS: '1.6rem', deskM: '1.6rem' },
	b1: { mobS: '1.6rem', tabS: '2rem', deskM: '2.4rem' },
	b2: { mobS: '1.6rem', tabS: '1.6rem', deskM: '2rem' },
	b3: { mobS: '1.4rem', tabS: '1.4rem', deskM: '1.6rem' },
	btn1: { mobS: '1.6rem', deskM: '1.8rem' },
	btn2: { mobS: '1.4rem', deskM: '1.6rem' },
	c1: '1.2rem',
	c2: '1rem',
	l1: '1.4rem',
};

function setLineHeights(lh) {
	switch (lh) {
		case 'h1':
			return '125%';
		case 'h2':
			return { mobS: '120%', deskM: '125%' };
		case 'h3':
		case 'h4':
		case 'h6':
			return '125%';
		case 'h5':
			return { mobS: '160%', tabS: '150%', deskM: '125%' };
		case 'b1':
			return { mobS: '145%', tabS: '150%', deskM: '150%' };
		case 'b2':
			return { mobS: '150%', tabS: '160%', deskM: '160%' };
		case 'b3':
			return { mobS: '160%', tabS: '165%', deskM: '160%' };
		case 'btn1':
		case 'btn2':
			return '120%';
		case 'c1':
		case 'l1':
			return '24px';
		case 'c2':
			return '115%';
	}
}

function setCharSpacing(cs) {
	switch (cs) {
		case 'h1':
			return { mobS: '-0.5px', deskM: '-1px' };
		case 'h2':
		case 'h3':
		case 'h4':
		case 'h5':
			return '-0.5px';
		case 'h6':
			return '0px';
		case 'b1':
			return '-0.25px';
		case 'b2':
		case 'b3':
			return { mobS: '-0.5px', deskM: '-0.25px' };
		case 'btn1':
		case 'btn2':
			return '-0.25px';
		case 'c1':
		case 'c2':
		case 'l1':
			return '0.1px';
	}
}

const fontWeights = {
	bold: 700,
	medium: 500,
	regular: 400,
};

export interface TextProps extends BoxProps {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1' | 'b2' | 'b3' | 'btn1' | 'btn2' | 'c1' | 'c2' | 'l1';
	fontWeight?: 'bold' | 'medium' | 'regular';

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
			case 'h1':
				return 'h1';
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
			case 'c1':
			case 'c2':
				return 'p';
		}
	}

	function setFontWeight() {
		switch (as) {
			case 'h1':
			case 'h2':
			case 'h3':
				return fontWeights.bold;
			case 'h4':
				return { mobS: fontWeights.medium, deskM: fontWeights.bold };
			case 'h5':
				return { mobS: fontWeights.regular, deskM: fontWeights.medium };
			case 'h6':
			case 'c3':
				return fontWeights.medium;
			case 'c1':
			case 'c2':
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
