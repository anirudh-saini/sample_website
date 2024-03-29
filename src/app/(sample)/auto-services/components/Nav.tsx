"use client";
import React, { useState } from "react";
import style from "./nav.module.scss";
import Link from "next/link";
export default function Nav() {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <div className={style.nav}>
            <div className={style.contact}>
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
            </div>
            <div className={style.navbar}>
                <div>
                    <div className={style.burger}>
                        <div>
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
                        <div>
                            <img src="/auto_services/logo.png" alt="logo" />
                        </div>
                    </div>
                    <div
                        className={`${style.list} ${navOpen ? style.open : ""}`}
                    >
                        <ul>
                            <li>
                                <Link href="/auto-services">Home</Link>
                            </li>
                            <li>
                                <Link href="/auto-services/about-us">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/auto-services/services">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/auto-services/contact-us">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={style.button}>
                        <button>Call Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
