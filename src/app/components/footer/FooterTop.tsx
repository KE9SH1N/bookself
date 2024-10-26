import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { TfiYoutube } from "react-icons/tfi";

const FooterTop = () => {
	return (
		<div className="bg-gray-100 py-8 px-8">
			<div className="ct-container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
				{/* Contact Section */}
				<div>
					<div className="flex items-center space-x-2 mb-2">
						<GiOpenBook className="text-4xl text-green-600" />
						<span className="text-3xl font-semibold uppercase text-green-600">
							goodsself
						</span>
					</div>
					<p>Got Question? Call us 9 AM - 10 PM</p>
					<p className="font-semibold text-lg mt-2">09653-3456456</p>
					<div className="my-4">
						<p className=" capitalize">Follow Us</p>
						<div className="flex space-x-4 mt-4">
							<Link href={""}>
								<FaFacebook className="text-2xl text-blue-600" />
							</Link>
							<Link href={""}>
								<BsTwitterX className="text-2xl text-black" />
							</Link>
							<Link href={""}>
								<FaLinkedin className="text-2xl text-[#0A66C2]" />
							</Link>
							<Link href={""}>
								<TfiYoutube className="text-2xl text-red-600" />
							</Link>
						</div>
					</div>

					<div className="mt-4">
						<a href="#" className="text-green-600 font-semibold">
							See our reviews on Trustpilot
						</a>
					</div>
				</div>

				{/* Company Links */}
				<div>
					<h3 className="font-semibold text-lg mb-4">COMPANY</h3>
					<ul className="space-y-2 text-sm">
						<li>
							<Link href="#">About Us</Link>
						</li>
						<li>
							<Link href="#">Career</Link>
						</li>
						<li>
							<Link href="#">Contact Us</Link>
						</li>
						<li>
							<Link href="#">Privacy Policy</Link>
						</li>
						<li>
							<Link href="#">Terms & Conditions</Link>
						</li>
					</ul>
				</div>
				{/* My account  */}
				<div>
					<h3 className="font-semibold text-lg mb-4">My Account</h3>
					<ul className="space-y-2 text-sm">
						<li>
							<Link href="#">Sign In</Link>
						</li>
						<li>
							<Link href="#">Orders</Link>
						</li>
						<li>
							<Link href="#">Addresses</Link>
						</li>
						<li>
							<Link href="#">My Wishlist</Link>
						</li>
						<li>
							<Link href="#">Order History</Link>
						</li>
						<li>
							<Link href="#">Track My Order</Link>
						</li>
					</ul>
				</div>

				{/* Customer Service Links */}
				<div>
					<h3 className="font-semibold text-lg mb-4">CUSTOMER SERVICE</h3>
					<ul className="space-y-2 text-sm">
						<li>
							<Link href="#">Payment Methods</Link>
						</li>
						<li>
							<Link href="#">Support Center</Link>
						</li>
						<li>
							<Link href="#">How To Shop On Othoba</Link>
						</li>
						<li>
							<Link href="#">Featured Recommendation</Link>
						</li>
						<li>
							<Link href="#">Cancellation, Return & Refund</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default FooterTop;
