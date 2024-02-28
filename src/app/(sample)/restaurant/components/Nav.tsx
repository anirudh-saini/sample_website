import React from "react";
import Top_nav from "./Top_nav";
export default function Nav() {
	return (
		<nav>
			<div className="bg">
				<Top_nav />
				<div className="container ">
					<div className="nav_content">
						<img src="/restaurant/logo.svg " alt="logo" />
						<p>
							GoldenWok: where traditional meets modern in
							Chinese-American fusion. Savor expertly crafted
							dishes for an unforgettable dining experience.
						</p>
						<div className="nav_content_button">
							<button>View our Menu</button>
							<button>Book a Table</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
