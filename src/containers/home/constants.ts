import { BlogCardProps } from 'src/components/Blogcard';
import { WorkCardProps } from 'src/components/WorkCard';

export const WORKS: WorkCardProps[] = [
	{
		img: 'https://ik.imagekit.io/chainlabsfe/banners/tr:lo-true/simplr_banner.png',
		title: 'Simplr Collection',
		body: [
			'A simple to use, no-code platform to create NFT smart contracts to help launch your launch your NFT Collection hassle-free.',
		],
		type: 'NFT Launchpad',
		twitter: 'https://twitter.com/SimplrDAO',
		ctaUrl: 'https://simplrcollection.com/',
	},
	{
		img: 'https://ik.imagekit.io/chainlabsfe/banners/primobots_banner_BQxEcaq_n.png',
		title: 'Primobots',
		body: [
			'5555 Fully 3D Primobots. A story-driven NFT brand.',
			'Our Role: Smart Contract, Web3 Technical Advisory, Web3 Frontend Integration',
		],
		type: 'NFT Collection',
		twitter: 'https://twitter.com/primobots',
		ctaUrl: 'https://primobots.io/',
	},
	{
		img: 'https://ik.imagekit.io/chainlabsfe/banners/dob_banner_x2Gc8KtPJ.png',
		title: 'Daughters of Blockchain',
		body: [
			'A female-centric NFT project created by Jillian Hinds-Williams and Lavinia Osbourne.',
			'Our Role: Smart Contract, Web3 Technical Advisory, Mint Page Development',
		],
		type: 'NFT Collection',
		twitter: 'https://twitter.com/DaughtersOfBC',
		ctaUrl: 'https://mint.daughtersofblockchain.com/',
	},
	{
		img: 'https://ik.imagekit.io/chainlabsfe/banners/ipvc_banner_sdlc4ZGET.png',
		title: 'IPVC',
		body: [
			'A research that shows how tokenizing vaccination certificates can help solve the issues faced by already existing medical systems when it comes to cross-border medical data verification.',
		],
		type: 'Research Project',
	},
];

export const BLOGS: BlogCardProps[] = [
	{
		imageUrl:
			'https://ik.imagekit.io/chainlabsfe/banners/blog1_Aw-ALULKc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656972237530',
		title: 'Tokens and Birth of NFTs',
		url: 'https://medium.com/@0xChainlabs/tokens-and-the-birth-of-nfts-4b02a8ddd98a',
	},
	{
		imageUrl:
			'https://ik.imagekit.io/chainlabsfe/banners/blog2_RHfHd0IOb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656972237532',
		title: 'Think you know NFTs? Think Again',
		url: 'https://medium.com/@0xChainlabs/think-you-know-nfts-think-again-ee799f3f4789',
	},
	{
		imageUrl:
			'https://ik.imagekit.io/chainlabsfe/banners/blog3_fdXzq8v7k.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656972237533',
		title: 'You’ll see NFTs in a whole new light after reading this.',
		url: 'https://blog.chainlabs.in/youll-see-nfts-in-a-whole-new-light-after-reading-this-d6ebd6aecd9a',
	},
];
