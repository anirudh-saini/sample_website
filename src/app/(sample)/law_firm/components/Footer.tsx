import React from "react";
import Style from "./footer.module.scss";
import Link from "next/link";
export default function Footer() {
    return (
        <div className={Style.footer}>
            <div className={Style.container}>
                <div className={Style.footer_main}>
                    <div className={Style.item1}>
                        <div>
                            <img src="/law_firm/icon.png" alt="icon" />
                        </div>

                        <p>
                            JusticeLink Legal stands as your steadfast ally in
                            legal matters. Our dedicated team of experts ensures
                            fairness and integrity, providing tailored solutions
                            for a secure legal journey.
                        </p>
                    </div>
                    <div className={Style.item2}>
                        <h5>Navigation</h5>
                        <ul>
                            <li>
                                <Link href="">Home</Link>
                            </li>
                            <li>
                                <Link href="">Cases We Handle</Link>
                            </li>
                            <li>
                                <Link href="">Client Reviews</Link>
                            </li>
                            <li>
                                <Link href="">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={Style.item3}>
                        <h5>Contact Us</h5>
                        <ul>
                            <li>
                                A-98, Amazon World Noida Spectrum New Earth-
                                9811666
                            </li>
                            <li>(0123) 456 789</li>
                            <li>info@JusticeLinkLegal.com</li>
                        </ul>
                    </div>
                    <div className={Style.item4}>
                        <h5>Newsletter</h5>
                        <p>
                            Sign up for marketing newsletter for tips on how you
                            can better utilize the internet to drive more
                            buildings
                        </p>
                        <div>
                            <input type="text" placeholder="Email" />
                            <button>Join</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.copy}>
                <p>Copyright 2024, All Rights Reserved to JusticeLinkLegal</p>
            </div>
        </div>
    );
}
