import Box from 'src/components/Box';
import Text from 'src/components/Text';
import { AnimationControls, motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import If from 'src/components/If';

import BlurSVG from 'svgs/blur.svg';
import CircleOpacity from 'svgs/circle-opacity.svg';
import ExponentBox from 'svgs/exponent-box.svg';
import SetCenter from 'svgs/set-center.svg';
import { eases, variants } from './animation';
import { BLOGS, WORKS } from './constants';
import WorksCard from 'src/components/WorkCard';
import Blogcard from 'src/components/Blogcard';

const HomeContainer = ({ control }: { control?: AnimationControls }) => {
	const [loaded, setLoaded] = useState(false);
	const controls = useAnimation();

	useEffect(() => {
		if (loaded) {
			controls.start('visible');
			control?.start('visible');
		}
	}, [loaded]);

	return (
		<Box bg="purple-500">
			<If
				condition={!loaded}
				then={<Box height="100vh" width="100vw" bg="purple-500" position="fixed" zIndex={20} />}
			/>
			<Box height="100vh" pt="19.2rem" column bg="purple-500" className="home-body" position="relative">
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
					<Box position="absolute" left="-150px" top="-450px" zIndex={2}>
						<BlurSVG />
					</Box>
					<Box position="absolute" right="-550px" top="-350px" zIndex={2}>
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
						onLoad={() => {
							console.log('loaded');
							setLoaded(true);
						}}
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
			<Box bg="highlight" position="relative" pl="wl" py="wl" row zIndex={15} pr="wl" between overflow="hidden">
				<Box position="absolute" left="-20%" top="-170%" transform="scale(0.7)">
					<BlurSVG />
				</Box>
				<Box position="absolute" right="-30%" bottom="-150%" transform="scale(0.6)">
					<BlurSVG />
				</Box>
				<Box row alignItems="center" justifyContent="space-between">
					<CircleOpacity />
					<Text as="h5" maxWidth="24rem" ml="mxl">
						Transparent systems with nothing under the carpet.
					</Text>
				</Box>
				<Box row alignItems="center" justifyContent="space-between">
					<ExponentBox />
					<Text as="h5" maxWidth="33rem" ml="mxl">
						Acting as a catalyst to a more transparent, decentralized and sustainable future.{' '}
					</Text>
				</Box>
				<Box row alignItems="center" justifyContent="space-between">
					<SetCenter />
					<Text as="h5" maxWidth="28rem" ml="mxl">
						Driven by innovation and technology towards comsumer betterment.
					</Text>
				</Box>
			</Box>
			<Box my="wl" pl="7.2rem">
				<Text as="h3" color="green-200">
					Our Work
				</Text>
				{WORKS.map((work) => (
					<Box mt="ws">
						<WorksCard {...work} />
					</Box>
				))}
			</Box>
			<Box py="wl" pl="wl" column>
				<Text as="h3" color="green-200">
					Blogs
				</Text>
				<Box my="ws" row>
					{BLOGS.map((blog, idx) => (
						<Box key={idx}>
							<Box ml={idx !== 0 ? 'ws' : '0'} column>
								<Blogcard {...blog} />
								<If
									condition={idx === BLOGS.length - 1}
									then={
										<Text
											as="btn1"
											color="green-200"
											textDecoration="underline"
											alignSelf="flex-end"
											mt="mxl"
										>
											View All
										</Text>
									}
								/>
							</Box>
						</Box>
					))}
				</Box>
			</Box>
			<Box bg="highlight" position="relative" overflow="hidden" px="wl" py="wl">
				<Box position="absolute" transform="scale(0.5) rotate(45deg)" bottom="-120%" left="20%">
					<BlurSVG />
				</Box>
				<Box position="absolute">
					<BlurSVG />
				</Box>
				<Box row between>
					<Text as="h2" color="green-200">
						Have a problem for us to solve?
					</Text>
					<Box bg="green-200" py="1.75rem" px="5rem" borderRadius="4px">
						<Text as="btn1" color="purple-500">
							Get in Touch
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
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
