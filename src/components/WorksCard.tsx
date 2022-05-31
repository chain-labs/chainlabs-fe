import Box from './Box';
import Image from 'next/image';
import Text from './Text';
import Button from 'src/components/Button';
import Link from './Link';

export interface WorkCardProps {
	img: string;
	title: string;
	body: string;
	type: 'NFT Launchpad' | 'NFT Collection' | 'Research';
	twitter: string;
	ctaUrl: string;
}

const WorksCard = ({ img, title, body, type, twitter, ctaUrl }: WorkCardProps) => {
	const setTypeBg = (type) => {
		switch (type) {
			case 'NFT Launchpad':
				return '#9DFFF3';
			case 'NFT Collection':
				return '#F8D89A';
			case 'Research':
				return '#93C5FF';
		}
	};

	return (
		<Box
			display="flex"
			flexDirection={{ mobS: 'column', tabS: 'row' }}
			alignItems="center"
			width={{ mobS: '34.3rem', tabS: '86.4rem', deskM: '111.1rem' }}
		>
			<Box
				position="relative"
				minWidth={{ mobS: '100%', tabS: '42.3rem', deskM: '52rem' }}
				height={{ mobS: '20rem', tabS: '24rem', deskM: '30rem' }}
				mr={{ mobS: '0', tabS: 'wxs' }}
				mb={{ mobS: 'mxl', tabS: '0' }}
			>
				<Image src={img} layout="fill" objectFit="cover" />
			</Box>
			<Box>
				<Box row alignItems="center" justifyContent="flex-start" borderRadius="2px" mb="mxs">
					<Text as="h4" color="green-200">
						{title}
					</Text>
					<Box bg={setTypeBg(type)} px="mxs" py="mxxs" ml="ml">
						<Text as="c3" color="grey-400">
							{type}
						</Text>
					</Box>
				</Box>
				<Text as="b3" color="grey-100">
					{body}
				</Text>
				<Box row mt="mm">
					<Box as="a" href={ctaUrl} target="_blank" mr="mxl">
						<Button
							height={{ mobS: '36px', tabS: '48px' }}
							width={{ mobS: '12rem', tabS: '15rem' }}
							text="Learn More"
						/>
					</Box>
					<Link text="Twitter" href={twitter} target="_blank " />
				</Box>
			</Box>
		</Box>
	);
};

export default WorksCard;
