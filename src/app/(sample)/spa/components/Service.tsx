import React from "react";
import style from "./service.module.scss";
import Link from "next/link";
export default function Service() {
	return (
		<div className={style.container}>
			<div className={style.main_heading}>
				<h1>Our Services</h1>
				<Link href="/spa">Explore more</Link>
			</div>
			<div className={style.cardcontainer}>
				<div className={style.card1}>
					<div className={style.img}>
						<img src="/spa/service1.png" />
					</div>
					<div className={style.content}>
						<div className={style.heading}>
							<p>01</p>
							<p>Massage Therapy</p>
						</div>
						<p>
							Discover a range of massage techniques expertly
							tailored to ease tension, enhance circulation, and
							promote relaxation
						</p>
						<Link href="/spa">Learn more</Link>
					</div>
				</div>
				<div className={style.card2}>
					<div className={style.img2}>
						<img src="/spa/service2.png" />
					</div>
					<div className={style.content2}>
						<div className={style.heading2}>
							<p>02</p>
							<p>Skincare Rituals</p>
						</div>
						<p>
							Experience the rejuvenating touch of our skincare
							specialists, leaving your skin radiant and
							refreshed.
						</p>
						<Link href="/spa">Learn more</Link>
					</div>
				</div>
				<div className={style.card1}>
					<div className={style.img}>
						<img src="/spa/service3.png" />
					</div>
					<div className={style.content}>
						<div className={style.heading}>
							<p>03</p>
							<p>Holistic Wellness</p>
						</div>
						<p>
							Unwind with holistic treatments that harmonize mind,
							body, and spirit, providing a holistic approach to
							your well-being
						</p>
						<Link href="/spa">Learn more</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
