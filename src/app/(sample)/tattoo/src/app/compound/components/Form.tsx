import React from "react";
import style from "./form.module.scss";
export default function Form() {
    return (
        <div className={style.form}>
            <div className={style.box}>
                <div className={style.design}></div>
            </div>

            <div className={style.form_content}>
                <div className={style.head}>
                    <h2>Bookings Open Now</h2>
                    <img src="/form.png" alt="image" />
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
                        <p>
                            Disclaimer: By clicking submit, you agree to receive
                            communications from Devil&#39;s Tattoo in accordance
                            with our <span>Privacy Policy</span> .
                        </p>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
            <div className={style.box}>
                <div className={style.design}></div>
            </div>
        </div>
    );
}
