import React from "react";
import NavTop from "./NavTop";
import NavBottom from "./NavBottom";
import NavTopMobile from "./NavTopMobile";

const Navbar = () => {
	return (
		<div className="sticky top-0 z-30 lg:shadow-sm">
			<NavTop />
			<NavTopMobile />
			<NavBottom />
		</div>
	);
};

export default Navbar;
