import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';

export const Working = () => {
	return (
		<Box>
			<Box mt="wl">
				<Text
					as="h5"
					lineHeight="h1"
					color="primary-green"
					fontWeight="bold"
					fontFamily="'Epilogue', sans-serif"
				>
					Products we’ve been working on
				</Text>
				<Box mt="ml" mr="500px">
					<Text as="b3">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac ornare cursus risus arcu velit cras
						fusce.
					</Text>
				</Box>
			</Box>
			<Box1 />
			<Box2 />
			<Box3 />
			<Box mt="wl">
				<Text
					as="h5"
					lineHeight="h1"
					color="primary-green"
					fontWeight="bold"
					fontFamily="'Epilogue', sans-serif"
				>
					Have something to talk about?
				</Text>
				<Box mt="ml" mr="500px">
					<Text as="b3">
						Reach out to us at contact@chainlabs.in or shoot us a message at any of our social handles.
					</Text>
				</Box>
			</Box>
		</Box>
	);
};
