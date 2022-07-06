/* eslint-disable @typescript-eslint/ban-ts-comment */
import Box from './Box';
import LogoSVG from 'svgs/logo.svg';
import ChainlabsSVG from 'svgs/chainlabs.svg';
import Text from './Text';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';
import If from './If';
import { ArrowRight } from 'phosphor-react';
import theme from 'src/styleguide/theme';

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [expandMenu, setExpandMenu] = useState(false);
	const controls = useAnimation();
	const navbarRef = useRef();
	const router = useRouter();

	useEffect(() => {
		console.log({ path: router.pathname });

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
			px={{ mobS: 'mxl', tabS: 'wl' }}
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
			zIndex={30}
			ref={navbarRef}
		>
			<motion.div
				variants={{
					hidden: { opacity: 0 },
					visible: { opacity: 1 },
				}}
				animate={controls}
				initial={router.pathname === '/' ? 'hidden' : 'visible'}
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
						display={{ mobS: 'none', tabS: 'block' }}
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
				initial={router.pathname === '/' ? 'hidden' : 'visible'}
				transition={{ duration: 0.6, ease: 'easeInOut', staggerChildren: 0.2, delayChildren: 0.3 }}
				row
				py="mm"
				color={scrolled ? 'purple-500' : 'white-10'}
				css={`
					transition: color 0.5s ease-in-out;
				`}
				display={{ mobS: 'none', tabS: 'flex' }}
			>
				<motion.div
					variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
					initial={router.pathname === '/' ? 'hidden' : 'visible'}
					animate={controls}
					transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
				>
					<Text as="c1">PRODUCTS</Text>
				</motion.div>
				<motion.div
					variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
					initial={router.pathname === '/' ? 'hidden' : 'visible'}
					animate={controls}
					transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
				>
					<Text as="c1" ml="wm">
						ABOUT
					</Text>
				</motion.div>
				<motion.div
					variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
					initial={router.pathname === '/' ? 'hidden' : 'visible'}
					animate={controls}
					transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
				>
					<Text as="c1" ml="wm">
						SERVICES
					</Text>
				</motion.div>
				<motion.div
					variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
					initial={router.pathname === '/' ? 'hidden' : 'visible'}
					animate={controls}
					transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.8 }}
				>
					<Text as="c1" ml="wm">
						CONTACT
					</Text>
				</motion.div>
			</Box>
			<Box display={{ mobS: 'block', tabS: 'none' }}>
				<Text as="c1" color={scrolled ? 'purple-500' : 'inherit'} onClick={() => setExpandMenu(true)}>
					Menu
				</Text>
				<If
					condition={expandMenu}
					then={
						<Box bg="purple-400" width="100vw" position="absolute" left="0" top="0" as={motion.div}>
							<Box row alignItems="center" justifyContent="space-between" px="mxl" pt="ms">
								<Box color={scrolled ? 'purple-500' : 'green-100'}>
									<LogoSVG />
								</Box>
								<Text
									as="c1"
									color={scrolled ? 'purple-500' : 'inherit'}
									onClick={() => setExpandMenu(false)}
								>
									Close
								</Text>
							</Box>
							<Box mt="wxxs" center column mb="11rem">
								<Box row between width="12rem" mb="mm">
									<Text as="l1">WORK</Text>
									<ArrowRight color={theme.colors['green-200']} size={20} />
								</Box>
								<Box row between width="12rem" mb="mm">
									<Text as="l1">ABOUT</Text>
									<ArrowRight color={theme.colors['green-200']} size={20} />
								</Box>
								<Box row between width="12rem" mb="mm">
									<Text as="l1">SERVICES</Text>
									<ArrowRight color={theme.colors['green-200']} size={20} />
								</Box>
								<Box row between width="12rem">
									<Text as="l1">CONTACT</Text>
									<ArrowRight color={theme.colors['green-200']} size={20} />
								</Box>
							</Box>
						</Box>
					}
				/>
			</Box>
		</Box>
	);
};

export default Navbar;
