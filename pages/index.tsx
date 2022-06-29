import Head from 'next/head';
import HomeComponent from 'src/containers/home';

const Home = () => {
	return (
		<>
			<Head>
				<title>Chainlabs | Decentralized apps for the decentralized web.</title>
			</Head>
			<HomeComponent />
		</>
	);
};

export default Home;
