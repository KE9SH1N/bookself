import Footer from "./components/footer/Footer";
import NewsLetter from "./components/header/NewsLetter";
import Banner from "./components/hero/Banner";
import Slider from "./components/hero/Slider";
import BannerCardList from "./components/home/campaigns/BannerCardList";
import BannerFullSize from "./components/home/campaigns/BannerFullSize";
import HotDeal from "./components/home/HotDeal";
import MostPopularBrands from "./components/home/MostPopularBrands";
import OurServices from "./components/home/OurServices";
import RecommendedForYou from "./components/home/recommend/RecommendedForYou";
import TrendingNow from "./components/home/TrendingNow";
import RemainingTime from "./components/utils/RemainingTime";
import CustomLayout from "./layout/CustomLayout";

export default function Home() {
	return (
		<main>
			<CustomLayout>
				<div className="ct-flex-center flex-col gap-y-10">
					<div className="ct-container lg:ct-grid-cols-3 my-2 lg:mt-0">
						<div className="w-full lg:w-[98%] lg:col-span-2 cursor-pointer">
							<Slider />
						</div>

						<div className="w-full relative">
							<Banner />
						</div>
					</div>
					<div className="w-full ct-container ">
						<OurServices />
					</div>
					<div className="w-full ct-container">
						<HotDeal />
					</div>
					<div className="w-full ct-container">
						<TrendingNow />
					</div>
					<div className="w-full ct-container">
						<BannerCardList />
					</div>
					<div className="w-full ct-container">
						<RecommendedForYou />
					</div>
					<div className="w-full">
						<BannerFullSize />
					</div>

					<div className="w-full ct-container">
						<MostPopularBrands />
					</div>
				</div>
			</CustomLayout>
		</main>
	);
}
