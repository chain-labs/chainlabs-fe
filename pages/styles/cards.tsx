import React from 'react';
import Box from 'src/components/Box';
// import Member from 'src/containers/members/Member';
import dynamic from 'next/dynamic';

const Member = dynamic(() => import('src/containers/members/Member'));

const Cards = () => {
	return (
		<Box>
			<Member />
		</Box>
	);
};

export default Cards;
