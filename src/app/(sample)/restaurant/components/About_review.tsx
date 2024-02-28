import React from "react";
import style from "./about_review.module.scss";
export default function About_review() {
	return (
		<div className={style.bg}>
			<h3>
				Customer Stories and <span>Testimonials</span>
			</h3>
			<div className={`container ${style.review}`}>
				{/* <div className={style.arrow}>
					<p>&lt;</p>
				</div> */}
				<div className={style.comment}>
					<p>
						"Wow, Golden Wok is like a flavor explosion in every
						bite! The barbeque is next level, and the chefs really
						know their stuff. Best Chinese in town!"
					</p>
					<p>Joshna Lohaan, 23</p>
				</div>
				<div className={style.line}>
					<img src="/restaurant/review_line.svg" />
				</div>
				<div className={style.comment}>
					<p>
						"Had the most amazing dinner at Golden Wok! The ambience
						is cozy, and the food is just perfect. Loved the
						attention to detail in every dish. Definitely coming
						back!"
					</p>
					<p>Priyanshu Das, 20</p>
				</div>
				<div className={style.line}>
					<img src="/restaurant/review_line.svg" />
				</div>
				<div className={style.comment}>
					<p>
						"Golden Wok = Happiness on a plate! The noodles were
						slurp-worthy, and the service was top-notch. My taste
						buds are still dancing. Highly recommend!"
					</p>
					<p>Arsh Khan, 27</p>
				</div>
				{/* <div className={style.arrow}>
					<p>&gt;</p>
				</div> */}
			</div>
		</div>
	);
}
