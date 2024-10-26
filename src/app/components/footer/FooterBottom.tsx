import Image from "next/image";
import React from "react";

const FooterBottom = () => {
	return (
		<div className="ct-container my-8 text-center">
			<div className="ct-flex-between ">
				<p className="text-xs text-gray-500 mt-4">goodsself.com Pvt Ltd</p>
				<div className="ct-flex-center gap-x-5">
					<p className="text-sm">We're using safe payment for</p>
					<div className="ct-flex-center space-x-4">
						<Image
							src="/assets/brand_logos/bkash.svg"
							alt="bKash"
							width={60}
							height={50}
							className=""
						/>
						<Image
							src="/assets/brand_logos/nagad.svg"
							alt="nagad"
							width={55}
							height={50}
							className=""
						/>
						<Image
							src="/assets/brand_logos/visa.svg"
							alt="visa card"
							width={35}
							height={30}
							className=""
						/>
						<Image
							src="/assets/brand_logos/mastercard.svg"
							alt="master card"
							width={50}
							height={50}
							className=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterBottom;
