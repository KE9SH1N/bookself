"use client";
import React, { useEffect, useState } from "react";

const RemainingTime = () => {
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
		<div className="flex justify-between text-xs text-white mt-4 bg-gray-800 bg-opacity-50 backdrop-blur-lg py-2 px-4 rounded shadow-lg">
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
	);
};

export default RemainingTime;
