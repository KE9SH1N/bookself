import React from "react";
import Sections from "./Sections";

const AboutUs = () => {
	return (
		<div className="bg-gray-50 text-gray-800 py-10">
			<div className="max-w-4xl mx-auto px-4">
				<h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
					About Us
				</h1>

				<p className="text-lg text-center mb-8 text-gray-600">
					Welcome to <span className="font-semibold">Bookstore Name</span> –
					your cozy corner of the literary world, where stories come to life and
					adventures await with every turn of the page.
				</p>

				<Sections
					title="Our Story"
					content="Founded in [Year] by [Founder’s Name], Bookstore Name started as a simple dream: to create a welcoming space for readers of all ages and interests. What began as a small shop with a carefully selected collection of beloved titles has grown into a community hub where book lovers can gather, share, and explore the world of literature."
				/>

				<Sections
					title="What We Offer"
					content="From bestselling novels to hidden gems, classic literature to emerging voices, our shelves are filled with books that have been handpicked with care. Whether you're seeking an exciting new read, a cozy corner to relax, or a recommendation from our passionate team, we’re here to help you find exactly what you're looking for."
				/>

				<Sections
					title="Our Values"
					content="We believe in the power of literature to make the world a better place, to foster empathy, and to encourage open-mindedness. Our bookstore is committed to supporting diverse voices, promoting sustainable practices, and creating a welcoming space for everyone."
				/>

				<div className="mt-12 text-center">
					<p className="text-md text-gray-500">
						Thank you for being part of our story. We can’t wait to help you
						discover yours.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
