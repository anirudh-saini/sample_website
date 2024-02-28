import React from "react";
import style from "./gallery_c3.module.scss";
export default function Gallery_c3() {
	return (
		<div className={style.gallery}>
			<p>
				Whether you're drawn to the soothing ambiance of our relaxation
				lounges, the tranquil beauty of our treatment rooms, or the
				expert care of our therapists, our gallery offers a glimpse into
				the sanctuary that awaits you at Haven of Harmony. We invite you
				to explore our images and imagine the possibilities for your own
				personalized spa experience.
			</p>
			<div className={style.img}>
				<div className={style.item1}>
					<img src="/spa/gallery3.png" alt="image" />
				</div>
				<div className={style.item2}>
					<img src="/spa/gallery4.png" alt="image" />
				</div>
				<div className={style.item3}>
					<img src="/spa/gallery5.png" alt="image" />
				</div>
				<div className={style.item4}>
					<img src="/spa/gallery6.png" alt="image" />
				</div>
				<div className={style.item5}>
					<img src="/spa/gallery7.png" alt="image" />
				</div>
				<div className={style.item6}>
					<img src="/spa/gallery8.png" alt="image" />
				</div>
				<div className={style.item7}>
					<img src="/spa/gallery9.png" alt="image" />
				</div>
				<div className={style.item8}>
					<img src="/spa/ex1.png" alt="image" />
				</div>
				<div className={style.item9}>
					<img src="/spa/gallery10.png" alt="image" />
				</div>
			</div>
			<div>
				<p>
					Ready to experience the serenity for yourself? Book your
					appointment today and embark on a journey to relaxation and
					renewal at Haven of Harmony
				</p>
			</div>
		</div>
	);
}
