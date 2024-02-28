"use client";
import React, { useState } from "react";
import style from "./nav.module.scss";
import Link from "next/link";

export default function Nav() {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <nav className={style.nav}>
            <div className={style.name}>
                <img src="/icon.png" alt="icon" />
            </div>
            <div className={`${style.list} ${navOpen ? style.open : ""}`}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about_us">About Us</Link>
                    </li>
                    <li>
                        <Link href="/careers">Careers</Link>
                    </li>
                    <li>
                        <Link href="/contact_us">Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div>
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
            </div>
        </nav>
    );
}
