import AboutUs from "@/app/components/about_us/AboutUs";
import Sections from "@/app/components/about_us/Sections";
import CustomLayout from "@/app/layout/CustomLayout";
import React from "react";

const page = () => {
	return (
		<div>
			<CustomLayout>
				<AboutUs />
			</CustomLayout>
		</div>
	);
};

export default page;
