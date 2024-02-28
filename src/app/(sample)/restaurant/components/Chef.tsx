import React from "react";
import Link from "next/link";
export default function () {
	return (
		<div className="chef">
			<div className="chef_heading">
				<h2>
					Masters in <span>the Wok</span>
				</h2>
				<p>
					Discover the passion, skill, and artistry behind every dish
					as our talented chefs bring centuries-old Chinese culinary
					traditions to life with innovative flair and a touch of
					modern mastery
				</p>
				<Link href="/restaurant">Learn More&rarr;</Link>
			</div>
			<div className="chef_img">
				<div className="chef_img1">
					<div className="chef_img1_1">
						<img src="/restaurant/chef1.svg" alt="chef" />
						<h3>Chef Gourmet Guru</h3>
						<p>
							Dim Sum Artisan, Crafting Culinary Masterpieces with
							Tradition.
						</p>
					</div>
					<div className="chef_img1_2">
						<img src="/restaurant/chef2.svg" alt="chef" />
						<h3>Master Chef</h3>
						<p>
							Wok Wizard, Transforming Ingredients into Sizzling
							Sensations
						</p>
					</div>
				</div>
				<div className="chef_img2">
					<img src="/restaurant/chef3.svg" alt="chef" />
					<h3>The Saucy Chef</h3>
					<p>
						Grill Guru, Mastering Chinese Barbecue with Fiery Flair
					</p>
				</div>
			</div>
		</div>
	);
}
