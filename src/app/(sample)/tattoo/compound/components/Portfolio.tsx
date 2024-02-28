import React from "react";
import style from "./portfolio.module.scss";
import Link from "next/link";
export default function Portfolio() {
	return (
		<div className={style.container}>
			<div className={style.heading}>
				<h3>Portfolio</h3>
			</div>
			<div className={style.portfolio}>
				<div className={style.item1}>
					<h3>Portfolio</h3>
				</div>
				<div className={style.item2}>
					<img src="/tattoo/p1.png" alt="image" />
				</div>
				<div className={style.item3}>
					<img src="/tattoo/p2.png" alt="image" />
				</div>
				<div className={style.item4}>
					<img src="/tattoo/p3.png" alt="image" />
				</div>
				<div className={style.item5}>
					<img src="/tattoo/p4.png" alt="image" />
				</div>
				<div className={style.item6}>
					<img src="/tattoo/p5.png" alt="image" />
				</div>
				<div className={style.item7}>
					<img src="/tattoo/p6.png" alt="image" />
				</div>
				<div className={style.item8}>
					<img src="/tattoo/p7.png" alt="image" />
				</div>
				<div className={style.item9}>
					<img src="/tattoo/p8.png" alt="image" />
				</div>
				<div className={style.item10}>
					<img src="/tattoo/p9.png" alt="image" />
				</div>
				<div className={style.item11}>
					<img src="/tattoo/p10.png" alt="image" />
				</div>
				<div className={style.item12}>
					<img src="/tattoo/p11.png" alt="image" />
				</div>
				<div className={style.item13}>
					<img src="/tattoo/p12.png" alt="image" />
				</div>
			</div>
			<div className={style.link}>
				<Link href="/tattoo">View all</Link>
			</div>
		</div>
	);
}
