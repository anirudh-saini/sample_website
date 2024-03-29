import React from "react";
import Link from "next/link";
import style from "./footer.module.scss";
export default function Footer() {
    return (
        <div className={style.footer}>
            <div>
                <div>
                    <img src="/pest/logo.png" alt="logo" />
                </div>
                <div>
                    <div>
                        <h5>Get in Touch</h5>
                        <div>
                            <p>Mobile: 876.392.5729</p>
                            <p>Phone: 384.674.1028</p>
                        </div>
                        <div>
                            <p>123 Main Street</p>
                            <p>New Haven, CT 06510</p>
                        </div>
                        <div>
                            <img src="/pest/facebook.png" alt="" />
                            <img src="/pest/linked.png" alt="" />
                            <img src="/pest/whatsapp.png" alt="" />
                            <img src="/pest/x.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <h5>Useful Links</h5>
                        <div>
                            <p>
                                <Link href="/pest-control">Home</Link>
                            </p>
                            <p>
                                <Link href="/pest-control/our-services">
                                    Our Services
                                </Link>
                            </p>
                            <p>
                                <Link href="/pest-control/how-we-do-it">
                                    How We Do It
                                </Link>
                            </p>
                            <p>
                                <Link href="/pest-control/testimonial">
                                    Testimonials
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 , BugCatchers All Rights Reserved</p>
                </div>
            </div>
            <div>
                <img src="/pest/footer_bg.png" alt="" />
            </div>
        </div>
    );
}
