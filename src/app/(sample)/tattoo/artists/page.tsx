import React from "react";
import Nav from "../compound/Nav";
import style from "./artists.module.scss";
import Link from "next/link";
import { art } from "../data/artists";
import Form from "../compound/components/Form";
import Footer from "../compound/components/Footer";
interface art {
	art_face: string;
	art_name: string;
	art_role: string;
	para: string;
}
[];

export default function page() {
	const artist = art.map((art) => {
		return (
			<div>
				<div className={style.card}>
					<div className={style.card_content}>
						<div className={style.card_content_img}>
							<img src={art.art_face} alt="" />
						</div>
						<div className={style.card_content_content}>
							<div className={style.head}>
								<h2>{art.art_name}</h2>
								<h5>{art.art_role}</h5>
							</div>
							<p>{art.para}</p>
						</div>
					</div>
					<div className={style.card_img}>
						<img src="/tattoo/work1.png" alt="" />
						<img src="/tattoo/work2.png" alt="" />

						<img src="/tattoo/work3.png" alt="" />
						<img src="/tattoo/work4.png" alt="" />
					</div>
					<div className={style.card_link}>
						<Link href="/tattoo">View Portfolio</Link>
					</div>
				</div>
			</div>
		);
	});
	return (
		<div>
			<div className={style.art_nav}>
				<Nav />
				<div className={style.content}>
					<h3>Artists</h3>
				</div>
			</div>
			<div className={style.art_content}>{artist}</div>
			<Form />
			<div className={style.main_footer}>
				<Footer />
			</div>
		</div>
	);
}
