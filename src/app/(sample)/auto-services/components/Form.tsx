import React from "react";
import style from "./form.module.scss";
export default function Form() {
    return (
        <div>
            <div className={style.help}>
                <h3>HELP US HELP YOU</h3>
                <p>
                    This data helps us formulate a brief plan before meeting
                    with you
                </p>
            </div>
            <div className={style.form_bg}>
                <div className={style.form}>
                    <form>
                        <input type="string" placeholder="Your name" />
                        <input type="string" placeholder="Phone number" />
                        <input
                            type="string"
                            placeholder="Anything you want to tell us"
                        />
                        <input type="string" placeholder="Type of vehicle" />
                        <input
                            type="string"
                            placeholder="Select a difficulty"
                        />
                    </form>
                    <div>
                        <button>Book a slot</button>
                        <button>Call us</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
