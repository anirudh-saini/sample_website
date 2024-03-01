import Link from "next/link";
import React from "react";

export default function Food() {
	return (
		<div className="food">
			<div className="food-item">
				<div className="food-item__image">
					<img src="/restaurant/food1.png" alt="food" />
				</div>
				<div className="food-item__content">
					<h2>
						Your Ultimate Barbeque <span>Experience</span>
					</h2>
					<p>
						Indulge in the essence of Chinese barbecue, where savory
						meats meet the sizzle of the grill for an unforgettable
						culinary experience.
					</p>
					<Link href="/restaurant/"> Learn More</Link>
				</div>
			</div>

			<div className="food-item">
				<div className="food-item__image">
					<img src="/restaurant/food2.png" />
				</div>

				<div className="food-item__content">
					<h2>
						Crafting
						<span> Culinary Art</span>
					</h2>
					<p>
						Embark on a culinary voyage through the artistry of
						Chinese cuisine, where flavors are masterfully crafted
						into every exquisite dish.
					</p>
					<Link href="/restaurant/"> Learn More</Link>
				</div>
			</div>
		</div>
	);
}
