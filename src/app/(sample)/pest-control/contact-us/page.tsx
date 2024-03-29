import React from "react";
import style from "./page.module.scss";
import Hero from "../components/Hero";
import { contact } from "../../data/hero_pest";
import Link from "next/link";
export default function page() {
    return (
        <div className={style.contact}>
            <Hero data={contact} />
            <div className={style.form}>
                <div>
                    <img src="/pest/map.png" alt="map" />
                </div>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Phone" />
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <Link href="/pest-control/contact-us">Submit</Link>
                </form>
            </div>
            <div className={style.contact_detail}>
                <div>
                    <h6>Email Us</h6>
                    <p>contactus@bugcatchers.com</p>
                </div>
                <div>
                    <h6>Call Us</h6>
                    <p>876.392.5729</p>
                </div>
                <div>
                    <h6>Visit Us</h6>
                    <p>123 Main Street</p>
                    <p>New Haven, CT 06510</p>
                </div>
                <div>
                    <h6>Follow Us</h6>
                    <div>
                        <img src="/facebook.png" alt="" />
                        <img src="/linkedin.png" alt="" />
                        <img src="/instagram.png" alt="" />
                        <img src="/x.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
