import React from 'react';
import Box from 'src/components/Box';
import ServicesCard from 'src/components/ServicesCard';
import Text from 'src/components/Text';

const Services = () => {
	return (
		<Box bg="purple-500" minHeight="100vh">
			<Box pl={{ mobS: 'mxl', tabL: 'wl' }} pt={{ mobS: 'wm', tabL: 'wm', deskM: 'wxl' }}>
				<Text as="h2" color="green-100">
					Services we provide
				</Text>
				<Box
					mt={{ mobS: '0', deskM: 'wxxs' }}
					row
					flexDirection={{ mobS: 'row', deskM: 'column' }}
					flexWrap="wrap"
				>
					<ServicesCard
						title="Smart Contract Development"
						description="We've got everything covered, from your MVPs to production-ready contracts!"
					/>
					<ServicesCard
						title="Web3 Research"
						description="Are you having trouble making your website web3-friendly? Don't worry, we'll make your websites web3 compliant and capable of interacting with smart contracts."
					/>
					<ServicesCard
						title="Technical Advisory"
						description="We advise you throughout the project life cycle to ensure you don't run into any technical issues. As an experienced team, we can provide extensive information and advice for your project."
					/>
					<ServicesCard
						title="Web3 Integration"
						description="Are you having trouble making your website web3-friendly? Don't worry, we'll make your websites web3 compliant and capable of interacting with smart contracts."
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default Services;
