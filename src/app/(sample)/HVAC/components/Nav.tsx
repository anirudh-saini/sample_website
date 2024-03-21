"use client";
import React, { useState } from "react";
import style from "./nav.module.scss";
import { Imperial_Script } from "next/font/google";
import Link from "next/link";
export default function Nav() {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <div className={style.nav}>
            <div className={style.navbar1}>
                <div>
                    <img src="/hvac/logo.png" />
                </div>
                <div className={style.contact}>
                    <div>
                        <div>
                            <img src="/hvac/email.png" />
                        </div>

                        <p>info@chillmasters.com</p>
                    </div>
                    <div>
                        <div>
                            <img src="/hvac/phone.png" />
                        </div>

                        <p>(0123) 456 789</p>
                    </div>
                </div>
            </div>
            <div className={style.navbar2}>
                <div className={style.container}>
                    <div className={style.logo}>
                        <img src="/hvac/white_logo.png" />
                    </div>
                    <div
                        className={`${style.list} ${navOpen ? style.open : ""}`}
                    >
                        <ul>
                            <li>
                                <Link href="/HVAC">Home</Link>
                            </li>
                            <li>
                                <Link href="/HVAC/about-us">About Us</Link>
                            </li>
                            <li>
                                <Link href="/HVAC/cooling-services">
                                    Air Condition
                                </Link>
                            </li>
                            <li>
                                <Link href="/HVAC/heating-services">
                                    Water Heaters
                                </Link>
                            </li>
                            <li>
                                <Link href="/HVAC/our-service">
                                    Service Areas
                                </Link>
                            </li>
                            <li>
                                <Link href="/HVAC/contact_us">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={style.burger}>
                        <input
                            type="checkbox"
                            id="toggle"
                            className={style.input}
                            checked={navOpen}
                            onChange={() => setNavOpen((prev) => !prev)}
                        />
                        <label
                            htmlFor="toggle"
                            className={`${navOpen ? style.open : ""}`}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
