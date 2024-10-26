import Banner from "./components/hero/Banner";
import Slider from "./components/hero/Slider";
import BestSelling from "./components/home/BestSelling";
import ForYou from "./components/home/ForYou";
import NewCollections from "./components/home/NewCollections";
import OurServices from "./components/home/OurServices";
import CustomLayout from "./layout/CustomLayout";

export default function Home() {
	return (
		<main>
			<CustomLayout>
				<div className="ct-flex-center flex-col gap-y-20">
					<div className="ct-container lg:ct-grid-cols-3 my-2 lg:mt-0">
						<div className="w-full lg:w-[98%] lg:col-span-2 cursor-pointer">
							<Slider />
						</div>

						<div className="w-full relative">
							<Banner />
						</div>
					</div>
					<div className="ct-container">
						<BestSelling />
					</div>
					<div className="ct-container">
						<ForYou />
					</div>

					<div className="ct-container">
						<NewCollections />
					</div>
					<div className="w-full ct-container ">
						<OurServices />
					</div>
				</div>
			</CustomLayout>
		</main>
	);
}
