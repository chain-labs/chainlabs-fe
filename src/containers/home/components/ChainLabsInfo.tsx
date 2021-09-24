import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import System from '../../../svgs/system.svg';

const ChainLabsInfo = () => {
	return (
		<Box mt="wxxl">
			<Box display="flex" justifyContent="space-between">
				<Box mr="mxxl">
					<System />
					<Box mr="mxxl">
						<Text as="b2" textAlign="left">
							Creating transparent systems where nothing can be kept under the carpet.
						</Text>
					</Box>
				</Box>
				<Box mr="mxxl">
					<System />
					<Box mr="mxxl">
						<Text as="b2" textAlign="left">
							Acting as a catalyst to a more transparent, decentralized, and sustainable future.
						</Text>
					</Box>
				</Box>
				<Box mr="mxxl">
					<System />
					<Box mr="mxxl">
						<Text as="b2" textAlign="left">
							Driven by innovation and tehnology, towards consumer betterment.
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default ChainLabsInfo;
