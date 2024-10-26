import Banner from "./components/hero/Banner";
import Slider from "./components/hero/Slider";
import CustomLayout from "./layout/CustomLayout";

export default function Home() {
	return (
		<main>
			<CustomLayout>
				<div className="ct-container lg:ct-grid-cols-3 my-2 lg:mt-0">
					<div className="w-full lg:w-[98%] lg:col-span-2 cursor-pointer">
						<Slider />
					</div>

					<div className="w-full relative">
						<Banner />
					</div>
				</div>

				<div className="w-full text-5xl font-bold flex items-center justify-center h-screen">
					Hello Bookself!
				</div>
			</CustomLayout>
		</main>
	);
}
