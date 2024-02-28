import React from "react";
import Top_nav from "../components/Top_nav";
import style from "./menu.module.scss";
import { menu } from "../Data/menu";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
export default function page() {
	return (
		<div>
			<div className="bg">
				<Top_nav />
				<div className="container">
					<div className={`nav_content ${style.heading}`}>
						<img src="/restaurant/logo.svg " alt="logo" />
						<p>{menu.heading}</p>
					</div>
				</div>
			</div>
			<div className="menu">
				<Menu item={menu} />
			</div>
			<Footer />
		</div>
	);
}
