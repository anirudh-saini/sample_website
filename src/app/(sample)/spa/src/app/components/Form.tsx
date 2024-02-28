import React from "react";
import style from "./form.module.scss";
export default function Form() {
    return (
        <div className={style.form}>
            <div className={style.bg}>
                <picture>
                    <source
                        media="(min-width: 2000px)"
                        srcSet="./form_1536.png"
                    />
                    <source
                        media="(min-width: 48em)"
                        srcSet="./form_1440.png"
                    />
                    {/* <source
                        media="(min-width: 1440px)"
                        srcSet="./form_1024.png"
                    /> */}
                    {/* <source
                        media="(min-width: 1024px)"
                        srcSet="./form_768.png"
                    /> */}
                    {/* <source
                        media="(min-width: 768px)"
                        srcSet="./form_640.png"
                    /> */}
                    <source
                        media="(min-width: 641px)"
                        srcSet="./form_640.png"
                    />
                    <img src="./form_375.png" />
                </picture>
            </div>

            <div className={style.content}>
                <div className={style.sub_content}>
                    <h3>Book Your Escape</h3>
                    <p>
                        Ready to embark on your journey to relaxation? Reserve
                        your spa experience with just a click
                    </p>
                    <input type="text" placeholder="Your name" />
                    <input type="number" placeholder="Phone number" />
                    <input type="email" placeholder="Email" />
                    <input type="number" placeholder="Preferred Date" />
                    <input
                        type="text"
                        placeholder="Anything you want to tell us"
                    />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
