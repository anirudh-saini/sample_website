import React from "react";
import Link from "next/link";
import style from "./page.module.scss";
export default function page() {
    return (
        <div>
            <div className={style.hero}>
                <div className={style.content}>
                    <h1>Discover Your Dream Home</h1>
                    <h2>Your journey starts here at UrbanNest</h2>
                    <Link href="/real-estate-broker">Get a Consult</Link>
                </div>
            </div>
            <div className={style.upcoming}>
                <div>
                    <h3>Upcoming</h3>
                    <p>Allow us to turn your dreams into reality.</p>
                </div>
                <div>
                    <div></div>
                    <div>
                        <p>Open-House</p>
                        <div>
                            <p>20 January 2024</p>
                            <div>
                                <p>123 Main Street</p>
                                <p>Beverly Hills, CA 90210</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
