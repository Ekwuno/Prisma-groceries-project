/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
		domains: ["res.cloudinary.com"],
		loader: "cloudinary",
		path: "res.cloudinary.com/ekwuno",
	},
};

module.exports = nextConfig;
