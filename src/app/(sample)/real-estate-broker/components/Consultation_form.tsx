import React from "react";
import style from "./consultation_form.module.scss";
export default function Consultation_form() {
    return (
        <div className={style.consultation}>
            <div className={style.content}>
                <h3>Get a Free Consultation Now!</h3>
                <div>
                    <div>
                        <img src="/real-estate/phone.png" alt="" />
                    </div>

                    <div>
                        <p>Mobile: 876.392.5729</p>
                        <p>Phone: 384.674.1028</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="/real-estate/email.png" alt="" />
                    </div>
                    <div>
                        <p>Email: info@urbannest.com</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="/real-estate/location.png" alt="" />
                    </div>
                    <div>
                        <p>456 Oak Avenue San Francisco, CA 94102</p>
                    </div>
                </div>
            </div>
            <div className={style.form}>
                <form>
                    <input type="text" placeholder="Your name" />
                    <input type="number" placeholder="Phone number" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Preferred Date" />
                    <input
                        type="text"
                        placeholder="Anything you want to tell us"
                    />
                </form>
                <div className={style.button}>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}
