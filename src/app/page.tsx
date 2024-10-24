import CustomLayout from "./layout/CustomLayout";

export default function Home() {
	return (
		<main>
			<CustomLayout>
				<div className="w-full text-5xl font-bold flex items-center justify-center h-screen">
					Hello Bookself!
				</div>
			</CustomLayout>
		</main>
	);
}
