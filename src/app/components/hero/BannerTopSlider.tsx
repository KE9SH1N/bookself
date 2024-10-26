"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { CiShoppingTag } from "react-icons/ci";
import Image from "next/image";

const BannerTopSlider = () => {
	return (
		<div>
			<Swiper
				pagination={true}
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: true,
				}}
				modules={[Autoplay]}
				className="mySwiper my-4"
			>
				<SwiperSlide>
					<div className="relative">
						<Link href={""}>
							<div className="overflow-hidden max-w-[600px] max-h-[300px]">
								<Image
									src={"/hero/banner_slider/bslider-1.png"}
									alt="slider images"
									width={600}
									height={300}
									priority={true}
									className=""
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
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative">
						<Link href={""}>
							<div className="overflow-hidden max-w-[600px] max-h-[300px]">
								<Image
									src={"/hero/banner_slider/bslider-2.jpg"}
									alt="slider images"
									width={600}
									height={300}
									priority={true}
									className=""
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
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative">
						<Link href={""}>
							<div className="overflow-hidden max-w-[600px] max-h-[300px]">
								<Image
									src={"/hero/banner_slider/bslider-3.jpeg"}
									alt="slider images"
									width={600}
									height={300}
									priority={true}
									className=""
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
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default BannerTopSlider;
