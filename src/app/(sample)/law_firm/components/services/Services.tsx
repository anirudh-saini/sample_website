import React from "react";
import styles from "./services.module.scss";

const data = [
	{
		heading: "Personal Injury",
		icon: "/law_firm/icon1.png",
		text: "These cases encompass errors in diagnosis, treatment, surgery, or inadequate patient care.",
	},
	{
		heading: "Car Accident",
		icon: "/law_firm/icon2.png",
		text: "These cases encompass errors in diagnosis, treatment, surgery, or inadequate patient care.",
	},
	{
		heading: "Veteran's Disability",
		icon: "/law_firm/icon3.png",
		text: "These cases encompass errors in diagnosis, treatment, surgery, or inadequate patient care.",
	},
	{
		heading: "Social Security",
		icon: "/law_firm/icon4.png",
		text: "These cases encompass errors in diagnosis, treatment, surgery, or inadequate patient care.",
	},
	{
		heading: "Medical Malpractice",
		icon: "/law_firm/icon5.png",
		text: "These cases encompass errors in diagnosis, treatment, surgery, or inadequate patient care.",
	},
];

export default function Services() {
	const items = data.map((item) => {
		return (
			<div key={item.heading} className={styles.item}>
				<div className={styles.itemDisplay}>
					<img src={item.icon} />

					<h3>{item.heading}</h3>
				</div>

				<div className={styles.itemContent}>
					<img src={item.icon} />

					<h3>{item.heading}</h3>

					<p>{item.text}</p>
				</div>
			</div>
		);
	});

	return <div className={styles.services}>{items}</div>;
}
