// eslint-disable-next-line import/no-unresolved
import { ArrowUpRight } from 'phosphor-react';
import React from 'react';
import Box from 'src/components/Box';
import Text from 'src/components/Text';
import theme from 'src/styleguide/theme';

const Link = ({ text, href, target }) => {
	return (
		<Box as="a" href={href} row color="green-200" cursor="pointer" alignItems="center" target={target}>
			<Text as="b3" mx="mxxs" color="green-200">
				{text}
			</Text>
			<ArrowUpRight size={20} color={theme.colors['green-200']} />
		</Box>
	);
};

export default Link;
