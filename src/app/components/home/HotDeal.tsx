import Link from "next/link";
import HotDealProductCard from "../common/HotDealProductCard";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const products = [
	{
		name: "Air Jordan XX3",
		image: "/products/hotdeal-1.webp",
		oldPrice: 9000,
		newPrice: 7200,
		reviews: 3,
		rating: 5,
	},
	{
		name: "Gucci Blondie medium top handle bag",
		image: "/products/hotdeal-2.webp",
		oldPrice: 8100,
		newPrice: 6480,
		reviews: 2,
		rating: 4,
	},
];

const HotDeal = () => {
	return (
		<div>
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-2xl font-bold">Hot Deals of the Day</h2>
				<Link
					href="#"
					className="ct-flex-center  space-x-2 text-sm text-blue-700 hover:text-blue-400 smooth-animation-mid"
				>
					<span>More Products</span>
					<span>
						<MdOutlineKeyboardDoubleArrowRight className=" text-lg" />
					</span>
				</Link>
			</div>
			<div className="grid grid-cols-1 md:ct-grid-cols-2 gap-4">
				{products.map((product, index) => (
					<HotDealProductCard key={index} product={product} />
				))}
			</div>
		</div>
	);
};
export default HotDeal;
