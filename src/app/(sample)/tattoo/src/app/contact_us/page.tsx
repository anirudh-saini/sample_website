import React from "react";
import Nav from "../compound/Nav";
import style from "./contact.module.scss";
import Footer from "../compound/components/Footer";
export default function page() {
    return (
        <div>
            <Nav />
            <div className={style.contact}>
                <div className={style.design}></div>
                <div className={style.contact_content}>
                    <div className={style.head}>
                        <h2>Contact Us :&#41;</h2>
                        <div className={style.contact_img}>
                            <img src="/contact.png" alt="image" />
                        </div>
                    </div>

                    <div className={style.input}>
                        <h3>Appointment</h3>
                        <form>
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="Mobile" />
                            <input
                                type="text"
                                placeholder="What Are You Looking For?"
                            />
                            <input type="text" placeholder="Preferred Artist" />
                            <input
                                type="text"
                                placeholder="Location of Tattoo on Body"
                            />
                            <p>
                                Disclaimer: By clicking submit, you agree to
                                receive communications from Devil&#39;s Tattoo
                                in accordance with our
                                <span>Privacy Policy</span> .
                            </p>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={style.main_footer}>
                <Footer />
            </div>
        </div>
    );
}
