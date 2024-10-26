import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiShoppingTag } from "react-icons/ci";

const BannerBottom = () => {
	return (
		<div>
			<div className="relative">
				<Link href={""}>
					<div className="relative overflow-hidden my-4 rounded-md max-h-[205px]">
						<Image
							src={"/hero/banners/banner-2.jpg"}
							alt="slider images"
							width={800}
							height={200}
							priority={true}
							className="w-full h-[206px] object-cover rounded-md"
						/>
						{/* Overlay */}
						<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
					</div>
				</Link>
				<div className="w-full absolute top-[70%] left-[25%]">
					<Link href={""}>
						<div className="bg-gbPrimaryColor py-2 px-5 w-[50%] ct-flex-center gap-x-2 rounded capitalize text-white relative">
							<button className="w-full ct-flex-center flex-row gap-x-2 py-2 rounded-sm text-sm bg-green-600">
								<span>Shop Now</span>
								<CiShoppingTag className="text-base mt-1" />
							</button>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BannerBottom;
