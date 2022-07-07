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
		// Outer Box
		<Box bg="purple-500">
			{/* Loading Overlay */}
			<If
				condition={!loaded}
				then={<Box height="100vh" width="100vw" bg="purple-500" position="fixed" zIndex={20} />}
			/>
			{/* Hero Section */}
			<Box
				height="100vh"
				pt={{ mobS: '17.2rem', tabS: '19.2rem' }}
				column
				bg="purple-500"
				className="home-body"
				position="relative"
			>
				{/* Blur Overlays */}
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
				{/* Spline Bg */}
				<Box
					overflowY="hidden"
					position="absolute"
					top="0"
					left={{ mobS: '-50%', tabS: '0' }}
					height="100vh"
					width="200vw"
				>
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
				{/* Main Hero Section */}
				<If
					condition={loaded}
					then={
						<Box
							mx={{ mobS: 'mxl', tabS: 'auto' }}
							maxWidth={{ mobS: '29.4rem', tabS: '46rem', deskM: '65.2rem' }}
							center
							column
							zIndex={2}
						>
							<Text as="h1" mb={{ mobS: 'ms', tabS: 'mm' }} textAlign={{ mobS: 'start', tabS: 'center' }}>
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
									textAlign={{ mobS: 'start', tabS: 'center' }}
									maxWidth={{ mobS: '29.4rem', tabS: '46rem', deskM: '60rem' }}
									mb="mxxxl"
								>
									A laboratory empowering the consumers by building truly transparent and
									decentralized products.
								</Text>
							</motion.div>
							<Box
								as={motion.div}
								alignSelf="flex-start"
								variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } }}
								initial="hidden"
								animate="visible"
								transition={{ duration: 0.6, delay: 1.8, ease: 'easeOut' }}
							>
								<Box
									bg="green-200"
									px={{ mobS: '3.6rem', tabS: '4.4rem' }}
									py="mm"
									color="purple-500"
									borderRadius="4px"
								>
									<Text as="btn1">Get in touch</Text>
								</Box>
							</Box>
						</Box>
					}
				/>
			</Box>
			{/* 3 Point Features Section */}
			<Box
				bg="highlight"
				position="relative"
				px={{ mobS: '5rem', tabS: 'wl' }}
				py="wl"
				display="flex"
				flexDirection={{ mobS: 'column', tabS: 'row' }}
				zIndex={15}
				between
				overflow="hidden"
			>
				<Box
					position="absolute"
					left={{ mobS: '-20%', tabS: '-20%' }}
					top={{ mobS: '-40%', tabS: '-170%' }}
					transform="scale(0.7)"
				>
					<BlurSVG />
				</Box>
				<Box
					position="absolute"
					right={{ mobS: '-25%', tabS: '-30%' }}
					bottom={{ mobS: '-40%', tabS: '-150%' }}
					transform="scale(0.6)"
				>
					<BlurSVG />
				</Box>
				<Box
					display="flex"
					flexDirection={{ mobS: 'column', tabS: 'row' }}
					alignItems="center"
					justifyContent="space-between"
					mb={{ mobS: 'wxxs', tabS: '0' }}
				>
					<CircleOpacity />
					<Text
						as="h5"
						maxWidth="24rem"
						textAlign={{ mobS: 'center', tabS: 'start' }}
						ml={{ mobS: '0', tabS: 'mxl' }}
						mt={{ mobS: 'mm', tabS: '0' }}
					>
						Transparent systems with nothing under the carpet.
					</Text>
				</Box>
				<Box
					display="flex"
					flexDirection={{ mobS: 'column', tabS: 'row' }}
					alignItems="center"
					justifyContent="space-between"
					mb={{ mobS: 'wxxs', tabS: '0' }}
				>
					<ExponentBox />
					<Text
						as="h5"
						maxWidth="33rem"
						textAlign={{ mobS: 'center', tabS: 'start' }}
						ml={{ mobS: '0', tabS: 'mxl' }}
						mt={{ mobS: 'mm', tabS: '0' }}
					>
						Acting as a catalyst to a more transparent, decentralized and sustainable future.{' '}
					</Text>
				</Box>
				<Box
					display="flex"
					flexDirection={{ mobS: 'column', tabS: 'row' }}
					alignItems="center"
					justifyContent="space-between"
				>
					<SetCenter />
					<Text
						as="h5"
						maxWidth="28rem"
						textAlign={{ mobS: 'center', tabS: 'start' }}
						ml={{ mobS: '0', tabS: 'mxl' }}
						mt={{ mobS: 'mm', tabS: '0' }}
					>
						Driven by innovation and technology towards consumer betterment.
					</Text>
				</Box>
			</Box>
			{/* Our Work Section */}
			<Box column alignItems={{ mobS: 'center', tabS: 'flex-start' }}>
				<Box my={{ mobS: 'wxs', tabS: 'wl' }} pl={{ mobS: '0', tabS: 'wl' }}>
					<Text as="h3" color="green-200">
						Our Work
					</Text>
					{WORKS.map((work) => (
						<Box mt="ws">
							<WorksCard {...work} />
						</Box>
					))}
				</Box>
			</Box>
			{/* Blogs Section */}
			<Box center column>
				<Box py={{ mobS: 'wxs', tabS: 'wl' }} pl={{ mobS: '0', tabS: 'wl' }} column>
					<Text as="h3" color="green-200">
						Blogs
					</Text>
					<Box my={{ mobS: '0', tabS: 'ws' }} display="flex" flexDirection={{ mobS: 'column', tabS: 'row' }}>
						{BLOGS.map((blog, idx) => (
							<Box key={idx}>
								<Box
									ml={idx !== 0 ? { mobS: '0', tabS: 'wxs' } : '0'}
									mt={idx !== 0 ? { mobS: 'wxs', tabS: '0' } : '0'}
									column
								>
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
			</Box>
			{/* Contact Section */}
			<Box
				bg="highlight"
				position="relative"
				overflow="hidden"
				px={{ mobS: '6.5rem', tabS: 'wl' }}
				py={{ mobS: 'wxs', tabS: 'wl' }}
			>
				<Box
					position="absolute"
					transform="scale(0.5) rotate(45deg)"
					bottom={{ mobS: '-150%', tabS: '-120%' }}
					left={{ mobS: '-110%', tabS: '20%' }}
				>
					<BlurSVG />
				</Box>
				<Box position="absolute">
					<BlurSVG />
				</Box>
				<Box between flexDirection={{ mobS: 'column', tabS: 'row' }}>
					<Text as="h2" color="green-200" textAlign={{ mobS: 'center', tabS: 'start' }}>
						Have a problem for us to solve?
					</Text>
					<Box
						bg="green-200"
						py={{ mobS: 'ms', tabS: '1.75rem' }}
						px={{ mobS: '3.6rem', tabS: '5rem' }}
						borderRadius="4px"
						mt={{ mobS: 'mxxxl', tabS: '0' }}
					>
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
