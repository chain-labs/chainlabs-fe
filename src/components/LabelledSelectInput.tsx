import { CaretDown } from 'phosphor-react';
import React from 'react';
import theme from 'src/styleguide/theme';
import Box from './Box';
import Text from './Text';

export interface InputProps {
	label: string;
	placeholder?: string;
	set: (any) => void;
	visible: any;
	children?: string | React.ReactNode;
	value?: any;
	width?: string;
	disabled?: boolean;
}

const LabelledSelectInput = ({
	label,
	placeholder,
	set,
	visible,
	value,
	width,
	disabled,
	...restProps
}: InputProps) => {
	return (
		<Box overflow="visible">
			<Box
				display="flex"
				color="grey-100"
				onClick={() => set(!visible)}
				width={{ mobS: '34.2rem', tabL: '37.7rem', deskL: '48rem' }}
			>
				<Box
					as="input"
					readOnly
					placeholder="How can we help you?"
					value={value}
					backgroundColor="transparent"
					border="none"
					width={width}
					borderBottom={!visible ? '1px solid #E6E6FF' : 'none'}
					outline="none"
					cursor="pointer"
					fontSize="16px"
					{...restProps}
					color="grey-100"
					css={`
						::placeholder {
							color: ${theme.colors['grey-100']};
						}
					`}
				></Box>
				<Box ml="-2.2rem" mt="1.1rem" cursor={disabled ? 'not-allowed' : 'pointer'}>
					<CaretDown size={24} color={theme.colors['grey-100']} />
				</Box>
			</Box>
		</Box>
	);
};

export default LabelledSelectInput;
