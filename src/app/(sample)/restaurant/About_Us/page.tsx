import React from "react";
import Top_nav from "../components/Top_nav";
import Footer from "../components/Footer";
import style from "./about.module.scss";
import { about } from "../Data/About";
import About from "../components/About";
import About_review from "../components/About_review";
export default function page() {
	return (
		<>
			<div className="bg">
				<Top_nav />
				<div className="container">
					<div className={`nav_content ${style.heading}`}>
						<img src="/restaurant/logo.svg " alt="logo" />
						<p>{about.heading}</p>
					</div>
				</div>
			</div>
			<div className={style.about}>
				<About about={about} />
			</div>
			<About_review />
			<Footer />
		</>
	);
}
