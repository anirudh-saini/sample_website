import React from "react";
import styles from "./card.module.scss";

interface CardProps {
	data: {
		heading: string;
		img: string;
		text: string;
	};
}

export default function Card({ data }: CardProps) {
	return (
		<div className={styles.card}>
			<div className={styles.visual}>
				<img src={data.img} alt={data.heading} />

				<div className={styles.heading}>
					<h3>{data.heading}</h3>
				</div>
			</div>

			<div className={styles.info}>
				<h3>{data.heading}</h3>

				<p>{data.text}</p>
			</div>
		</div>
	);
}
