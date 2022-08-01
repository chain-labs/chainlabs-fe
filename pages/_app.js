import { useEffect } from 'react';
import { debounce } from 'lodash';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import theme from 'styleguide/theme';

import 'styleguide/globalStyles.css';
import { ThemeProvider } from 'styled-components';
import OuterContainer from 'components/OuterContainer';

Router.onRouteChangeStart = (url) => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();
NProgress.configure({ showSpinner: false });

const MyApp = ({ Component, pageProps }) => {
	useEffect(() => {
		// Set a custom CSS Property for Height
		// See https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		if (process.browser) {
			const vh = window.innerHeight * 0.01;
			// Then we set the value in the --vh custom property to the root of the document
			document.documentElement.style.setProperty('--vh', `${vh}px`);

			const handleResize = debounce(() => {
				// We execute the same script as before
				const vh = window.innerHeight * 0.01;
				document.documentElement.style.setProperty('--vh', `${vh}px`);
			}, 150);

			window.addEventListener('resize', handleResize);
			return () => {
				if (process.browser) {
					window.removeEventListener('resize', handleResize);
				}
			};
		}
	});

	return (
		<>
			<Head>
				<title>Your Web3.0 Development Partner - Chain Labs</title>
				<meta name="robots" content="index, nofollow" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="description"
					content="A laboratory empowering the consumers by building truly transparent and decentralized products."
				/>
				<link rel="canonical" href="https://chainlabs.in/" />
				<link rel="shortcut icon" href="/static/images/logo.png" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
				/>
				<script defer data-domain="chainlabs.in" src="https://plausible.io/js/plausible.js"></script>
				<script
					defer
					data-domain="dev-chainlabs.vercel.app"
					src="https://plausible.io/js/plausible.js"
				></script>
				<script type="application/ld+json">{`{
					"@context": "https://schema.org/",
					"@type": "Organization",
					"name": "Chain Labs",
					"url": "https://chainlabs.in/",
      				"logo": "https://imagekit.io/dashboard/media-library/L1dlYnNpdGVfTWVkaWEvQ2hhaW5fTGFic19CYW5uZXI?sort=DESC_CREATED&view=GRID",
					"description": "A laboratory empowering the consumers by building truly transparent and decentralized products.",
					[
					{
						"@type": "Decentralized",
						"name": "Chain Labs",
						"description": "A laboratory empowering the consumers by building truly transparent and decentralized products.",
					},
					]

}

`}</script>
			</Head>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default MyApp;
