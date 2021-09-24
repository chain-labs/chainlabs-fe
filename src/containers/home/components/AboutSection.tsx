import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import DownArrow from '../../../svgs/downArrow.svg';

const AboutSection = () => {
	return (
		<Box>
			<Box center>
				<DownArrow />
			</Box>
			<Box display="flex" justifyContent="flex-end" mt="wxl" ml="750px">
				<Box mr="">
					<Text color="primary-green">About Chain Labs</Text>
					<Box mt="ml">
						<Text as="b2" color="primary-white">
							Established in 2021, Chain Labs is working towards bringing the power of decentralization to
							everyday life by researching and tackling problems one at a time. We want to make an
							ecosystem governed by people and not by single organizations.
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default AboutSection;
