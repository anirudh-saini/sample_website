import React from "react";
import style from "./footer.module.scss";
import Link from "next/link";
export default function Footer() {
	return (
		<div className={style.footer}>
			<div className={style.icon}>
				<img src="/gym/icon.png" alt="logo" />
			</div>
			<div className={style.reach_us}>
				<div>
					<h4>How to reach us</h4>
				</div>
				<div>
					<p>A-98, Amazon World Noida Spectrum New Earth- 9811666</p>
					<p>(0123) 456 789</p>
					<p>info@ironforgefitness.com</p>
				</div>
			</div>
			<div className={style.nav}>
				<div>
					<h4>Navigation</h4>
				</div>
				<div>
					<div>
						<Link href="/gym/about_us">About Us</Link>
						<Link href="/gym/">Team</Link>
						<Link href="/gym/careers">Careers</Link>
					</div>
					<div>
						<Link href="/gym/contact_us">Contact Us</Link>
						<Link href="/gym/">FAQ</Link>
					</div>
				</div>
			</div>
			<div className={style.connect}>
				<div>
					<h4>Connect with us</h4>
				</div>
				<div>
					<img src="/gym/face.png" alt="" />
					<img src="/gym/twitter.png" alt="" />
					<img src="/gym/linked.png" alt="" />
					<img src="/gym/Insta.png" alt="" />
				</div>
			</div>
		</div>
	);
}
