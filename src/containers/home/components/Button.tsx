import React from 'react';
import Box from 'src/components/Box';
import Text from 'src/components/Text';
import theme from 'src/styleguide/theme';

const Button = ({ width, height, text, ...restProps }) => {
	return (
		<Box
			center
			bg="#00E08E"
			boxShadow="inset 0px -2px 5px #04FFA4"
			borderRadius="4px"
			width={width}
			height={height}
			cursor="pointer"
			css={`
				&:hover {
					background-color: ${theme.colors['green-100']};
				}
			`}
			mb="mxxl"
			{...restProps}
		>
			<Text as="btn1" color="purple-500">
				{text}
			</Text>
		</Box>
	);
};

export default Button;
