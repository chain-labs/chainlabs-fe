import { ArrowRight } from 'phosphor-react';
import React from 'react';
import theme from 'src/styleguide/theme';
import Box, { BoxProps } from './Box';

interface Props extends BoxProps {
	setValue: (any) => void;
	value: any;
	dangerouslySetInnerHTML?: { __html: string };
	setColor: (any) => void;
}

const InputBox = ({ width, value, setValue, setColor }) => {
	return (
		<Box row alignItems="center">
			<Box
				as="input"
				border="1px solid white"
				py="11px"
				pl="17px"
				bg="transparent"
				borderRadius="4px"
				width={width}
				mt="mm"
				placeholder="Email Address"
				css={`
					::placeholder {
						color: ${theme.colors['green-400']};
					}
				`}
				color={theme.colors['green-100']}
				onChange={(e) => setValue(e.target.value)}
				onFocus={() => setColor('green-100')}
				onBlur={() => setColor('green-400')}
				value={value}
			></Box>
		</Box>
	);
};

export default InputBox;
