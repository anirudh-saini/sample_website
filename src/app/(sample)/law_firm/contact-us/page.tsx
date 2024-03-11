import React from "react";
import style from "./contact.module.scss";
export default function page() {
    return (
        <div className={style.contact}>
            <div className={style.content}>
                <h1>Contact Justice Link Legal</h1>
                <div className={style.text}>
                    <div>
                        <h4>
                            Trust our seasoned attorneys for tailored solutions
                            to your legal needs.
                        </h4>
                    </div>
                    <div>
                        <h4>
                            Our firm ensures your voice is heard and your
                            interests are protected.
                        </h4>
                    </div>
                    <div>
                        <h4>
                            Seek justice confidently with our skilled team by
                            your side.
                        </h4>
                    </div>
                </div>
                <div className={style.trusted}>
                    <h3>Trusted By</h3>
                    <div>
                        <img src="/law_firm/contact.png" alt="" />
                    </div>
                </div>
            </div>
            <div className={style.form}>
                <form className={style.form_contant}>
                    <h3>Request a Call Back</h3>
                    <div className={style.field}>
                        <div className={style.field1}>
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Type of Case" />
                            <input type="text" placeholder="Phone" />
                            <input type="text" placeholder="Select City" />
                        </div>
                        <div className={style.field2}>
                            <input type="text" placeholder="Last Name" />
                            <input type="text" placeholder="Email Address" />
                            <input type="text" placeholder="Select City" />
                            <input type="text" placeholder="Budget" />
                        </div>
                    </div>
                    <div className={style.checkbox1}>
                        <input type="checkbox" required />
                        <p>
                            By checking this box, you agree to Chill Mastrs &
                            Co’s Teams & Conditions and Privacy Policy.
                        </p>
                    </div>
                    <div className={style.checkbox2}>
                        <input type="checkbox" required />
                        <p>
                            I consent to receiving marketing communications,
                            promotions/offers and content from the Chill Masters
                            & Co by email, text (including WhatsaApp), and
                            social media channels about its product, services or
                            brands.
                        </p>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
