import Head from 'next/head';
import OuterContainer from 'src/components/OuterContainer';
import HomeContainer from 'src/containers/home';

const Home = () => {
	return (
		<>
			<Head>
				<title>Chainlabs | Decentralized apps for the decentralized web.</title>
			</Head>
			<OuterContainer bg="purple-500">
				<HomeContainer />
			</OuterContainer>
		</>
	);
};

export default Home;
