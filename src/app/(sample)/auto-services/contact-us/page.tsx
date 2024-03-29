import React from "react";
import style from "./page.module.scss";
import { contact } from "../../data/hero";
import Hero1 from "../components/Hero1";
import Link from "next/link";
export default function page() {
    return (
        <div>
            <Hero1 data={contact} />
            <div className={style.contact}>
                <div>
                    <img src="/auto_services/map.png" alt="" />
                </div>
                <div className={style.content}>
                    <h1>Contact Us </h1>
                    <p>A-98, Amazon World Noida Spectrum New Earth- 9811666</p>
                    <Link href="">Get Directions &#8594; </Link>
                    <p>(0123) 456 789</p>
                </div>
            </div>
        </div>
    );
}
