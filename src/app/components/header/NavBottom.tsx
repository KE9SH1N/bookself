"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const NavBottom = () => {
	const pathname = usePathname();
	return (
		<nav className="bg-gray-200 font-Roboto font-light text-sm hidden lg:block my-5">
			<div className="ct-container ct-flex-between xl:ct-grid-cols3-span2 ">
				<div className="xl:col-span-2 ct-flex-start">
					{/* <CategoryDropdown /> */}
					<ul className="ct-flex-start capitalize font-medium gap-4 py-3">
						<li>
							<Link
								href={""}
								className={`link ${
									pathname === `/`
										? "border-gbPrimaryColor"
										: "md:border-transparent"
								} py-[14px] px-2 border-b-2 rounded-md md:rounded-none md:border-solid hover:border-gbPrimaryColor smooth-animation-mid`}
							>
								{/* {t("home")} */}
								home
							</Link>
						</li>
						<li>
							<Link
								href={`/products`}
								className={`link ${
									pathname === `/products`
										? "border-gbPrimaryColor"
										: "md:border-transparent"
								} py-[14px] px-2 border-b-2 rounded-md md:rounded-none md:border-solid hover:border-gbPrimaryColor smooth-animation-mid`}
							>
								{/* {t("shop")} */}
								All Books
							</Link>
						</li>
						<li>
							<Link
								href={`/about`}
								className={`link ${
									pathname === `/about`
										? "border-gbPrimaryColor"
										: "md:border-transparent"
								} py-[14px] px-2 border-b-2 rounded-md md:rounded-none md:border-solid hover:border-gbPrimaryColor smooth-animation-mid`}
							>
								{/* {t("about-us")} */}
								about us
							</Link>
						</li>
						<li>
							<Link
								href={`/contact`}
								className={`link ${
									pathname === `/contact`
										? "border-gbPrimaryColor"
										: "md:border-transparent"
								} py-[14px] px-2 border-b-2 rounded-md md:rounded-none md:border-solid hover:border-gbPrimaryColor smooth-animation-mid`}
							>
								{/* {t("contact-us")} */}
								contact us
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<ul className="ct-flex-between overflow-hidden py-3">
						<li>
							<div className="flex flex-row gap-x-3">
								<MdOutlineEmail className="text-2xl" />
								<span className="flex items-center font-medium">
									contact@bookself.com
								</span>
							</div>
						</li>

						<li className="">
							<div className="flex flex-row items-center gap-x-3">
								<IoCallOutline className="text-2xl" />
								<span className=" font-medium">
									{/* {t("customer-support-number")} */}
									099178902938
								</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBottom;
