import React from "react";
import Image from "next/image";
import SectionHead from "../common/SectionHead";
import ProductCard from "../common/ProductCard";

const NewCollections = () => {
	return (
		<div className="w-full">
			<div>
				<SectionHead title="New Collection" />
			</div>

			<div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{Array.from({ length: 14 }).map((_, index) => (
					<ProductCard key={index} />
				))}
			</div>
		</div>
	);
};

export default NewCollections;
