import React from "react";
import Carousel1 from "../components/Carousel1";
import { testimonial } from "../../data/carousel";
import Hero from "../components/Hero";
import { testimonial_hero } from "../../data/hero_pest";
import { test } from "../../data/call_pest";
import Call from "../components/Call";
import Link from "next/link";
import style from "./page.module.scss";
export default function page() {
    return (
        <div className={style.test}>
            <Hero data={testimonial_hero} />
            <Carousel1 data={testimonial} />
            <div className={style.submit}>
                <p>
                    Want to be the face of Bug Catchers? Submit a testimonial
                    here!
                </p>
                <Link href="">Submit a Testimonial</Link>
            </div>
            <Call data={test} />
        </div>
    );
}
