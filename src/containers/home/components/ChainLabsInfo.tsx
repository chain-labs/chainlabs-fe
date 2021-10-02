import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import System from '../../../svgs/system.svg';
import InfoBox from './InfoBox';

const ChainLabsInfo = () => {
	return (
		<Box mt="22rem" color="primary-white">
			<Box display="flex" justifyContent="space-between">
				<InfoBox text="Creating transparent systems where nothing can be kept under the carpet.">
					<System />
				</InfoBox>
				<InfoBox text="Acting as a catalyst to a more transparent, decentralized, and sustainable future.">
					<System />
				</InfoBox>
				<InfoBox text="Driven by innovation and tehnology, towards consumer betterment.">
					<System />
				</InfoBox>
			</Box>
		</Box>
	);
};

export default ChainLabsInfo;
