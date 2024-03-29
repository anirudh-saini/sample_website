"use client";
import React, { useState } from "react";
import style from "./nav.module.scss";
import Link from "next/link";
export default function Nav() {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <div className={style.nav}>
            {/* <div className={style.contact}>
                <div>
                    <div>
                        <img src="/auto_services/logo.png" alt="logo" />
                    </div>
                    <div>
                        <p>Call Us on +0123 918 1281 Now!</p>
                    </div>
                    <div>
                        <p>info@geargurus.com </p>
                    </div>
                </div>
            </div> */}
            <div className={style.navbar}>
                <div>
                    <div className={style.burger}>
                        <div>
                            <img src="/pest/logo.png" alt="logo" />
                        </div>
                        <div className={style.label}>
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

                    <div
                        className={`${style.list} ${navOpen ? style.open : ""}`}
                    >
                        <ul>
                            <li>
                                <Link href="/pest-control">Home</Link>
                            </li>
                            <li>
                                <Link href="/pest-control/about-us">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/pest-control/our-services">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/pest-control/how-we-do-it">
                                    How We Do it
                                </Link>
                            </li>
                            <li>
                                <Link href="/pest-control/testimonial">
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link href="/pest-control/contact-us">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/pest-control">Book a Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
