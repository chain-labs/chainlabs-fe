import { InlineWidget } from 'react-calendly';
import Box from 'src/components/Box';

const CALENDLY_URL = 'https://calendly.com/simplr-collection/free-consultation?month=2022-07';

const CalendlyPage = () => {
	if (process.browser) {
		return (
			<Box bg="purple-500">
				<InlineWidget url={CALENDLY_URL} styles={{ height: '100vh', width: '100vw' }} />
			</Box>
		);
	} else return <></>;
};

export default CalendlyPage;
