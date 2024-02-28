"use client";
import React, { useState } from "react";
import Link from "next/link";
import style from "./nav.module.scss";
interface nav {
    subheading?: string;
    button?: string;
    scroll?: {
        head: string;
        icon: string;
    };
    subtitle?: string;
}
interface navProps {
    data: nav;
}
export default function Nav({ data }: navProps) {
    const [navOpen, setNavOpen] = useState(false);
    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        const targetElement = document.getElementById("scroll");
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };
    return (
        <div className={style.nav}>
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
                            <div className={style.line} id={style.active}></div>
                        </div>
                    </label>
                </div>
            </div>
            <div className={`${style.nav_menu} ${navOpen ? style.open : ""}`}>
                <ul>
                    <li>
                        <Link href="/our_services">Our Services</Link>
                    </li>
                    <li>
                        <Link href="/gallery">Gallery</Link>
                    </li>
                    <li className={style.icon}>
                        <img src="./home_icon.svg" />
                    </li>
                    <li>
                        <Link href="/testimonial">Testimonials</Link>
                    </li>
                    <li>
                        <Link href="/">Book a session</Link>
                    </li>
                </ul>
            </div>
            <div className={style.nav_img}>
                <div className={style.content}>
                    <p>{data.subheading}</p>
                    <h1>Haven of Harmony</h1>
                    <h3>{data.subtitle}</h3>
                    <div>
                        {data.subheading && (
                            <Link className={style.button} href="/">
                                {data.button}
                            </Link>
                        )}
                    </div>
                </div>
                {data.subheading && (
                    <Link href="/#scroll" onClick={handleScroll}>
                        <p>{data.scroll?.head}</p>
                        <p>{data.scroll?.icon}</p>
                    </Link>
                )}
            </div>
        </div>
    );
}
