import Box from 'components/Box';
import React from 'react';
import InfoBox from './InfoBox';

const ChainLabsInfo = () => {
	return (
		<Box mt={{ mobS: 'ml', tabS: 'wxl' }} color="primary-white">
			<Box display="flex" justifyContent="center" flexDirection={{ mobS: 'column', tabS: 'row' }} px="mm">
				<InfoBox
					icon="/static/images/icon_1.png"
					text="Creating transparent systems where nothing can be kept under the carpet."
				></InfoBox>
				<InfoBox
					icon="/static/images/icon_2.png"
					text="Acting as a catalyst to a more transparent, decentralized, and sustainable future."
				></InfoBox>
				<InfoBox
					icon="/static/images/icon_3.png"
					text="Driven by innovation and tehnology, towards consumer betterment."
				></InfoBox>
			</Box>
		</Box>
	);
};

export default ChainLabsInfo;
