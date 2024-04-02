import React from "react";
import style from "./footer.module.scss";
import Link from "next/link";
export default function Footer() {
    return (
        <div className={style.bg}>
            <div>
                <div className={style.logo}>
                    <img src="/real-estate/logo2.png" alt="" />
                </div>
                <div className={style.content}>
                    <div className={style.get}>
                        <div>
                            <h5>Get in Touch</h5>
                        </div>
                        <div>
                            <p>Mobile: 876.392.5729</p>
                            <p>Phone: 384.674.1028</p>
                        </div>
                        <div>
                            <p>456 Oak Avenue San Francisco, CA 94102</p>
                        </div>
                        <div>
                            <img src="/pest/facebook.png" alt="" />
                            <img src="/pest/linked.png" alt="" />
                            <img src="/pest/whatsapp.png" alt="" />
                            <img src="/pest/x.png" alt="" />
                        </div>
                    </div>
                    <div className={style.links}>
                        <div>
                            <h5>Useful Links</h5>
                        </div>
                        <div>
                            <Link href="">Home</Link>
                            <Link href="">Properties</Link>
                            <Link href=""> Events</Link>
                            <Link href="">Testimonies</Link>
                        </div>
                    </div>
                    <div className={style.buy}>
                        <div>
                            <h5>Buy & Sell</h5>
                        </div>
                        <div>
                            <Link href="">Find a home</Link>
                            <Link href="">Sell a home</Link>
                        </div>
                    </div>
                    <div className={style.careers}>
                        <div>
                            <h5>Careers</h5>
                        </div>
                        <div>
                            <Link href="">Join Now</Link>
                        </div>
                    </div>
                    <div className={style.img}>
                        <img src="/real-estate/crs.png" alt="" />
                        <img src="/real-estate/abr.png" alt="" />
                        <img src="/real-estate/cpm.png" alt="" />
                    </div>
                </div>
                <div className={style.copy}>
                    <p>Copyright © 2023 , UrbanNest All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}
