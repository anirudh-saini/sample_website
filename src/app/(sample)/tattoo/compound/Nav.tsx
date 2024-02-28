"use client";
import React, { useState } from "react";
import style from "./nav.module.scss";
import Link from "next/link";

export default function Nav() {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<div className={style.nav}>
			<div className={style.navbar}>
				<div className={style.discount}>
					<p>Book your first tattoo online with us and get 20% off</p>
				</div>

				<div className={style.menu}>
					<div className={style.nav_icon}>
						<div>
							<input
								type="checkbox"
								id={style.Toggle}
								className={style.input}
								// onClick={handleCheckboxClick}
								checked={navOpen}
								onChange={() => setNavOpen((prev) => !prev)}
							/>
							<label htmlFor={style.Toggle}>
								<div className={style.Menu_container}>
									<div
										className={style.line}
										id={style.active}
									></div>
								</div>
							</label>
						</div>
					</div>

					<div
						className={`${style.list} ${navOpen ? style.open : ""}`}
					>
						<ul>
							<li>
								<Link href="/tattoo/">Home</Link>
							</li>
							<li>
								<Link href="/tattoo/artists">Artists</Link>
							</li>
							<li>
								<img src="/tattoo/logo.svg" alt="logo" />
							</li>
							<li>
								<Link href="/tattoo/about_us">About</Link>
							</li>
							<li>
								<Link href="/tattoo/contact_us">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					<div className={style.logo}>
						<img src="/tattoo/logo.svg" alt="logo" />
					</div>
				</div>
			</div>
		</div>
	);
}
