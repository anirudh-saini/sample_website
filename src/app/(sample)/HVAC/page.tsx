"use client";
import React, { useRef } from "react";
import Link from "next/link";
import style from "./page.module.scss";
import Book from "./components/Book";
export default function page() {
    const parentRef = useRef<HTMLDivElement | null>(null);
    const handlePrevClick = () => {
        if (!parentRef.current) return;
        parentRef.current.scrollLeft -= 285;
    };

    const handleNextClick = () => {
        if (!parentRef.current) return;
        parentRef.current.scrollLeft += 285;
    };
    return (
        <div>
            <div className={style.hero}>
                <h1>We Make Your Space Just Right!</h1>
                <Link href="">Book Today</Link>
            </div>
            <div className={style.logo}>
                <h4>Our Valued Customers</h4>
                <div className={style.logo_img}>
                    <img src="/hvac/logo1.png" alt="logo" />
                    <img src="/hvac/logo2.png" alt="logo" />
                    <img src="/hvac/logo3.png" alt="logo" />
                    <img src="/hvac/logo4.png" alt="logo" />
                    <img src="/hvac/logo5.png" alt="logo" />
                    <img src="/hvac/logo6.png" alt="logo" />
                    <img src="/hvac/logo1.png" alt="logo" />
                    <img src="/hvac/logo2.png" alt="logo" />
                    <img src="/hvac/logo3.png" alt="logo" />
                    <img src="/hvac/logo4.png" alt="logo" />
                    <img src="/hvac/logo5.png" alt="logo" />
                    <img src="/hvac/logo6.png" alt="logo" />
                </div>
            </div>
            <div className={style.services}>
                <div className={style.content}>
                    <h6>Our Services</h6>
                    <p>
                        Budget-Friendly Comfort: Affordable HVAC Solutions for
                        Your Space!
                    </p>
                    <Link href="">Learn More</Link>
                </div>

                <div className={style.services_img}>
                    <div>
                        <img src="/hvac/services1.png" />
                    </div>
                    <div>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div className={style.services_img}>
                    <div>
                        <img src="/hvac/services2.png" />
                    </div>
                    <div>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>

                <div className={style.services_img}>
                    <div>
                        <img src="/hvac/services3.png" />
                    </div>
                    <div>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div className={style.services_img}>
                    <div>
                        <img src="/hvac/services4.png" />
                    </div>
                    <div>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <div>
                <Book />
            </div>
            <div className={style.review}>
                <h4>Customer Cheers: What Our Happy Clients Have to Say</h4>
                <div className={style.carousel}>
                    <button onClick={handlePrevClick}>
                        {" "}
                        <img src="/law_firm/arrow_pre.png" />
                    </button>
                    <div className={style.container} ref={parentRef}>
                        <div className={style.content}>
                            <p>
                                Needed a quick fix for my heating system, and
                                they delivered. The repair cost was reasonable,
                                and the service was prompt. Happy to have found
                                such a reliable HVAC partner
                            </p>
                            <h6>John</h6>
                            <div>
                                <img src="/law_firm/review1.png" />
                            </div>
                        </div>
                        <div className={style.content}>
                            <p>
                                Choosing them was the best decision. Our indoor
                                air quality improved significantly. The
                                technicians were knowledgeable, and the service
                                was prompt. Truly satisfied!
                            </p>
                            <h6>Rachel</h6>
                            <div>
                                <img src="/law_firm/review2.png" />
                            </div>
                        </div>
                        <div className={style.content}>
                            <p>
                                "From start to finish, they exceeded
                                expectations. Quick response, fair pricing, and
                                quality work. Our AC is working flawlessly.
                                Grateful for their expertise!"
                            </p>
                            <h6>Sita</h6>
                            <div>
                                <img src="/law_firm/review3.png" />
                            </div>
                        </div>
                        <div className={style.content}>
                            <p>
                                "I can't thank them enough! The HVAC upgrade
                                transformed my home. The team was fantastic –
                                professional, friendly, and efficient. Highly
                                recommended!"
                            </p>
                            <h6>John</h6>
                            <div>
                                <img src="/law_firm/review4.png" />
                            </div>
                        </div>
                    </div>

                    <button onClick={handleNextClick}>
                        <img src="/law_firm/arrow_next.png" />
                    </button>
                </div>
            </div>
        </div>
    );
}
