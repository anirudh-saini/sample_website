"use client";
import React, { useState } from "react";
import style from "./nav.module.scss";
import Link from "next/link";

export default function Nav() {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <nav className={style.nav}>
            <div className={style.name}>
                <img src="/home_logo.png" alt="icon" />
            </div>
            <div className={`${style.list} ${navOpen ? style.open : ""}`}>
                <ul>
                    <li>
                        <Link href="/gym">Automobile </Link>
                    </li>
                    <li>
                        <Link href="/gym/about_us">Skill Traded Business</Link>
                    </li>
                    <li>
                        <Link href="/gym/careers">Real Estate</Link>
                    </li>
                    <li>
                        <Link href="/gym/contact_us">
                            Personal Care Business
                        </Link>
                    </li>
                    <li>
                        <Link href="/gym/contact_us">Landscaping Business</Link>
                    </li>
                    <li>
                        <Link href="/gym/contact_us">
                            Other Small Businesses
                        </Link>
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
                            {/* <div className={style.Menu_container}>
                                <div
                                    className={style.line}
                                    id={style.active}
                                ></div>
                            </div> */}
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
}
