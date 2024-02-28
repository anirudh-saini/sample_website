import React from "react";
import style from "./form.module.scss";
export default function Form() {
	return (
		<div className={style.form}>
			<div className={style.bg}>
				<picture>
					<source
						media="(min-width: 2000px)"
						srcSet="/spa/form_1536.png"
					/>
					<source
						media="(min-width: 48em)"
						srcSet="/spa/form_1440.png"
					/>
					{/* <source
                        media="(min-width: 1440px)"
                        srcSet="/spa/form_1024.png"
                    /> */}
					{/* <source
                        media="(min-width: 1024px)"
                        srcSet="/spa/form_768.png"
                    /> */}
					{/* <source
                        media="(min-width: 768px)"
                        srcSet="/spa/form_640.png"
                    /> */}
					<source
						media="(min-width: 641px)"
						srcSet="/spa/form_640.png"
					/>
					<img src="/spa/form_375.png" />
				</picture>
			</div>

			<div className={style.content}>
				<form className={style.sub_content}>
					<h3>Book Your Escape</h3>
					<p>
						Ready to embark on your journey to relaxation? Reserve
						your spa experience with just a click
					</p>
					<input required type="text" placeholder="Your name" />
					<input required type="number" placeholder="Phone number" />
					<input required type="email" placeholder="Email" />
					<input
						required
						type="number"
						placeholder="Preferred Date"
					/>
					<input
						required
						type="text"
						placeholder="Anything you want to tell us"
					/>
					<div>
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
}
