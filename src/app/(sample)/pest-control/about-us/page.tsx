import React from "react";
import Hero from "../components/Hero";
import { about } from "../../data/hero_pest";
import Carousel1 from "../components/Carousel1";
import { choose_us } from "../../data/carousel";
import style from "./page.module.scss";
export default function page() {
    return (
        <div className={style.about}>
            <Hero data={about} />
            <div className={style.carousel1}>
                <div>
                    <h3>Our Mission</h3>
                    <p>
                        At Bug Catchers, our mission is simple: to provide
                        effective and sustainable pest control solutions
                        tailored to meet the unique needs of each client. We aim
                        to exceed expectations by delivering exceptional
                        service, utilizing advanced technology, and prioritizing
                        environmental responsibility in all our practices.
                    </p>
                </div>
                <div>
                    <h3>Our Team</h3>
                    <p>
                        Behind every successful pest control solution is a team
                        of dedicated professionals. At Bug Catchers, our team
                        consists of highly trained technicians and experts who
                        are passionate about what they do. With years of
                        experience and a commitment to ongoing training, our
                        team is equipped to handle any pest control challenge
                        with efficiency and expertise.
                    </p>
                </div>
                <div>
                    <h3>Our Commitment</h3>
                    <p>
                        At Bug Catchers, we are committed to delivering
                        unparalleled service and exceptional results to every
                        client we serve. Whether you're dealing with a minor
                        pest problem or a full-blown infestation, you can trust
                        us to provide prompt, professional, and effective
                        solutions that you can rely on.
                    </p>
                </div>
                <div>
                    <h3>Why Choose Us?</h3>
                    <p>
                        Choose BugCatchers for Unparalleled Pest Control
                        Excellence
                    </p>
                </div>
            </div>
            <Carousel1 data={choose_us} />
        </div>
    );
}
