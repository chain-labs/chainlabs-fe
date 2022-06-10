import React from 'react';
import Box from 'src/components/Box';
import TestimonialCard from 'src/components/TestimonialCard';

const Testimonial = () => {
	return (
		<Box bg="purple-500" minHeight="100vh" row justifyContent="space-around">
			<TestimonialCard
				url="https://ik.imagekit.io/chainlabs/Website_Media/Desktop/Services/Desktop_Primobots_gX1euCNLy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654882459115"
				comment="The team at Chain Labs delivered on their promise and beyond. Their smart contract work for Primobots and post-deployment support had a huge positive impact on our NFT project."
				name="Ish"
				title="Founder, Primobots"
			/>
			<TestimonialCard
				url="https://ik.imagekit.io/chainlabs/Website_Media/Desktop/Services/Desktop_Primobots_gX1euCNLy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654882459115"
				comment="The team at Chain Labs delivered on their promise and beyond. Their smart contract work for Primobots and post-deployment support had a huge positive impact on our NFT project."
				name="Ish"
				title="Founder, Primobots"
			/>
		</Box>
	);
};

export default Testimonial;
