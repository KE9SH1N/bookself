import React from "react";
import Navbar from "../components/header/Navbar";
import NewsLetter from "../components/header/NewsLetter";
import Footer from "../components/footer/Footer";

const CustomLayout = ({ children }: any) => {
	return (
		<div>
			<Navbar />
			{children}
			<div className="w-full">
				<NewsLetter />
				<Footer />
			</div>
		</div>
	);
};

export default CustomLayout;
