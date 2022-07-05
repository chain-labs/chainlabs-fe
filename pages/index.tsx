import Head from 'next/head';
import OuterContainer from 'src/components/OuterContainer';
import HomeComponent from 'src/containers/home';

const Home = () => {
	return (
		<>
			<Head>
				<title>Chainlabs | Decentralized apps for the decentralized web.</title>
			</Head>
			<OuterContainer bg="purple-500">
				<HomeComponent />
			</OuterContainer>
		</>
	);
};

export default Home;
