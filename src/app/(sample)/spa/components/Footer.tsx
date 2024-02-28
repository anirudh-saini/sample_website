import React from "react";
import style from "./footer.module.scss";
export default function Footer() {
	return (
		<div className={style.footer}>
			<div className={style.letter}>
				<h3>Join our Newsletter</h3>
				<p>
					Sign up for our newsletter to receive the latest news and
					promotions, ensuring you never miss an opportunity to
					elevate your well-being.
				</p>
				<input type="email" placeholder="Enter your email" />
			</div>
			<div className={style.content}>
				<div className={style.sub_content}>
					<div className={style.haven}>
						<h3>Haven of Harmony</h3>
						<div>
							<h4>Get in Touch</h4>
							<div>
								<p>Mobile: 876.392.5729</p>
								<p>Phone: 384.674.1028</p>
							</div>
						</div>
						<p>456 Oak Avenue San Francisco, CA 94102</p>

						<div className={style.contact}>
							<p>Connect With Us</p>
							<img src="/spa/footer.png" alt="contact" />
						</div>
						<div className={style.career}>
							<h4>Careers</h4>
							<p>Join Now</p>
						</div>
					</div>
					<div className={style.useful}>
						<div className={style.useful_content}>
							<h4>Useful Links</h4>

							<p>Our Services</p>
							<p>Gallery</p>
							<p>Packages & Pricing</p>
							<p>Testimonials</p>
						</div>
						<div className={style.useful_content}>
							<h4>Location</h4>

							<p>California</p>
							<p>Connecticut </p>
							<p>Phoenix </p>
						</div>
						<div className={style.career2}>
							<h4>Careers</h4>
							<p>Join Now</p>
						</div>
					</div>
				</div>
				<div className={style.copyright}>
					<p>Copyright © 2023 , HavenofHarmony All Rights Reserved</p>
				</div>
			</div>
		</div>
	);
}
