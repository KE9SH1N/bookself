"use client";
import React from "react";
import SectionHead from "../../common/SectionHead";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const RecommendHead = () => {
	const handleActiveProjectsTab = (activeTab: string) => {
		console.log("clicked");
	};
	return (
		<div>
			<div>
				<SectionHead title="Recommended For You" />
			</div>

			<div className="ct-flex-between">
				<ul className=" capitalize ct-flex-start gap-x-3">
					<li
						onClick={() => {
							handleActiveProjectsTab("js");
						}}
						className={`py-2 px-5 text-sm border rounded cursor-pointer smooth-animation-mid  ${
							"js" === "js"
								? "border-[#7c2d12] text-[#d1a1a1] hover:text-[#7c2d12] "
								: "border-[#7c2d12] text-[#7c2d12]"
						}`}
					>
						Bestselling
					</li>
					<li
						onClick={() => {
							handleActiveProjectsTab("python");
						}}
						className={`py-2 px-5 text-sm border rounded cursor-pointer smooth-animation-mid  ${
							"python" === "python"
								? "border-[#7c2d12] text-[#d1a1a1] hover:text-[#7c2d12] "
								: "border-[#7c2d12] text-[#7c2d12]"
						}`}
					>
						For You
					</li>

					<li
						onClick={() => {
							handleActiveProjectsTab("python");
						}}
						className={`py-2 px-5 text-sm border rounded cursor-pointer smooth-animation-mid  ${
							"python" === "python"
								? "border-[#7c2d12] text-[#d1a1a1] hover:text-[#7c2d12] "
								: "border-[#7c2d12] text-[#7c2d12]"
						}`}
					>
						Most Wanted
					</li>

					<li
						onClick={() => {
							handleActiveProjectsTab("python");
						}}
						className={`py-2 px-5 text-sm border rounded cursor-pointer smooth-animation-mid  ${
							"python" === "python"
								? "border-[#7c2d12] text-[#d1a1a1] hover:text-[#7c2d12] "
								: "border-[#7c2d12] text-[#7c2d12]"
						}`}
					>
						New Collection
					</li>
				</ul>
				<div>
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
			</div>
		</div>
	);
};

export default RecommendHead;
