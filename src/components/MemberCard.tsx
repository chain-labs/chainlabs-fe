import Box from './Box';
import Image from 'next/image';
import theme from 'src/styleguide/theme';
import Text from './Text';
import { useState } from 'react';

interface Props {
	image: string;
	name: string;
	role: string;
	twitterUrl: string;
	linkedInUrl: string;
}

const MemberCard = ({ image, name, role, twitterUrl, linkedInUrl }: Props) => {
	const [opacity, setOpacity] = useState('1');
	return (
		<Box mr="7.2rem" cursor="pointer">
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
				cursor="pointer"
				center
			>
				<Box zIndex={1} column>
					<Box row center as="a" href={twitterUrl}>
						<Box height="1.5rem" width="1.2rem" position="relative" mr="0.8rem">
							<Image
								src="https://ik.imagekit.io/chainlabs/Website_Media/Social_Media_Icons/twiter-16x16_rqHsdHBAxn.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1655895714672"
								layout="fill"
								objectFit="cover"
							/>
						</Box>
						<Text as="l1" color="green-100">
							{twitterUrl}
						</Text>
					</Box>
					<Box row center as="a" href={linkedInUrl}>
						<Box height="1.5rem" width="1.2rem" position="relative" mr="0.8rem">
							<Image
								src="https://ik.imagekit.io/chainlabs/Website_Media/Social_Media_Icons/linkedin12x12_VAT_YAg_kg.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1655895714673"
								layout="fill"
								objectFit="cover"
							/>
						</Box>
						<Text as="l1" color="green-100">
							{linkedInUrl}
						</Text>
					</Box>
				</Box>
				<Box
					onMouseEnter={() => setOpacity('0.2')}
					onMouseLeave={() => setOpacity('1')}
					opacity={opacity}
					zIndex={1}
				>
					<Image src={image} layout="fill" objectFit="cover" />
				</Box>
			</Box>
			<Text as="h5" color="white-10" mb="mxs">
				{name}
			</Text>
			<Text as="c2" color="grey-200" textTransform="uppercase">
				{role}
			</Text>
		</Box>
	);
};

export default MemberCard;
