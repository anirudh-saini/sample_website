import React from "react";
import style from "./contact.module.scss";
import Nav from "../components/Nav";
import Book from "../components/Book";
import Footer from "../components/Footer";
export default function page() {
    return (
        <div>
            <div className={style.nav}>
                <div className={style.component}>
                    <Nav />
                </div>
                <div className={style.nav_cantent}>
                    <div className={style.heading}>
                        <h1>
                            Get in touch with an expert.{" "}
                            <span>Talk with sales.</span>
                        </h1>
                        <p>Lorem Ipsum </p>
                    </div>

                    <div className={style.form}>
                        <form>
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Email ID" />
                            <input type="number" placeholder="Phone Number" />
                            <input
                                type="number"
                                placeholder="Body Mass Index"
                            />
                            <input
                                type="text"
                                placeholder="Previous Member of any Gym?"
                            />
                            <div className={style.subform}>
                                <input type="text" placeholder="Gender" />
                                <input type="text" placeholder="Location" />
                            </div>
                            <div>
                                <button>Submit</button>
                            </div>
                        </form>
                        <p>
                            By submitting this form, you agree to receive
                            promotional messages from Iron Forge Fitness, and
                            you can unsubscribe from at any point of time.
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.map}></div>
            <div className={style.booking}>
                <Book />
            </div>
            <div className={style.footer}>
                <Footer />
                <div className={style.copy}>
                    <p>©2024 Copyright owned by Iron Forge Fitness</p>
                </div>
            </div>
        </div>
    );
}
