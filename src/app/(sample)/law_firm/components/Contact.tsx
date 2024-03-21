import React from "react";
import style from "./contact.module.scss";

interface data {
    data: {
        head: string;
        sub_head1: string;
        sub_head2: string;
        sub_head3: string;
        form_head: string;
        placeholder1: string;
        placeholder2: string;
    };
    type: "normal" | "blue";
}

export default function Contact({ data, type }: data) {
    return (
        <div className={`${type === "blue" ? style.blue : ""}`}>
            <div className={style.bg_contact}>
                <div className={style.contact}>
                    <div className={style.content}>
                        <h1>{data.head}</h1>
                        <div className={style.text}>
                            <div>
                                <h4>{data.sub_head1}</h4>
                            </div>
                            <div>
                                <h4>{data.sub_head2}</h4>
                            </div>
                            <div>
                                <h4>{data.sub_head3}</h4>
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
                            <h3>{data.form_head}</h3>
                            <div className={style.container}>
                                <div className={style.field}>
                                    <div className={style.field1}>
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                        />
                                        <input
                                            type="text"
                                            placeholder={data.placeholder1}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Phone"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Select City"
                                        />
                                    </div>
                                    <div className={style.field2}>
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Email Address"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Select City"
                                        />
                                        <input
                                            type="text"
                                            placeholder={data.placeholder2}
                                        />
                                    </div>
                                </div>
                                <div className={style.checkbox1}>
                                    <input type="checkbox" required />
                                    <p>
                                        By checking this box, you agree to Chill
                                        Mastrs & Co &apos;s Teams & Conditions
                                        and Privacy Policy.
                                    </p>
                                </div>
                                <div className={style.checkbox2}>
                                    <input type="checkbox" required />
                                    <p>
                                        I consent to receiving marketing
                                        communications, promotions/offers and
                                        content from the Chill Masters & Co by
                                        email, text (including WhatsaApp), and
                                        social media channels about its product,
                                        services or brands.
                                    </p>
                                </div>
                                <div className={style.button}>
                                    <button>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
