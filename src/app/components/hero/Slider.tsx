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

const Slider = () => {
	return (
		<div className="w-full">
			<Swiper
				pagination={true}
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: true,
				}}
				modules={[Autoplay]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className="relative w-full">
						<Link href={""}>
							<div className="overflow-hidden my-4 max-w-[1200px] max-h-[600px]">
								<Image
									src={"/hero/slider/slider-1.jpg"}
									alt="slider images"
									width={1200}
									height={600}
									priority={true}
									className=""
								/>
							</div>
						</Link>
						<div className="hidden md:flex md:w-[20%] absolute top-[75%] left-[5%]">
							<Link href={""}>
								<div className="bg-gbPrimaryColor py-2 px-5 w-full ct-flex-center gap-x-2 rounded capitalize text-white relative">
									<button className="ct-flex-center gap-x-2 py-2 px-6 rounded-sm text-sm bg-green-600">
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
							<div className="overflow-hidden my-4 ">
								<Image
									src={"/hero/slider/slider-2.jpg"}
									alt="slider images"
									width={1200}
									height={600}
									priority={true}
									className=""
								/>
							</div>
						</Link>
						<div className="hidden md:flex md:w-[20%] absolute top-[75%] left-[5%]">
							<Link href={""}>
								<div className="bg-gbPrimaryColor py-2 px-5 w-full ct-flex-center gap-x-2 rounded capitalize text-white relative">
									<button className="ct-flex-center gap-x-2 py-2 px-6 rounded-sm text-sm bg-green-600">
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
							<div className="overflow-hidden my-4 ">
								<Image
									src={"/hero/slider/slider-3.png"}
									alt="slider images"
									width={1200}
									height={600}
									priority={true}
									className=""
								/>
							</div>
						</Link>
						<div className="hidden md:flex md:w-[20%] absolute top-[75%] left-[5%]">
							<Link href={""}>
								<div className="bg-gbPrimaryColor py-2 px-5 w-full ct-flex-center gap-x-2 rounded capitalize text-white relative">
									<button className="ct-flex-center gap-x-2 py-2 px-6 rounded-sm text-sm bg-green-600">
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

export default Slider;
