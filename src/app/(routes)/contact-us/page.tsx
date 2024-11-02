import ContactUs from "@/app/components/contact_us/ContactUs";
import CustomLayout from "@/app/layout/CustomLayout";
import React from "react";

const page = () => {
	return (
		<div>
			<CustomLayout>
				<ContactUs />
			</CustomLayout>
		</div>
	);
};

export default page;
