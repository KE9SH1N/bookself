"use client";
import React, { useRef, useState } from "react";

import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";
import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { FaUserGraduate, FaUserSecret } from "react-icons/fa";

const UserAccountMenu = () => {
	const [isDropdownopen, setDropdownopen] = useState<boolean>(false);

	const maxLength = 6;
	let name = "John Doe";

	const truncateName = (name: string, maxLength: number) => {
		if (name?.length > maxLength) {
			return name.slice(0, maxLength) + "...";
		}
		return name;
	};

	return (
		<div>
			<div className="gap-4 py-3">
				<div
					className=" cursor-pointer"
					// onClick={toggleDropdownCategory}
				>
					{false ? (
						<div className="ct-flex-between text-black">
							<p className="capitalize">{truncateName(name, maxLength)}</p>
							<div>
								{isDropdownopen ? (
									<span>
										<MdOutlineKeyboardArrowDown className=" text-2xl text-black" />
									</span>
								) : (
									<span>
										<MdOutlineKeyboardArrowUp className="text-2xl text-black" />
									</span>
								)}
							</div>
						</div>
					) : (
						// <Image
						// 	src="/image/User Profile.svg"
						// 	alt="User Icon"
						// 	width={36}
						// 	height={36}
						// />
						<div>
							{/* <FaUserSecret /> */}
							<FaUserGraduate className="text-[22px]" />
						</div>
					)}
				</div>
				<div className="w-full relative">
					{false ? (
						<ul
							className={` w-28 absolute bg-white top-2 xl:left-0 lg:left-0 flex flex-col items-start rounded z-40 smooth-animation-mid overflow-hidden border border-gbPrimaryColor capitalize ${
								isDropdownopen
									? "  opacity-100"
									: " pointer-events-none opacity-0"
							} `}
						>
							<Link
								onClick={() => setDropdownopen(false)}
								href={"/"}
								className="w-full p-2 text-xs hover:text-[#ffffff] hover:bg-gbPrimaryColor hover:opacity-90 smooth-animation-mid "
							>
								<li>Profile</li>
							</Link>
							<Link
								// onClick={() => {
								// 	window.location.href = `/${selectedLanguage}`;
								// 	setDropdownopen(false);
								// 	handleLogout();
								// }}
								href={"/"}
								className="w-full p-2 text-xs hover:text-[#ffffff] hover:bg-gbPrimaryColor hover:opacity-90 smooth-animation-mid "
							>
								<li>logout</li>
							</Link>
						</ul>
					) : (
						<ul
							className={` w-28 absolute bg-white top-2 xl:left-0 lg:left-0 flex flex-col items-start rounded z-40 smooth-animation overflow-hidden border border-gbPrimaryColor capitalize ${
								isDropdownopen ? "  opacity-100" : "hidden opacity-0"
							} `}
						>
							<Link
								onClick={() => setDropdownopen(false)}
								href={"/"}
								className="w-full p-2 text-xs hover:text-[#ffffff] hover:bg-gbPrimaryColor hover:opacity-90 smooth-animation-mid "
							>
								<li>Login</li>
							</Link>

							<Link
								onClick={() => setDropdownopen(false)}
								href={"/"}
								className="w-full p-2 text-xs hover:text-[#ffffff] hover:bg-gbPrimaryColor hover:opacity-90 smooth-animation-mid "
							>
								<li>register</li>
							</Link>
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default UserAccountMenu;
