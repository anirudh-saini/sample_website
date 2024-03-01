"use client";
import React, { useState } from "react";
import style from "./nav.module.scss";
import Link from "next/link";
export default function Nav() {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <div className={style.navbar}>
            <div className={style.call}>
                <div className={style.contact}>
                    <div className={style.email}>
                        <div>
                            <img src="/law_firm/email.png" alt="" />
                        </div>
                        <div>
                            <img src="/law_firm/email1.png" alt="" />
                        </div>
                        <p>info@youvebeenlawyered.com</p>
                    </div>
                    <div className={style.support}>
                        <p>24/7 Call Support, Call Us Anytime!</p>
                    </div>
                    <div className={style.img}>
                        <div>
                            <img src="/law_firm/flag1.png" alt="" />
                        </div>
                        <div>
                            <img src="/law_firm/flag2.png" alt="" />
                        </div>
                        <div>
                            <img src="/law_firm/flag3.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className={style.consultation}>
                    <p>Free Consultation</p>
                </div>
            </div>
            <div className={style.container}>
                <nav className={style.nav}>
                    <div className={style.name}>
                        <img src="/law_firm/icon.png" alt="icon" />
                    </div>
                    <div
                        className={`${style.list} ${navOpen ? style.open : ""}`}
                    >
                        <ul>
                            <li>
                                <Link href="/law_firm">Home</Link>
                            </li>
                            <li>
                                <Link href="/law_firm/about_us">
                                    Client Reviews
                                </Link>
                            </li>
                            <li>
                                <Link href="/law_firm/careers">About Us</Link>
                            </li>
                            <li>
                                <Link href="/law_firm/contact_us">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={style.number}>
                        <p>+123 098 2181 18</p>
                    </div>

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
                </nav>
            </div>
        </div>
    );
}
