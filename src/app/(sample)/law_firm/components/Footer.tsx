import React from "react";
import Style from "./footer.module.scss";
import Link from "next/link";
export default function Footer() {
    return (
        <div>
            <div>
                <div>
                    <img src="" alt="" />
                    <p>
                        JusticeLink Legal stands as your steadfast ally in legal
                        matters. Our dedicated team of experts ensures fairness
                        and integrity, providing tailored solutions for a secure
                        legal journey.
                    </p>
                </div>
                <div>
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
                <div></div>
                <div></div>
            </div>
            <div>
                <p>Copyright 2024, All Rights Reserved to JusticeLinkLegal</p>
            </div>
        </div>
    );
}
