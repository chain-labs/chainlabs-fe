import { InlineWidget } from 'react-calendly';
import Box from 'src/components/Box';
import { CALENDLY_LINK } from 'src/constants';

const CALENDLY_URL = CALENDLY_LINK;

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
