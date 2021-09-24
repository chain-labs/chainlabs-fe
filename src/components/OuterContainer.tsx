import Box from 'components/Box';
import Container from 'components/Container';
import Text from 'components/Text';
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
