import Box from './Box';
import Image from 'next/image';
import theme from 'src/styleguide/theme';
import Text from './Text';
import { useState } from 'react';
import { TwitterFill, LinkedinFill, Globe } from 'akar-icons';
import If from './If';

interface Props {
	image: string;
	name: string;
	role: string;
	twitterUrl: string;
	linkedInUrl: string;
	portfolioUrl?: string;
}

const MemberCard = ({ image, name, role, twitterUrl, linkedInUrl, portfolioUrl }: Props) => {
	const [opacity, setOpacity] = useState('1');
	const [displayInfo, setDisplayInfo] = useState(false);
	const handleDisplay = () => {
		setOpacity(opacity === '0.2' ? '1' : '0.2');
		setDisplayInfo(!displayInfo);
	};
	return (
		<Box mr={{ mobS: '0rem' }} cursor="pointer">
			<Box
				height={{ mobS: '14.1rem', tabS: '18.7rem', deskM: '24rem' }}
				width={{ mobS: '14rem', tabS: '18.7rem', deskM: '24rem' }}
				position="relative"
				boxShadow={{
					mobS: `${148.66 / 15}px ${148.66 / 15}px 0 0 ${theme.colors['green-100']}`,
					tabS: `${187 / 15}px ${187 / 15}px 0 0 ${theme.colors['green-100']}`,
					deskM: `${240 / 15}px ${240 / 15}px 0 0 ${theme.colors['green-100']}`,
				}}
				mb={{ mobS: 'mxl', tabS: '3.6rem', deskM: 'mxxl' }}
				cursor="pointer"
				center
				onMouseEnter={handleDisplay}
				onMouseLeave={handleDisplay}
			>
				<Box zIndex={1} column display={displayInfo ? 'flex' : 'none'}>
					<If
						condition={!!twitterUrl}
						then={
							<Box row center as="a" target="_blank" href={`https://www.twitter.com/${twitterUrl}`}>
								<Box height="1.6rem" width="1.6rem" mr="0.8rem" center>
									<TwitterFill strokeWidth="2" size="36" color="#55ACEE" />{' '}
								</Box>
								<Text as="l1" color="green-100">
									@{twitterUrl}
								</Text>
							</Box>
						}
					/>
					<If
						condition={!!linkedInUrl}
						then={
							<Box row center as="a" target="_blank" href={`https://www.linkedin.com${linkedInUrl}`}>
								<Box height="1.6rem" width="1.6rem" mr="0.8rem" bg="#0A66C2" center>
									<LinkedinFill strokeWidth="2" size="12" color="white" />{' '}
								</Box>
								<Text as="l1" color="green-100">
									{linkedInUrl}
								</Text>
							</Box>
						}
					/>
					<If
						condition={!!portfolioUrl}
						then={
							<Box row center as="a" target="_blank" href={portfolioUrl}>
								<Box height="1.6rem" width="1.6rem" mr="0.8rem" center>
									<Globe strokeWidth="2" size="12" color="white" />
								</Box>
								<Text as="l1" color="green-100">
									{portfolioUrl}
								</Text>
							</Box>
						}
					/>
				</Box>
				<Box opacity={opacity} zIndex={0}>
					<Image alt="Error Occured" src={image} layout="fill" objectFit="cover" />
				</Box>
			</Box>
			<Text as="h5" width={{ mobS: '14rem', tabS: '18.7rem', deskM: '24rem' }} color="white-10" mb="mxs">
				{name}
			</Text>
			<Text
				as="c2"
				width={{ mobS: '14rem', tabS: '18.7rem', deskM: '24rem' }}
				color="grey-200"
				textTransform="uppercase"
			>
				{role}
			</Text>
		</Box>
	);
};

export default MemberCard;
