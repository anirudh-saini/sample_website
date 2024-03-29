import React from "react";
import style from "./page.module.scss";
import Hero1 from "./components/Hero1";
import Review from "./components/Review";
import { home } from "../data/hero";
import Link from "next/link";
import Carousel from "./components/Carousel";
export default function page() {
    return (
        <div>
            <Hero1 data={home} />
            <Carousel />
            <div className={style.team}>
                <div>
                    <h5>
                        YOUR TRUSTED PARTNER IN RESTORING VEHICLE EXCELLENCE{" "}
                    </h5>
                    <p>
                        At GearGurus, our skilled team is committed to top-notch
                        service, providing careful care for your vehicle, from
                        minor dents to full collision repairs. We take pride in
                        restoring your car to its former glory, using modern
                        facilities and a passion for precision. GearGurus: Your
                        trusted partner in automotive excellence
                    </p>
                    <div>
                        <Link href="">Read more</Link>
                        <Link href="">Meet our technicians</Link>
                    </div>
                </div>
                <div>
                    <img src="/auto_services/trust.png" alt="trust" />
                </div>
            </div>
            <div>
                <Review />
            </div>
        </div>
    );
}
