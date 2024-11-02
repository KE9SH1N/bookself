import Image from "next/image";
import React from "react";
import { IoCart, IoCartOutline } from "react-icons/io5";

const ProductCard = () => {
	return (
		<div>
			<div className="max-w-xs bg-[#F8F8F8] shadow-lg rounded-md overflow-hidden">
				{/* Book Image */}
				<div className="w-full flex items-center justify-center p-2">
					<Image
						src="/new_collection/collection-1.png"
						alt="Book cover"
						width={300}
						height={300}
						className="h-full rounded-md"
						priority={true}
					/>
				</div>

				{/* Book Details */}
				<div className="p-4">
					<h3 className="text-lg font-semibold max-h-40 line-clamp-2 mb-1">
						Book Title Book Title Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Inventore ipsa doloribus natus nam delectus
						explicabo ratione labore deserunt earum. Atque, pariatur, fugit
						provident labore quod, cumque exercitationem vitae praesentium minus
						asperiores perspiciatis vel consectetur ipsa. Corrupti aspernatur
						similique commodi quas.
					</h3>
					<p className="text-sm text-gray-500 mb-2">by Author Name</p>

					{/* Price */}
					<div className="text-gray-900 font-bold text-xl mb-3">৳19.99</div>

					{/* Add to Cart Button */}
					<div className="w-full relative inline-block group">
						<button className="w-full text-sm font-light py-3 px-6 rounded-sm bg-green-600 text-white capitalize">
							Add to cart
						</button>
						<div className="absolute top-1/2 -left-6 -translate-y-1/2 transform opacity-0 group-hover:translate-x-24 group-hover:opacity-100 smooth-animation-high">
							<IoCartOutline className="text-2xl text-white" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
