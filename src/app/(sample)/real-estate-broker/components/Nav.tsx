"use client";
import React, { useState } from "react";
import style from "./nav.module.scss";
import Link from "next/link";

export default function Nav() {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className={style.nav}>
            <div className={style.navbar}>
                {/* <div className={style.discount}>
                    <p>Book your first tattoo online with us and get 20% off</p>
                </div> */}

                <div className={style.menu}>
                    <div className={style.nav_icon}>
                        <div>
                            <input
                                type="checkbox"
                                id={style.Toggle}
                                className={style.input}
                                // onClick={handleCheckboxClick}
                                checked={navOpen}
                                onChange={() => setNavOpen((prev) => !prev)}
                            />
                            <label htmlFor={style.Toggle}>
                                <div className={style.Menu_container}>
                                    <div
                                        className={style.line}
                                        id={style.active}
                                    ></div>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div
                        className={`${style.list} ${navOpen ? style.open : ""}`}
                    >
                        <ul>
                            <li>
                                <Link href="/real-estate-broker">Home</Link>
                            </li>
                            <li>
                                <Link href="/real-estate-broker/properties">
                                    Properties
                                </Link>
                            </li>
                            <li>
                                <img src="/real-estate/logo.png" alt="logo" />
                            </li>
                            <li>
                                <Link href="/real-estate-broker/events">
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link href="/real-estate-broker/testimonials">
                                    Testimonials
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className={style.logo}>
                        <img src="/real-estate/logo.png" alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}
