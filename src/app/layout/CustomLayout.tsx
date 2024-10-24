import React from "react";
import Navbar from "../components/header/Navbar";

const CustomLayout = ({ children }: any) => {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
};

export default CustomLayout;
