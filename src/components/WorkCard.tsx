import Box from './Box';
import Image from 'next/image';
import Text from './Text';
import theme from 'src/styleguide/theme';

import { ArrowUpRight } from 'phosphor-react';
import If from './If';
import React from 'react';

export interface WorkCardProps {
	img: string;
	title: string;
	body: string[];
	type: 'NFT Launchpad' | 'NFT Collection' | 'Research Project';
	twitter?: string;
	ctaUrl?: string;
}

const WorksCard = ({ img, title, body, type, twitter, ctaUrl }: WorkCardProps) => {
	const setTypeBg = (type) => {
		switch (type) {
			case 'NFT Launchpad':
				return '#9DFFF3';
			case 'NFT Collection':
				return '#F8D89A';
			case 'Research Project':
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
					<Box bg={setTypeBg(type)} px="mxs" py="mxxs" ml="ml" borderRadius="2px">
						<Text as="c2" color="grey-400">
							{type}
						</Text>
					</Box>
				</Box>
				{body.map((p, index) => (
					<React.Fragment>
						{index !== 0 ? <Box mt={{ mobS: 'mxs', tabS: 'mm' }} /> : null}
						<Text as="b3" color="grey-100">
							{p}
						</Text>
					</React.Fragment>
				))}
				<Box row mt="mm" alignItems="center">
					<If
						condition={!!ctaUrl}
						then={
							<Box
								bg="green-200"
								py={{ mobS: '1.45rem', tabS: '0.75rem' }}
								px={{ mobS: 'mxxxl', tabS: '2.5rem' }}
								borderRadius="4px"
								cursor="pointer"
								css={`
									&:hover {
										background: ${theme.colors['green-300']};
									}
								`}
								as="a"
								href={ctaUrl}
								target="_blank"
							>
								<Text as="btn2" color="purple-500">
									Learn More
								</Text>
							</Box>
						}
					/>
					<If
						condition={!!twitter}
						then={
							<Box
								ml="mxl"
								row
								alignItems="center"
								cursor="pointer"
								as="a"
								href={twitter}
								target="_blank"
							>
								<Text as="btn2" color="green-200" mr="mxxs">
									Twitter
								</Text>
								<ArrowUpRight color={theme.colors['green-200']} size={20} />
							</Box>
						}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default WorksCard;
