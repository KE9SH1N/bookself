"use client";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";

const ContactUsForm = () => {
	const [Loader, setLoader] = useState<boolean>(false);
	return (
		<div className="mt-2">
			<div className=" bg-[#F5F5F5] px-6 pt-6 pb-3 rounded-2xl">
				<div className="ct-flex-start flex-col space-y-2">
					<h1 className=" font-semibold text-2xl capitalize ">
						Stay Connected
					</h1>
					<p className=" text-xs font-light capitalize mb-1">
						Tap and connect within a secend
					</p>
				</div>

				{/* <div
					className={`${
						errorMessages?.length > 0
							? "opacity-100 bg-gbInactiveColor"
							: "opacity-0 pointer-events-none"
					} smooth-animation-mid p-1 flex justify-center items-center rounded h-8`}
				>
					{errorMessages?.map((errorMesg: string, index: number) => (
						<div
							className=" text-white text-xs ct-flex-center gap-x-2"
							key={index}
						>
							<BiError className="text-base" />
							{errorMesg}
						</div>
					))}
				</div> */}

				<div className="my-4">
					<form action="" className="my-1 ct-flex-start flex-col space-y-3">
						<div className="ct-grid-cols-2">
							<div className=" flex flex-col space-y-2">
								<label htmlFor="firstName" className=" capitalize text-xs">
									first name
								</label>
								<input
									type="text"
									id="firstName"
									// value={customerFirstName}
									// onChange={handleCustomerFirstName}
									placeholder="write your first name"
									className={`appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none  focus:ring-1 placeholder:capitalize placeholder:text-xs`}
								/>
							</div>
							<div className=" flex flex-col space-y-2">
								<label htmlFor="lastName" className=" capitalize text-xs">
									last name
								</label>
								<input
									type="text"
									id="lastName"
									// value={customerLastName}
									// onChange={handleCustomerLastName}
									placeholder="write your last name"
									className={`appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none  focus:ring-1 focus:ring-gbPrimaryColor placeholder:capitalize placeholder:text-xs`}
								/>
							</div>
						</div>

						<div className="w-full flex flex-col space-y-2">
							<label htmlFor="contactEmail" className=" capitalize text-xs">
								email
							</label>
							<input
								type="email"
								id="contactEmail"
								// value={customerEmail}
								// onChange={handleCustomerEmail}
								placeholder="write your email"
								className={`appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:ring-1 placeholder:capitalize placeholder:text-xs`}
							/>
						</div>

						<div className="w-full flex flex-col space-y-2">
							<label
								htmlFor="contactPnoneNumber"
								className=" capitalize text-xs"
							>
								phone number
							</label>
							<input
								type="text"
								id="contactPnoneNumber"
								// value={customerPhoneNumber}
								// onChange={handleCustomerPhoneNumber}
								placeholder="type your phone number"
								className={`appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:ring-1 placeholder:capitalize placeholder:text-xs`}
							/>
						</div>

						<div className="w-full flex flex-col space-y-2">
							<label
								htmlFor="contactPnoneNumber"
								className=" capitalize text-xs"
							>
								Message
							</label>
							<textarea
								// value={customerMessage}
								// onChange={handleCustomerMessage}
								placeholder="Type your Opinion"
								className="appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none  focus:ring-1 focus:ring-gbPrimaryColor placeholder:capitalize placeholder:text-xs"
								rows={5}
							/>
						</div>
					</form>
					<div className="w-full">
						<button
							// onClick={handleSubmit}
							// disabled={Loader}
							className="w-[50%] mx-auto ct-flex-center bg-green-600 py-2 rounded capitalize cursor-pointer text-sm text-white mt-6"
						>
							{Loader ? (
								<div className="ct-flex-center gap-x-2">
									<span>Sending...</span>

									<ClipLoader size={20} color={"#fff"} />
								</div>
							) : (
								<span>sumbit</span>
							)}
						</button>
					</div>
					<div className="w-full py-2">
						<p className="w-[90%] mx-auto text-center text-[#00000066] text-xs">
							We care about your privecy!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUsForm;
