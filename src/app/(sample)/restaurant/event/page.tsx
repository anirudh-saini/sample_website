import React from "react";
import Top_nav from "../components/Top_nav";
import Footer from "../components/Footer";
import style from "./event.module.scss";
import { about } from "../Data/event";
import About from "../components/About";

export default function page() {
	return (
		<div>
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

			<Footer />
		</div>
	);
}
