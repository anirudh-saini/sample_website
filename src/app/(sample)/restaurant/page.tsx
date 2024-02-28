import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import Food from "./components/Food";
import Chef from "./components/Chef";
import Dish from "./components/Dish";
import Footer from "./components/Footer";
export default function Home() {
	return (
		<>
			<Nav />
			<Food />
			<Chef />
			<Dish />
			<Footer />
		</>
	);
}
