import Image from "next/image";
import React from "react";

const BannerFullSize = () => {
	return (
		<div className="relative w-full max-h-80 bg-gray-900">
			{/* Background Image */}
			<Image
				src="/assets/banner_full.jpg"
				alt="Banner Image"
				width={1200}
				height={800}
				// quality={100}
				className="w-full max-h-80 object-cover"
			/>
			{/* Overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>

			{/* Banner content */}
			<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
				<button className="mt-6 px-6 py-2 text-lg font-medium border border-green-600 bg-green-600 hover:bg-transparent hover:border hover:border-yellow-900 text-white  rounded-sm smooth-animation-mid">
					Explore Now
				</button>
			</div>
		</div>
	);
};

export default BannerFullSize;
