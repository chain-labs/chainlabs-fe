import Box from './Box';
import Image from 'next/image';
import Text from './Text';

export interface WorkCardProps {
	img: string;
	title: string;
	body: string;
	type: 'NFT Launchpad' | 'NFT Collection' | 'Research';
	twitter: string;
	ctaUrl: string;
}

const WorksCard = ({ img, title, body, type, twitter, ctaUrl }: WorkCardProps) => {
	return (
		<Box row>
			<Box position="relative" height="30rem" width="52rem" mr="wxs">
				<Image src={img} layout="fill" objectFit="contain" />
			</Box>
			<Box>
				<Box>
					<Text as="h4" color="green-200">
						{title}
					</Text>
				</Box>
				<Text as="b3" color="grey-100">
					{body}
				</Text>
				<Box></Box>
			</Box>
		</Box>
	);
};

export default WorksCard;
