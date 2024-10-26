import Image from "next/image";

const BannerCardList = () => {
	return (
		<div className="grid grid-cols-1 gap-y-5 py-10">
			<div className="ct-grid-cols-2">
				{/* Card 1 */}
				<div className="bg-white shadow-md max-h-80 rounded-lg overflow-hidden">
					<Image
						src="/promotional_banner/promotion-1.png"
						alt="Health Needs"
						width={500}
						height={300}
						className="w-full h-80 object-cover"
					/>
					{/* <div className="p-4 text-center">
						<h3 className="text-lg font-semibold text-blue-600">
							HEALTH NEEDS
						</h3>
						<p className="text-xl font-bold text-gray-700">UP TO 50% OFF</p>
					</div> */}
				</div>

				{/* Card 2 */}
				<div className="bg-white shadow-md max-h-80 rounded-lg overflow-hidden">
					<Image
						src="/promotional_banner/promotion-2.png"
						alt="Sweets Offer"
						width={500}
						height={300}
						className="w-full h-80 object-cover"
					/>
					{/* <div className="p-4 text-center">
						<h3 className="text-lg font-semibold text-red-500">
							সর্বোচ্চ ১৫% পর্যন্ত ছাড়
						</h3>
						<p className="text-sm text-gray-600">৪৫ মিনিটে ফ্রি ডেলিভারি</p>
					</div> */}
				</div>
			</div>
			<div className=" ct-grid-cols-3">
				{/* Card 3 */}
				<div className="bg-white shadow-md rounded-lg overflow-hidden">
					<Image
						src="/promotional_banner/promotion-3.jpg"
						alt="Baby Products Discount"
						width={500}
						height={300}
						className="w-ful h-96 object-cover"
					/>
					{/* <div className="p-4 text-center">
						<h3 className="text-lg font-semibold text-green-500">
							সোয়ামিরে সুরক্ষাময় দায়ারাব
						</h3>
						<p className="text-sm text-gray-600">২৫% ডিসকাউন্ট</p>
					</div> */}
				</div>

				{/* Card 4 */}
				<div className="bg-white shadow-md rounded-lg overflow-hidden">
					<Image
						src="/promotional_banner/promotion-3.jpg"
						alt="Baby Products Discount"
						width={500}
						height={300}
						className="w-ful h-96 object-cover"
					/>
					{/* <div className="p-4 text-center">
						<h3 className="text-lg font-semibold text-orange-600">
							Up to 23% OFF
						</h3>
						<p className="text-sm text-gray-600">On Delicious Food</p>
					</div> */}
				</div>

				{/* Card 5 */}
				<div className="bg-white shadow-md rounded-lg overflow-hidden">
					<Image
						src="/promotional_banner/promotion-3.jpg"
						alt="Baby Products Discount"
						width={500}
						height={300}
						className="w-ful h-96 object-cover"
					/>
					{/* <div className="p-4 text-center">
						<h3 className="text-lg font-semibold text-red-600">
							Super Delicious
						</h3>
						<p className="text-xl font-bold text-gray-700">Up to 15% OFF</p>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default BannerCardList;
