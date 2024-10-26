"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoBagHandleOutline } from "react-icons/io5";

const HotDealProductCard = ({ product }: any) => {
	if (!product) {
		return null;
	}
	const { name, image, oldPrice, newPrice, reviews, rating } = product;
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	// Countdown timer logic
	useEffect(() => {
		const now = new Date();
		// For 1 month
		const targetTime = new Date(now.setMonth(now.getMonth() + 1)).getTime();

		// For 1 hour
		// const targetTime = new Date().getTime() + 1000 * 60 * 60;

		const interval = setInterval(() => {
			const currentTime = new Date().getTime();
			const remainingTime = targetTime - currentTime;

			if (remainingTime <= 0) {
				clearInterval(interval);
			} else {
				setTimeLeft({
					days: Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
					hours: Math.floor((remainingTime / (1000 * 60 * 60)) % 24),
					minutes: Math.floor((remainingTime / 1000 / 60) % 60),
					seconds: Math.floor((remainingTime / 1000) % 60),
				});
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="border border-gray-200 rounded-lg p-4 shadow-lg transition-shadow">
			<div className="flex justify-between items-center mb-2">
				<span className="text-xs font-bold bg-yellow-500 text-white px-2 py-1 rounded-full">
					2 YEAR WARRANTY
				</span>
				<span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
					3 MONTHS 0% EMI
				</span>
			</div>
			<Image
				src={image}
				alt={name}
				width={800}
				height={800}
				className="w-full h-48 object-cover mb-4"
			/>
			<h3 className="text-lg font-semibold">{name}</h3>
			<div className="flex items-center text-sm text-yellow-500">
				{"★".repeat(rating)} {"☆".repeat(5 - rating)} ({reviews} Reviews)
			</div>
			<div className="text-lg font-bold mt-2">
				Tk {newPrice}
				<span className="text-gray-500 line-through">Tk {oldPrice}</span>
			</div>
			<button className="ct-flex-center space-x-2 w-full mt-4 bg-white border border-gray-300 hover:border-green-600 py-2 rounded hover:text-white hover:bg-green-600 smooth-animation-mid">
				<span className="mt-1">BUY NOW</span>
				<span>
					<IoBagHandleOutline className="text-lg" />
				</span>
			</button>

			<div className="flex justify-between text-xs text-white mt-4 bg-gray-800 py-2 px-4 rounded">
				<div className="flex flex-col items-center">
					<span>{timeLeft.days}</span>
					<span>Days</span>
				</div>
				<div className="flex flex-col items-center">
					<span>{timeLeft.hours}</span>
					<span>Hrs</span>
				</div>
				<div className="flex flex-col items-center">
					<span>{timeLeft.minutes}</span>
					<span>Mins</span>
				</div>
				<div className="flex flex-col items-center">
					<span>{timeLeft.seconds}</span>
					<span>Secs</span>
				</div>
			</div>
		</div>
	);
};
export default HotDealProductCard;
