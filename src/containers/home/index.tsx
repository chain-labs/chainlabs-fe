import Box from 'src/components/Box';
import Text from 'src/components/Text';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import If from 'src/components/If';

import BlurSVG from 'svgs/blur.svg';
import { eases, variants } from './animation';
import { opacity } from 'styled-system';

const HomeContainer = ({ control }) => {
	const [loaded, setLoaded] = useState(false);
	const controls = useAnimation();

	useEffect(() => {
		if (loaded) {
			controls.start('visible');
			controls.start('visible');
		}
	}, [loaded]);
	return (
		<React.Fragment>
			<If
				condition={!loaded}
				then={<Box height="100vh" width="100vw" bg="purple-500" position="fixed" zIndex={5} />}
			/>
			<Box height="100vh" pt="19.2rem" column>
				<motion.div
					variants={{
						hidden: {
							opacity: 0,
						},
						visible: { opacity: 1 },
					}}
					animate={controls}
					initial="hidden"
					transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
				>
					<Box position="fixed" left="-150px" top="-450px" zIndex={2}>
						<BlurSVG />
					</Box>
					<Box position="fixed" right="-550px" top="-350px" zIndex={2}>
						<BlurSVG />
					</Box>
				</motion.div>
				<Box overflowY="hidden" position="absolute" top="0" height="100vh" width="100vw">
					<motion.iframe
						variants={{
							hidden: {
								opacity: 0,
							},
							visible: { opacity: 1 },
						}}
						animate={controls}
						initial="hidden"
						transition={{ duration: 1.2, delay: 0, ease: 'easeInOut' }}
						onLoad={() => setLoaded(true)}
						src="https://my.spline.design/wave-1b2723a2aaef61b7d7136bd5358721fa/"
						frameBorder="0"
						width="100%"
						height="100%"
					></motion.iframe>
				</Box>
				<If
					condition={loaded}
					then={
						<Box
							mx="auto"
							maxWidth={{ mobS: '29.4rem', tabS: '46rem', deskM: '65.2rem' }}
							center
							column
							zIndex={2}
						>
							<Text as="h1" mb="mm" textAlign="center">
								<SpanText duration={0.2} mr="ms">
									Decentralized
								</SpanText>
								<SpanText duration={0.4} mr="ms">
									apps
								</SpanText>
								<SpanText duration={0.6} mr="ms">
									for
								</SpanText>
								<SpanText duration={0.4} mr="ms">
									the
								</SpanText>
								<SpanText duration={0.6} mr="ms">
									decentralized
								</SpanText>
								<SpanText duration={0.8} mr="0">
									web.
								</SpanText>
							</Text>
							<motion.div
								variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } }}
								initial="hidden"
								animate="visible"
								transition={{ duration: 0.6, delay: 1.5, ease: 'easeOut' }}
							>
								<Text
									as="b1"
									color="grey-100"
									textAlign="center"
									maxWidth={{ mobS: '29.4rem', tabS: '46rem', deskM: '60rem' }}
									mb="mxxxl"
								>
									A laboratory empowering the consumers by building truly transparent and
									decentralized products.
								</Text>
							</motion.div>
							<motion.div
								variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } }}
								initial="hidden"
								animate="visible"
								transition={{ duration: 0.6, delay: 1.8, ease: 'easeOut' }}
							>
								<Box bg="green-200" px="4.4rem" py="mm" color="purple-500" borderRadius="4px">
									<Text fontSize="20px" lineHeight="24px" fontWeight="medium">
										Get in touch
									</Text>
								</Box>
							</motion.div>
						</Box>
					}
				/>
			</Box>
		</React.Fragment>
	);
};

const SpanText = ({ duration, mr, children }) => {
	return (
		<motion.span
			initial="hidden"
			animate="visible"
			variants={variants.header}
			transition={{ duration, ease: eases.header, delay: 1 }}
		>
			<Box as="span" mr={mr}>
				{children}
			</Box>
		</motion.span>
	);
};

export default HomeContainer;
