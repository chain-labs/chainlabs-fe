import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import { EMAIL_CONTACT } from 'src/constants';

import BoxComp from './BoxComp';

export const Working = () => {
	return (
		<Box id="products">
			<Box mt={{ mobS: '12rem', tabL: '13rem', deskL: '26rem' }} px={{ mobS: 'ml', tabL: '0' }} mb="wl">
				<Text as="h2" fontWeight="bold" color="primary-green">
					What we’ve been working on
				</Text>
				<Box mt={{ mobS: 'mm', tabS: 'mxl' }} maxWidth="64rem">
					<Text as="b1" fontWeight="regular" color="primary-white">
						These are some of the projects that the team is working on.
					</Text>
				</Box>
			</Box>
			<BoxComp
				title="Warriors"
				subtext="Warriors is a generation-based NFT Project, with each warrior being unique and accompanied by a
						story."
				launched
				image="/static/images/warriors.png"
			></BoxComp>
			<BoxComp
				title="IPVC"
				subtext="Inter-planetary vaccine certificate is a secure health-data interoperability layer for already
						existing vaccine platforms."
				image="/static/images/ipvc.png"
			></BoxComp>
			<BoxComp
				title="Mystery project"
				subtext={
					<Box column>
						<Text as="b2">???????????????????????????????</Text>
						<Text as="b2">?????????????????????????????????</Text>
						<Text as="b2">???????????????????????????????</Text>
					</Box>
				}
				image="/static/images/mystery.png"
			></BoxComp>
			<Box mt={{ mobS: 'wl', tabL: 'wxxl', deskL: '25rem' }} px={{ mobS: 'ml', tabL: '0' }}>
				<Text as="h2" fontWeight="bold" color="primary-green">
					Have something to talk about?
				</Text>
				<Box mt="mxl" maxWidth="58rem">
					<Text as="b1" fontWeight="regular" color="primary-white">
						Reach out to us at{' '}
						<Box
							fontSize="inherit"
							as="a"
							href={`mailto:${EMAIL_CONTACT}`}
							fontWeight="regular"
							color="primary-green"
						>
							{EMAIL_CONTACT}
						</Box>{' '}
						or shoot us a message at any of our social handles.
					</Text>
				</Box>
			</Box>
		</Box>
	);
};
