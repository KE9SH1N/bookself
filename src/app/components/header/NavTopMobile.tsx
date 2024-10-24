"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdAutoStories } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { SlMenu } from "react-icons/sl";

const NavTopMobile = () => {
	const [searchbtniconState, setSearchbtniconState] = useState<boolean>(false);
	let toggleSearchicon: string | null = searchbtniconState ? "active" : null;
	return (
		<nav>
			<div className="ct-flex-between bg-white p-4 lg:hidden relative z-10 shadow-md">
				<div className="relative">
					<button
						className="ct-flex-center"
						// onClick={handleToggleSidebar}
					>
						<SlMenu className="text-xl" />
					</button>
				</div>

				<div className="">
					<div className="flex gap-x-3">
						<MdAutoStories className="text-3xl text-green-600" />
						<p className="ct-flex-center text-2xl font-bold uppercase text-green-600">
							bookself
						</p>
					</div>
				</div>

				<button
					// onClick={searchboxhandleClick}
					className={`${toggleSearchicon ? "hidden" : "active"}`}
				>
					<CiSearch className="text-2xl" />
				</button>

				<button
					// onClick={searchboxhandleClick}
					className={`${toggleSearchicon ? "active" : "hidden"}`}
				>
					<RxCross2 className="text-2xl" />
				</button>
			</div>
		</nav>
	);
};

export default NavTopMobile;
