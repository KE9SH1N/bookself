import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import UserAccountMenu from "../utils/UserAccountMenu";
import { MdAutoStories } from "react-icons/md";

const NavTop = () => {
	return (
		<div>
			<div className="hidden lg:ct-container lg:ct-flex-between lg:gap-x-2 pt-5">
				<Link href={`/`}>
					<div className="ct-flex-start items-center flex-row gap-x-3">
						{/* <Image
							src=""
							alt="Brand Logo"
							width={134}
							height={58}
							priority={true}
							onDragStart={(e) => e.preventDefault()}
						/> */}
						<MdAutoStories className="text-5xl text-green-600" />
						<span className="text-3xl font-bold uppercase mt-2 text-green-600">
							bookself
						</span>
					</div>
				</Link>
				<div>
					<div className="xl:w-[656px] lg:w-[540px] lg:flex hidden relative">
						<input
							type="search"
							id="searchInput"
							// value={query}
							// onChange={(e) => setQuery(e.target.value)}
							className="appearance-none w-full p-3 pl-16 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 dark:placeholder-gray-400 dark:text-black focus:outline-none placeholder:capitalize"
							placeholder="search-placeholder"
						/>
						<button
							// onClick={handleSubmit}
							className=" absolute left-6 top-3 cursor-pointer"
						>
							<CiSearch className="text-2xl" />
						</button>
					</div>
				</div>

				<div className="ct-flex-between space-x-6">
					<div>
						{/* <div className=" cursor-pointer">
							<LanguageDropdown
								textColor="black"
								borderColor="black"
								bgColor="white"
								dropdownopenColor="black"
							/>
						</div> */}
					</div>
					<div>
						<button
							className="flex cursor-pointer"
							// onClick={handleToggleCart}
						>
							<FiShoppingCart className="text-2xl" />
							{/* <span>({totalQuantity})</span> */}
							<span>01</span>
						</button>
					</div>
					<UserAccountMenu />
				</div>
			</div>
		</div>
	);
};

export default NavTop;
