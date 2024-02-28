"use client";
import React, { useState } from "react";
import Link from "next/link";
export default function Top_nav() {
	const [navOpen, setNavOpen] = useState(false);
	return (
		<div>
			<div className="nav">
				<div className="container">
					<div className="nav_container2">
						<div className="nav_logo">
							<img src="/restaurant/logo2.svg" alt="logo2" />
						</div>
						<div className="nav_items">
							<div className="nav_items_burger">
								<input
									type="checkbox"
									id="Toggle"
									//  onClick={handleCheckboxClick}
									checked={navOpen}
									onChange={() => setNavOpen((prev) => !prev)}
								/>
								<label htmlFor="Toggle">
									<div className="Menu-container">
										<div className="line" id="active"></div>
									</div>
								</label>
							</div>

							<div
								className={`nav_items_menu ${
									navOpen ? "open" : ""
								}`}
							>
								<ul>
									<li>
										<Link href="/restaurant/">Home</Link>
									</li>
									<li>
										<Link href="/restaurant/Menu">
											Menu
										</Link>
									</li>
									<li>
										<Link href="/restaurant/About_Us">
											About Us{" "}
										</Link>
									</li>
									<li>
										<Link href="/restaurant/event">
											Event
										</Link>
									</li>
									<li>
										<Link
											href="/restaurant/"
											className="button"
										>
											Book a Table
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
