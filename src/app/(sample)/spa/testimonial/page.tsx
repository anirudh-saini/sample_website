import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Nav from "../components/Nav";
import { tnav } from "../data/nav";
import style from "./testimonial.module.scss";
import Review from "./components/Review";
export default function page() {
	return (
		<div>
			<div className={style.nav}>
				<Nav data={tnav} />
			</div>
			<Review />
			<Form />
			<Footer />
		</div>
	);
}
