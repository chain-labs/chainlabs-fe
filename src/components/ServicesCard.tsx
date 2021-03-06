import React, { useState } from 'react';
import theme from 'src/styleguide/theme';
import Box from './Box';
import Text from './Text';

interface Props {
	title: string;
	description: string;
	url?: string;
}

const ServicesCard = ({ title, description, url }: Props) => {
	const [descriptionTextColor, setDescriptionTextColor] = useState(theme.colors['grey-100']);

	return (
		<Box
			mt={{ mobS: 'wxxs', tabL: 'wxs', deskM: 'wxxs' }}
			cursor="pointer"
			onMouseEnter={() => setDescriptionTextColor(theme.colors['white-10'])}
			onMouseLeave={() => setDescriptionTextColor(theme.colors['grey-100'])}
			pb="mm"
			borderBottom={{ mobS: 'none', tabL: `1px solid ${theme.colors['grey-300']}` }}
			width={{ mobS: '31.5rem', tabS: '64.9rem', deskM: '96.3rem' }}
			mr={{ mobS: '', tabL: '8.8rem', deskM: '0' }}
		>
			<Text
				as="h4"
				color="green-200"
				borderBottom={{ mobS: `0.9px solid ${theme.colors['grey-300']}`, tabL: 'none' }}
			>
				{title}
			</Text>
			<Text as="b2" mt={{ mobS: 'ms', deskM: 'mm' }} color={descriptionTextColor}>
				{description}
			</Text>
		</Box>
	);
};

export default ServicesCard;
