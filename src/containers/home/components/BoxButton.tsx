import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';

const BoxButton = ({ bg, text, hoverBg, hoverColor, color }) => {
	return (
		<Box row mt="ml">
			<Box
				as="button"
				bg={bg}
				borderRadius="0.8rem"
				px={{ mobS: 'mm', tabS: 'wm' }}
				py="ms"
				mr="mxxs"
				border="none"
				color="rgba(255, 255, 255, 0.4)"
				cursor="pointer"
				css={`
					&:hover {
						background-color: ${hoverBg};
					}
					&:hover {
						color: #ffffff;
					}
				`}
			>
				<Text
					as="links"
					fontWeight="regular"
					color="primary-white"
					css={`
						&:hover {
							color: ${hoverColor};
						}
					`}
				>
					{text}
				</Text>
			</Box>
		</Box>
	);
};

export default BoxButton;
