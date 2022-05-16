import Box from 'components/Box';

const OuterContainer = ({ children, bg }) => {
	return (
		<Box bg={bg} minHeight="100vh">
			{children}
		</Box>
	);
};

export default OuterContainer;
