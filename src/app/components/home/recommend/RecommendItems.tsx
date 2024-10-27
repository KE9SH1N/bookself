import React from "react";
import ProductCard from "../../common/ProductCard";

const RecommendItems = () => {
	return (
		<div className="my-5">
			<div className="mx-auto grid grid-cols-1 sm:ct-grid-cols-2 lg:ct-grid-cols-4 gap-4">
				{Array.from({ length: 6 }).map((_, index) => (
					<ProductCard key={index} />
				))}
			</div>

			<div>{/* <EmptyData /> */}</div>
		</div>
	);
};

export default RecommendItems;
