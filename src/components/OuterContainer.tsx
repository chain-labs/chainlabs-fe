import Box from 'components/Box';
import Navbar from 'components/Navbar';

const OuterContainer = ({ children, bg }) => {
	return (
		<Box bg={bg} minHeight="100vh">
			<Navbar />
			{children}
		</Box>
	);
};

export default OuterContainer;
