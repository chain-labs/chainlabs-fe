import { InlineWidget, PopupWidget } from 'react-calendly';
import Box from 'src/components/Box';
import theme from 'src/styleguide/theme';

const CALENDLY_URL = 'https://calendly.com/chainlabs/social-media-marketing-intern-15-minutes-call';

const CalendlyPage = () => {
	if (process.browser) {
		return (
			<Box>
				<InlineWidget url={CALENDLY_URL} styles={{ background: theme.colors['purple-500'], height: '100vh' }} />
			</Box>
		);
	} else return <></>;
};

export default CalendlyPage;
