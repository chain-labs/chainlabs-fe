import { InlineWidget, PopupWidget } from 'react-calendly';
import Box from 'src/components/Box';
import theme from 'src/styleguide/theme';

const CALENDLY_URL = 'https://calendly.com/chainlabs/social-media-marketing-intern-15-minutes-call';

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
