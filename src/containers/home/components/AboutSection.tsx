import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import DownArrow from '../../../svgs/downArrow.svg';

const AboutSection = () => {
	return (
		<Box>
			<Box justifyContent="flex-end" mt="30rem" ml="75rem">
				<Text as="h3" color="primary-green" fontWeight="bold">
					About Chain Labs
				</Text>
				<Text as="b2" fontWeight="thin" color="primary-white" mt="ml">
					Established in 2021, Chain Labs is working towards bringing the power of decentralization to
					everyday life by researching and tackling problems one at a time. We want to make an ecosystem
					governed by people and not by single organizations.
				</Text>
			</Box>
		</Box>
	);
};

export default AboutSection;
