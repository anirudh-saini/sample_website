import React from "react";
import style from "./experience.module.scss";
import Card from "./components/Card";

const cardsData = [
	{
		heading: "Piercing",
		img: "/tattoo/e1.jfif",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatem quidem dolore a non tempore sit molestias eius error ipsa, minima quas amet eos quae, rem, incidunt suscipit? Distinctio, iusto.",
	},
	{
		heading: "Piercing",
		img: "/tattoo/e2.jfif",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatem quidem dolore a non tempore sit molestias eius error ipsa, minima quas amet eos quae, rem, incidunt suscipit? Distinctio, iusto.",
	},
	{
		heading: "Detailed Tattoos ",
		img: "/tattoo/e3.jfif",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatem quidem dolore a non tempore sit molestias eius error ipsa, minima quas amet eos quae, rem, incidunt suscipit? Distinctio, iusto.",
	},
];

export default function Experience() {
	const cards = cardsData.map((card, index) => {
		return <Card key={card.heading + index} data={card} />;
	});

	return (
		<div className={style.parent}>
			<div className={style.experience}>
				<h2 className={style.heading}>
					Experience Art as Never before!
				</h2>

				<div className={style.cards}>{cards}</div>
			</div>
		</div>
	);
}
