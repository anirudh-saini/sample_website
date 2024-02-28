import React from "react";
import Nav from "../compound/Nav";
import style from "./about.module.scss";
import Link from "next/link";
import Footer from "../compound/components/Footer";
export default function page() {
	return (
		<div>
			<div className={style.about_nav}>
				<Nav />
				<div className={style.content}>
					<h3>About Us</h3>
				</div>
			</div>
			<div className={style.about_content}>
				<div className={style.about_content_text}>
					<p>
						Welcome to Devils Tattoo, where art meets rebellion.
						Founded in 2011, our studio thrives on the passion and
						expertise of our visionary artist, Ricky Borchert. A
						graduate with a Bachelor's of Fine Art from Paier
						College of Art, Ricky's journey from aspiring art
						teacher to a seasoned tattoo artist reflects our
						commitment to authentic self-expression. Specializing in
						black and grey realism, with a penchant for horror and
						portraiture, Ricky brings stories to life on the canvas
						of your skin. Beyond ink, Devils Tattoo is a haven for
						those seeking a unique fusion of artistry and edgy
						individuality. Join us in embracing the extraordinary.
					</p>
					<div>
						<Link href="">Book Today</Link>
					</div>
				</div>
				<div className={style.about_content_img}>
					<img src="/tattoo/owner.png" alt="owner" />
				</div>
			</div>
			<div className={style.about_img}>
				<div className={style.about_img_container}>
					<div>
						<img src="/tattoo/p1.png" alt="img" />
					</div>
					<div>
						<img src="/tattoo/p2.png" alt="img" />
					</div>
					<div>
						<img src="/tattoo/p3.png" alt="img" />
					</div>
					<div>
						<img src="/tattoo/p4.png" alt="img" />
					</div>
					<div>
						<img src="/tattoo/p5.png" alt="img" />
					</div>
					<div>
						<img src="/tattoo/p6.png" alt="img" />
					</div>
					<div>
						<img src="/tattoo/p7.png" alt="img" />
					</div>
					<div>
						<img src="/tattoo/p8.png" alt="img" />
					</div>
					<div>
						<img src="/tattoo/p9.png" alt="img" />
					</div>
					<div>
						<img src="/tattoo/p10.png" alt="img" />
					</div>
					<div>
						<img src="/tattoo/p11.png" alt="img" />
					</div>
					<div>
						<img src="/tattoo/about5.png" alt="img" />
					</div>
					<div>
						<img src="/tattoo/about1.png" alt="img" />
					</div>
					<div>
						<img src="/tattoo/about2.png" alt="img" />
					</div>
					<div>
						<img src="/tattoo/about3.png" alt="img" />
					</div>
					<div>
						<img src="/tattoo/about4.png" alt="img" />
					</div>
				</div>
				<div className={style.about_link}>
					<Link href="/tattoo/">View Portfolio</Link>
				</div>
			</div>
			<div className={style.main_footer}>
				<Footer />
			</div>
		</div>
	);
}
