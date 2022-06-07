import React, { useState } from 'react';
import theme from 'src/styleguide/theme';
import Box, { BoxProps } from './Box';
import Text from './Text';

interface Props extends BoxProps {
	setValue: (any) => void;
	value: any;
	name?: string;
	as?: any;
	type?: any;
	dangerouslySetInnerHTML?: { __html: string };
}

const TextInput = ({ as, value, setValue, type, name, ...restProps }: Props): JSX.Element => {
	return (
		<Box
			as={as}
			placeholder={name}
			backgroundColor="transparent"
			color="grey-100"
			border={as === 'input' ? 'none' : ''}
			borderBottom={as === 'input' ? '1px solid #FFFFFF' : ''}
			outline={as === 'input' ? 'none' : ''}
			width={{ mobS: '34.2rem', tabL: '37.7rem', deskL: '48rem' }}
			fontFamily="Inter"
			fontSize="1.4rem"
			line-height="160%"
			pb="mxxs"
			{...restProps}
			type={type}
			css={`
				resize: none;
				::placeholder {
					color: ${theme.colors['grey-100']};
				}
			`}
			maxLength="360"
		/>
	);
};

export default TextInput;
