import React from "react";
import { FaShippingFast, FaShieldAlt, FaUndo, FaHeadset } from "react-icons/fa";

const OurServices = () => {
	return (
		<div className="w-full bg-gray-100 p-5">
			<div className="ct-flex-between gap-x-5">
				<div className="flex items-center gap-4">
					<FaShippingFast className="text-green-600 text-[44px]" />
					<div>
						<h3 className="text-lg font-semibold text-gray-800">
							Free Shipping
						</h3>
						<p className="text-sm text-gray-500">Order over $100</p>
					</div>
				</div>

				<div className="flex items-center gap-4">
					<FaShieldAlt className="text-green-600 text-[40px]" />
					<div>
						<h3 className="text-lg font-semibold text-gray-800">
							Secure Payment
						</h3>
						<p className="text-sm text-gray-500">100% secure payment</p>
					</div>
				</div>

				<div className="flex items-center gap-4">
					<FaUndo className="text-green-600 text-4xl" />
					<div>
						<h3 className="text-lg font-semibold text-gray-800">
							Easy Returns
						</h3>
						<p className="text-sm text-gray-500">10 days returns</p>
					</div>
				</div>

				<div className="flex items-center gap-4">
					<FaHeadset className="text-green-600 text-4xl" />
					<div>
						<h3 className="text-lg font-semibold text-gray-800">
							24/7 Support
						</h3>
						<p className="text-sm text-gray-500">Call us anytime</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurServices;
