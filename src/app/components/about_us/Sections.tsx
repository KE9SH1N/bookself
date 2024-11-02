import React from "react";

const Sections = ({ title, content }: any) => {
	return (
		<div className="mb-10">
			<h2 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h2>
			<p className="text-gray-600">{content}</p>
		</div>
	);
};

export default Sections;
