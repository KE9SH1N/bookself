"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { products } from "../../data/products";
import Image from "next/image";
import SectionHead from "../common/SectionHead";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import RemainingTime from "../utils/RemainingTime";

const TrendingNow = () => {
	return (
		<div>
			<div>
				<SectionHead title="Trending Now" />
			</div>
			<div className="swiper-container mt-8">
				<Swiper
					modules={[Pagination, Autoplay]}
					spaceBetween={20}
					slidesPerView={4}
					pagination={{ clickable: true }}
					loop={true}
					autoplay={{
						delay: 6000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						320: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 4 },
					}}
					className="mySwiper"
				>
					{products.map((item: any) => {
						return (
							<SwiperSlide key={item?.id}>
								<Link href={""}>
									<div className="relative ct-flex-start flex-col bg-[#F8F8F8] rounded-md py-4">
										<Image
											src={item?.product_image}
											alt={item?.product_title_en}
											width={400}
											height={400}
											className="w-full h-[200px] object-cover rounded-md"
										/>
										<div className="px-4">
											<h3 className="text-lg mt-4 capitalize">
												{item?.product_title_en}
											</h3>
											<p className="text-gray-600 text-pretty">
												{item?.product_current_price}
												<span>tk</span>
											</p>
										</div>
										<div className="w-full ct-flex-center cursor-pointer">
											<button className="ct-flex-center flex-row gap-x-2 w-[50%] capitalize text-sm  py-2 rounded-sm bg-green-600 text-white">
												<CiShoppingCart className="text-xl" />
												<span className="font-extralight">Add to cart</span>
											</button>
										</div>
										<div className=" absolute top-0 right-0 w-[50%]">
											<RemainingTime />
										</div>
									</div>
								</Link>
							</SwiperSlide>
						);
					})}
				</Swiper>
				{/* <div className="swiper-pagination-custom" /> */}
			</div>
		</div>
	);
};

export default TrendingNow;
