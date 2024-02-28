import Footer from "../components/Footer";
import Form from "../components/Form";
import Nav from "../components/Nav";
import { gnav } from "../data/nav";
import style from "./gallery.module.scss";
import Gallery_c1 from "./components/Gallery_c1";
import Gallery_c2 from "./components/Gallery_c2";
import Gallery_c3 from "./components/Gallery_c3";
import React, { useState, useRef, useEffect } from "react";
export default function page() {
	return (
		<div>
			<div className={style.nav}>
				<Nav data={gnav} />
			</div>
			<Gallery_c1 />
			<div className={style.bg}>
				<div className={style.img}>
					<img src="gallerybg.png" alt="" />
				</div>
				<Gallery_c2 />
			</div>

			<Gallery_c3 />
			<Form />
			<Footer />
		</div>
	);
}
