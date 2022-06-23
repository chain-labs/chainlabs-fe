import { ArrowRight } from 'phosphor-react';
import React from 'react';
import theme from 'src/styleguide/theme';
import Box from './Box';

const InputBox = () => {
	return (
		<Box row center>
			<Box
				as="input"
				border="1px solid white"
				py="11px"
				pl="17px"
				bg="transparent"
				borderRadius="4px"
				width="36rem"
				mt="mm"
				placeholder="Email Address"
				css={`
					::placeholder {
						color: ${theme.colors['green-400']};
					}
				`}
				color={theme.colors['green-100']}
			></Box>
			<Box mt="15px" ml="320px" position="absolute" center>
				<ArrowRight size={24} color={theme.colors['green-400']} />{' '}
			</Box>
		</Box>
	);
};

export default InputBox;
