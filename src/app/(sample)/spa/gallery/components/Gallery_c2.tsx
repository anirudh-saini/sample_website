import React from "react";
import style from "./gallery_c2.module.scss";
export default function Gallery_c2() {
	return (
		<div className={style.gallery}>
			<p>
				At Haven of Harmony, every detail is thoughtfully curated to
				create an atmosphere of serenity and comfort. From the moment
				you step through our doors, you'll be enveloped in a sense of
				calm, leaving the stresses of the outside world behind. Take a
				moment to browse through our gallery and envision yourself
				indulging in a blissful escape where your well-being is our top
				priority.
			</p>
			<div className={style.img}>
				<div className={style.item1}>
					<img src="/spa/gallery11.png" alt="image" />
				</div>
				<div className={style.item2}>
					<img src="/spa/gallery12.png" alt="image" />
				</div>
				<div className={style.item3}>
					<img src="/spa/gallery13.png" alt="image" />
				</div>
				<div className={style.item4}>
					<img src="/spa/gallery14.png" alt="image" />
				</div>
				<div className={style.item5}>
					<img src="/spa/gallery15.png" alt="image" />
				</div>
				<div className={style.item6}>
					<img src="/spa/gallery16.png" alt="image" />
				</div>
			</div>
		</div>
	);
}
