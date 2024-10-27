import Image from "next/image";
import SectionHead from "../common/SectionHead";

const brands = [
	{ name: "Brand 1", logo: "/assets/brands/brand-1.jpg" },
	{ name: "Brand 2", logo: "/assets/brands/brand-2.webp" },
	{ name: "Brand 3", logo: "/assets/brands/brand-3.svg" },
	{ name: "Brand 4", logo: "/assets/brands/brand-4.webp" },
	{ name: "Brand 5", logo: "/assets/brands/brand-5.svg" },
	{ name: "Brand 6", logo: "/assets/brands/brand-6.jpg" },
];

const MostPopularBrands = () => {
	return (
		<section className="py-16">
			<div>
				<div>
					<SectionHead title="Most Popular Brands" />
				</div>

				{/* Brands Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
					{brands.map((brand, index) => (
						<div key={index} className="flex items-center justify-center">
							<Image
								src={brand.logo}
								alt={brand.name}
								width={150}
								height={100}
								objectFit="contain"
								className="grayscale transition-all duration-300"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MostPopularBrands;
