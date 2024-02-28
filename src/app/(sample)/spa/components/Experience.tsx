import React from "react";
import style from "./experience.module.scss";
import Link from "next/link";
export default function Experience() {
	return (
		<div className={style.exp}>
			<div className={style.heading}>
				<h1>Experience Serenity</h1>
				<p>
					Explore our meticulously designed spa environment, where
					soothing colors and natural elements create an atmosphere of
					pure tranquility
				</p>
				<div className={style.link}>
					<Link href="/spa">Explore gallery</Link>
				</div>
			</div>
			<div className={style.img}>
				<div className={style.slides}>
					<div className={style.slide}>
						<img src="/spa/ex1.png" alt="" />
					</div>

					<div className={style.slide}>
						<img src="/spa/ex2.png" alt="" />
					</div>

					<div className={style.slide}>
						<img src="/spa/ex3.png" alt="" />
					</div>

					<div className={style.slides_heading}>
						<h1>Experience Serenity</h1>
						<p>
							Explore our meticulously designed spa environment,
							where soothing colors and natural elements create an
							atmosphere of pure tranquility
						</p>

						<div className={style.link}>
							<Link href="/spa">Explore gallery</Link>
						</div>
					</div>

					<div className={style.slide}>
						<img src="/spa/ex4.png" alt="" />
					</div>

					<div className={style.slide}>
						<img src="/spa/ex5.png" alt="" />
					</div>

					<div className={style.slide}>
						<img src="/spa/ex6.png" alt="" />
					</div>

					<div className={style.slide}>
						<img src="/spa/ex1.png" alt="" />
					</div>
					<div className={style.slide}>
						<img src="/spa/ex2.png" alt="" />
					</div>
					<div className={style.slide}>
						<img src="/spa/ex3.png" alt="" />
					</div>
					<div className={style.slide}>
						<img src="/spa/ex4.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}
