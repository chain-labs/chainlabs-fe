import Box from 'components/Box';
import { AnimateSharedLayout, motion } from 'framer-motion';
import Navbar from './Navbar';

const OuterContainer = ({ children, bg, controls }) => {
	return (
		<Box bg={bg} minHeight="100vh">
			<Navbar controls={controls} />
			{children}
		</Box>
	);
};

export default OuterContainer;
