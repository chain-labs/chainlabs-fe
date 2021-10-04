import Box from 'components/Box';
import Container from 'components/Container';
import React from 'react';
import AboutSection from './components/AboutSection';
import ChainLabsInfo from './components/ChainLabsInfo';
import TopDetail from './components/TopDetail';
import { Working } from './components/Working';

const ChainLabs = () => {
	return (
		<Container>
			<Box overflowX="hidden">
				<TopDetail />
				<AboutSection />
				<ChainLabsInfo />
				<Working />
			</Box>
		</Container>
	);
};

export default ChainLabs;
