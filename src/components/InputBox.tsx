import { ArrowRight } from 'phosphor-react';
import React from 'react';
import theme from 'src/styleguide/theme';
import Box from './Box';

const InputBox = ({ width }) => {
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
			></Box>
			{/* <Box
					mt="15px"
					center
					left="50%"
					position="absolute"
					// ml={{ mobS: '60%', tabS: '38%', tabL: '30%', deskS: '22%', deskM: '21%' }}
				>
					<ArrowRight size={24} color={theme.colors['green-400']} />{' '}
				</Box> */}
		</Box>
	);
};

export default InputBox;
