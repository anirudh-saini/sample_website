import React from "react";
import style from "./page.module.scss";
import Link from "next/link";
import Carousel1 from "./components/Carousel1";
import Carousel2 from "./components/Carousel2";
import { services, choose_us } from "../data/carousel";
export default function page() {
    return (
        <div className={style.container}>
            <div className={style.hero}>
                <div>
                    <h1>We catch your bugs for you</h1>
                    <Link href="">Book a Service</Link>
                </div>
            </div>
            <div className={style.book}>
                <Link href="">Book a Service</Link>
            </div>
            <div>
                <div className={style.carousel2}>
                    <div>
                        <h3>Our Services</h3>
                        <p>
                            Comprehensive Pest Control Solutions Tailored to
                            Your Needs
                        </p>
                    </div>
                </div>
                <Carousel2 data={services} />
                <div className={style.carousel1}>
                    <div>
                        <h3>Why Choose Us?</h3>
                        <p>
                            Choose BugCatchers for Unparalleled Pest Control
                            Excellence
                        </p>
                    </div>
                </div>
                <Carousel1 data={choose_us} />
                <div className={style.pest}>
                    <div>
                        <img src="/pest/pest.png" alt="" />
                    </div>
                    <div>
                        <p>
                            Prevent pests from invading your home or business.
                            Reach out to BugCatchers for a free consultation
                            today. Our dedicated team, serving California and
                            surrounding areas, is ready to respond promptly to
                            your pest control needs. Let us create a customized
                            plan tailored to your unique requirements, ensuring
                            your satisfaction and peace of mind with just one
                            call.
                        </p>
                        <p>
                            Explore our service areas and take the first step
                            towards a pest-free environment.
                        </p>
                        <div>
                            <Link href="/pest-control">Book a Service</Link>
                            <Link href="/pest-control">Call Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
