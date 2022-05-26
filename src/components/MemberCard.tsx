import Box from './Box';
import Image from 'next/image';
import theme from 'src/styleguide/theme';
import Text from './Text';

interface Props {
	image: string;
	name: string;
	role: string;
}

const MemberCard = ({ image, name, role }: Props) => {
	return (
		<Box mr="7.2rem">
			<Box
				height={{ mobS: '14.866rem', tabS: '18.7rem', deskM: '24rem' }}
				width={{ mobS: '14.866rem', tabS: '18.7rem', deskM: '24rem' }}
				position="relative"
				boxShadow={{
					mobS: `${148.66 / 15}px ${148.66 / 15}px 0 0 ${theme.colors['green-100']}`,
					tabS: `${187 / 15}px ${187 / 15}px 0 0 ${theme.colors['green-100']}`,
					deskM: `${240 / 15}px ${240 / 15}px 0 0 ${theme.colors['green-100']}`,
				}}
				mb={{ mobS: 'mxl', tabS: '3.6rem', deskM: 'mxxl' }}
			>
				<Image src={image} layout="fill" objectFit="cover" />
			</Box>
			<Text as="h5" color="white-10" mb="mxs">
				{name}
			</Text>
			<Text as="c3" color="grey-200" textTransform="uppercase">
				{role}
			</Text>
		</Box>
	);
};

export default MemberCard;
