import Box from './Box';
import Container from './Container';
import Text from 'components/Text';

const OuterContainer = ({ children, bg }) => {
	return (
		<Box bg={bg} minHeight="100vh">
			<Box py="mxxxl" bg="rgba(236, 236, 236, 0.09)">
				<Container>
					<Box between>
						<Box center>
							<Box as="img" src="/static/images/logo.png" mr="mxl" />
							<Box as="img" src="/static/images/brand.png" />
						</Box>
						<Box color="primary-white">
							<Text as="links">Vision</Text>
							<Text as="links" ml="wm">
								Products
							</Text>
							<Text as="links" ml="wm">
								Contact
							</Text>
						</Box>
					</Box>
				</Container>
			</Box>
			{children}
		</Box>
	);
};

export default OuterContainer;
