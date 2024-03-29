import React from "react";
import style from "./footer.module.scss";
import Link from "next/link";
export default function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.footer_bg}>
                <div className={style.container}>
                    <div className={style.item1}>
                        <div className={style.heading}>
                            <img src="/auto_services/logo2.png" alt="logo" />
                        </div>
                        <div>
                            <p>
                                GearGurus is your friendly crew dedicated to
                                keeping your ride in top shape. From everyday
                                auto care to expert collision fixes, we've got
                                you covered. With clear communication and a
                                passion for making your car shine, join us at
                                GearGurus for the care your vehicle deserves!
                            </p>
                        </div>
                    </div>
                    <div className={style.item2}>
                        <div className={style.heading}>
                            <h5>Navigation</h5>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <Link href="/auto-services/about-us">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/auto-services/services">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/auto-services/">
                                        Our technicians
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/auto-services/contact-us">
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.item3}>
                        <div className={style.heading}>
                            <h5>Contact Us</h5>
                        </div>
                        <div>
                            <p>
                                A-98, Amazon World Noida Spectrum New Earth-
                                9811666
                            </p>
                        </div>
                        <div>
                            <p>(0123) 456 789</p>
                            <p>info@geargurus.com</p>
                        </div>
                    </div>
                    <div className={style.item4}>
                        <div className={style.heading}>
                            <h5>Newsletter</h5>
                        </div>
                        <div>
                            <p>
                                Sign up for marketing newsletter for tips on how
                                you can better utilize and care for your
                                vehicles
                            </p>
                        </div>
                        <div>
                            <input type="email" placeholder="Email" />
                            <button>Join</button>
                        </div>
                        <div>
                            <img src="/tattoo/face.png" alt="" />
                            <img src="/tattoo/Insta.png" alt="" />
                            <img src="/tattoo/twitter.png" alt="" />
                            <img src="/tattoo/linked.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.copyright}>
                <p>Copyright 2024, All Rights Reserved to ChillMasters Co</p>
            </div>
        </div>
    );
}
