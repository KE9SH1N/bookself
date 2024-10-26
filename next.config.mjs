/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: [
			"m.media-amazon.com",
			"images3.penguinrandomhouse.com",
			"cdn.thestorygraph.com",
			"images.penguinrandomhouse.com",
			"i.gr-assets.com",
		],
	},
};

export default nextConfig;
