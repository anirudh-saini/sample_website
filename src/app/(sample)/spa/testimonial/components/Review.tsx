import React from "react";
import Link from "next/link";
import style from "./review.module.scss";
export default function Review() {
	return (
		<div className={style.review}>
			<div className={style.head}>
				<p>
					Discover what our valued guests have to say about their
					experiences at Haven of Harmony. From rejuvenating spa
					treatments to personalized wellness sessions, our guests
					share their stories of relaxation, renewal, and serenity.
				</p>
			</div>

			<div className={style.img}>
				<div className={style.img_1}>
					<div>
						<img src="./t1.png" alt="" />
					</div>
					<div>
						<p>
							"Haven of Harmony is a true sanctuary for the soul.
							From the moment I walked in, I was greeted with
							warmth and tranquility. The massage I received was
							one of the best I've ever had, and I left feeling
							completely relaxed and rejuvenated. I can't wait to
							return!"
						</p>
						<p>- Emily S.</p>
					</div>
				</div>
				<div>
					<div>
						<img src="./t2.png" alt="" />
					</div>
					<div>
						<p>
							"I had the most wonderful experience at Haven of
							Harmony. The facial I received was not only
							incredibly relaxing but also left my skin glowing
							and refreshed. The entire atmosphere of the spa is
							so peaceful and serene—I could have stayed all day!"
						</p>
						<p>- Mark L.</p>
					</div>
				</div>
				<div>
					<div>
						<img src="./t3.png" alt="" />
					</div>
					<div>
						<p>
							"I recently visited Haven of Harmony for a special
							occasion package, and it exceeded all of my
							expectations. The attention to detail and level of
							service were exceptional, and I felt truly pampered
							from start to finish. I highly recommend this spa to
							anyone looking for a luxurious and rejuvenating
							experience."
						</p>
						<p>- Sarah R.</p>
					</div>
				</div>
				<div>
					<div>
						<img src="./t4.png" alt="" />
					</div>
					<div>
						<p>
							"Haven of Harmony provided the perfect escape from
							the hustle and bustle of daily life. The massage
							therapist was attentive and skilled, and the
							ambiance of the spa was so calming and inviting. It
							was exactly what I needed to unwind and recharge."
						</p>
						<p>- David M.</p>
					</div>
				</div>
				<div>
					<div>
						<img src="./t5.png" alt="" />
					</div>
					<div>
						<p>
							"I've been dealing with chronic pain for years, and
							I finally found relief at Haven of Harmony. The
							holistic wellness session I received was
							transformative—I felt a sense of peace and balance
							that I hadn't experienced in a long time. I'm so
							grateful for the caring and knowledgeable staff at
							this spa."
						</p>
						<p>- Jessica T.</p>
					</div>
				</div>
				<div>
					<div>
						<img src="./t6.png" alt="" />
					</div>
					<div>
						<p>
							"At Haven of Harmony, stress melts away and
							tranquility reigns supreme. The massage was
							soothing, and the attention to detail impeccable. I
							left feeling rejuvenated, with renewed energy. Thank
							you, Haven of Harmony, for a restorative retreat."
						</p>
						<p>- Laura K.</p>
					</div>
				</div>
			</div>
			<div className={style.content}>
				<div>
					<p>
						Want to be the face of Haven of Harmony too? Submit a
						testimonial here!
					</p>
					<Link href="/spa">Submit a Testimonial</Link>
				</div>

				<p>
					Ready to experience the serenity for yourself? Book your
					appointment today and discover the Haven of Harmony
					difference.
				</p>
			</div>
		</div>
	);
}
