import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

const NewsLetter = () => {
	return (
		<div className="bg-blue-500">
			<div className="ct-container text-white py-4 flex flex-col md:flex-row justify-between items-center">
				<div className="ct-flex-start flex-row space-x-3">
					<FaEnvelopeOpenText className="text-5xl" />

					<div className="ct-flex-start flex-col">
						<span className="text-lg font-bold">
							SUBSCRIBE TO OUR NEWSLETTER
						</span>
						<span className="text-sm">
							Get all the latest information on Events, Sales and Offers.
						</span>
					</div>
				</div>
				<p className="ct-flex-start flex-col text-center md:text-left">
					<span className="font-bold text-lg uppercase">
						Download our new app today!
					</span>

					<span className="text-sm">
						Dont Miss our mobile-only offers and shop with Android Play.
					</span>
				</p>
				<button className="ct-flex-center gap-x-2 flex-row border border-white text-sm rounded-sm w-[15%] py-2 mt-4">
					<span>Download</span>
					<span>
						<MdDownload className=" text-lg" />
					</span>
				</button>
			</div>
		</div>
	);
};

export default NewsLetter;
