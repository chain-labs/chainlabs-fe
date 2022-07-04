/* eslint-disable @typescript-eslint/ban-ts-comment */
import Box from './Box';
import LogoSVG from 'svgs/logo.svg';
import ChainlabsSVG from 'svgs/chainlabs.svg';
import Text from './Text';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const controls = useAnimation();
	const navbarRef = useRef();

	useEffect(() => {
		controls.start('visible');
		window.addEventListener('scroll', () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition > window.innerHeight) {
				// @ts-ignore undefined errror
				navbarRef.current.style.animation = 'drop 0.5s ease-in-out';
				setScrolled(true);
			} else {
				// @ts-ignore undefined errror
				navbarRef.current.style.animation = '';
				setScrolled(false);
			}
		});
	}, []);

	return (
		<Box
			px="wl"
			py="ms"
			between
			position={scrolled ? 'fixed' : 'absolute'}
			top="0"
			width="100vw"
			bg={scrolled ? 'green-100' : 'transparent'}
			css={`
				transition: background 0.5s ease-in-out;
				> * {
					z-index: 2;
				}
				@keyframes drop {
					0% {
						transform: translateY(-20rem);
						top: 0;
					}
					100% {
						transform: translateY(0);
						top: 0;
					}
				}
				@keyframes lift {
					0% {
						transform: translateY(0);
						top: 0;
					}
					100% {
						transform: translateY(-20rem);
						top: 0;
					}
				}
			`}
			zIndex={10}
			ref={navbarRef}
		>
			<motion.div
				variants={{
					hidden: { opacity: 0 },
					visible: { opacity: 1 },
				}}
				animate={controls}
				initial="hidden"
				transition={{ duration: 0.6, ease: 'easeInOut' }}
			>
				<Box
					color={scrolled ? 'purple-500' : 'green-100'}
					css={`
						transition: all 0.5s ease-in-out;
					`}
					center
				>
					<LogoSVG />
					<Box
						center
						ml="0.6rem"
						color={scrolled ? 'purple-500' : 'white'}
						css={`
							transition: all 0.5s ease-in-out;
						`}
					>
						<ChainlabsSVG />
					</Box>
				</Box>
			</motion.div>
			<Box
				as={motion.div}
				variants={{
					hidden: { opacity: 0 },
					visible: { opacity: 1 },
				}}
				animate={controls}
				initial="hidden"
				transition={{ duration: 0.6, ease: 'easeInOut', staggerChildren: 0.2, delayChildren: 0.3 }}
				row
				py="mm"
				color={scrolled ? 'purple-500' : 'white-10'}
				css={`
					transition: color 0.5s ease-in-out;
				`}
			>
				<motion.div
					variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
					initial="hidden"
					animate={controls}
					transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
				>
					<Text as="c1">PRODUCTS</Text>
				</motion.div>
				<motion.div
					variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
					initial="hidden"
					animate={controls}
					transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
				>
					<Text as="c1" ml="wm">
						ABOUT
					</Text>
				</motion.div>
				<motion.div
					variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
					initial="hidden"
					animate={controls}
					transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
				>
					<Text as="c1" ml="wm">
						SERVICES
					</Text>
				</motion.div>
				<motion.div
					variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
					initial="hidden"
					animate={controls}
					transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.8 }}
				>
					<Text as="c1" ml="wm">
						CONTACT
					</Text>
				</motion.div>
			</Box>
		</Box>
	);
};

export default Navbar;
