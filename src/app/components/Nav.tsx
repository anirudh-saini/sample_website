"use client";
import React, { useState } from "react";
import style from "./nav.module.scss";
import Link from "next/link";

interface NavProps {
    type: "normal" | "white";
}

export default function Nav({ type }: NavProps) {
    const [navOpen, setNavOpen] = useState(false);
    const logoSrc = type === "white" ? "/home_logo2.svg" : "/home_logo.svg";
    return (
        <nav className={`${style.nav} ${type === "white" ? style.white : ""}`}>
            <div className={style.name}>
                <img src={logoSrc} alt="icon" />
            </div>
            <div className={`${style.list} ${navOpen ? style.open : ""}`}>
                <ul>
                    <li>
                        <Link href="/automobile">Automobile </Link>
                    </li>
                    <li>
                        <Link href="/skill-traded-business">
                            Skill Traded Business
                        </Link>
                    </li>
                    <li>
                        <Link href="/real-estate">Real Estate</Link>
                    </li>
                    <li>
                        <Link href="/personal-care-business">
                            Personal Care Business
                        </Link>
                    </li>
                    <li>
                        <Link href="/landscaping-business">
                            Landscaping Business
                        </Link>
                    </li>
                    <li>
                        <Link href="/other-small-businesses">
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
                            id="toggle"
                            className={style.input}
                            // onClick={handleCheckboxClick}
                            checked={navOpen}
                            onChange={() => setNavOpen((prev) => !prev)}
                        />
                        <label
                            htmlFor="toggle"
                            className={`${navOpen ? style.open : ""}`}
                        >
                            {/* <div className={style.Menu_container}>
                                <div
                                    className={style.line}
                                    id={style.active}
                                ></div>
                            </div> */}
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
}
