import React from "react";
import ContactUsCover from "./common/ContactUsCover";
import ContactUsForm from "./common/ContactUsForm";
import ContactUsInfo from "./common/ContactUsInfo";

const ContactUs = () => {
	return (
		<div>
			<ContactUsCover />
			<div className="ct-container w-full flex-col lg:flex-row lg:ct-flex-between lg:items-start my-6">
				<div className="lg:w-[50%] my-6">
					<ContactUsInfo />
				</div>
				<div className="lg:w-[40%]">
					<ContactUsForm />
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
