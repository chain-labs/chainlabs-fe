/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure SWC for styled-components
	compiler: {
		styledComponents: true,
	},

	// Webpack configuration for SVG handling
	webpack(config) {
		config.module.rules.push({
			test: /\.(jpg|gif|svg|eot|ttf|woff|woff2)$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},

	// Image configuration
	images: {
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		domains: ['ik.imagekit.io', 'images.ctfassets.net'],
	},

	// Turbopack configuration
	turbopack: {
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js',
			},
		},
	},
};

module.exports = nextConfig;
