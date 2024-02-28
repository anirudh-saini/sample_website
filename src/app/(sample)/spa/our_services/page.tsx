import React from "react";
import style from "./service.module.scss";
import Nav from "../components/Nav";
import { snav } from "../data/nav";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Service_with_price from "../components/Service_with_price";
export default function page() {
	return (
		<div>
			<div className={style.nav}>
				<Nav data={snav} />
			</div>
			<div className={style.sub_heading}>
				<p>
					At Haven of Harmony, we believe in providing a sanctuary for
					your mind, body, and soul. Our comprehensive range of
					services is meticulously curated to promote relaxation,
					rejuvenation, and inner harmony. Step into our tranquil
					haven and discover the perfect treatment to suit your needs.
				</p>
			</div>
			<div className={style.bg}>
				<div className={style.bg1}>
					<img src="/spa/service_with_price_bg.png" />
				</div>

				<Service_with_price />
				<div className={style.bg2}>
					<img src="/spa/service_with_price_bg.png" />
				</div>
			</div>
			<div className={style.service_content}>
				<p>
					Ready to experience the serenity for yourself? Book your
					appointment today and discover the Haven of Harmony
					difference.
				</p>
			</div>
			<Form />
			<Footer />
		</div>
	);
}
