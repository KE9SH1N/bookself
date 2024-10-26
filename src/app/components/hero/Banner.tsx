import React from "react";
import BannerTopSlider from "./BannerTopSlider";
import BannerBottom from "./BannerBottom";

const Banner = () => {
	return (
		<div className="w-full hidden lg:block max-h-[300px]">
			<BannerTopSlider />
			<BannerBottom />
		</div>
	);
};

export default Banner;
