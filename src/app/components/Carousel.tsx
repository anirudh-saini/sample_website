import React from "react";
import style from "./carousel.module.scss";
import Link from "next/link";
export default function Carousel() {
    return (
        <div style={{ backgroundColor: "#1c3752", overflow: "hidden" }}>
            <div className={style.carouselparent}>
                <div className={style.carousel}>
                    <Link href="">
                        <img src="/c1.png" />
                    </Link>
                    <Link href="">
                        <img src="/c2.png" />
                    </Link>
                    <Link href="/restaurant">
                        <img src="/c3.png" />
                    </Link>
                    <Link href="">
                        <img src="/c4.png" />
                    </Link>
                    <Link href="">
                        <img src="/c5.png" />
                    </Link>
                    <Link href="">
                        <img src="/c6.png" />
                    </Link>
                    <Link href="/law_firm">
                        <img src="/c7.png" />
                    </Link>
                    <Link href="">
                        <img src="/c8.png" />
                    </Link>
                    <Link href="">
                        <img src="/c9.png" />
                    </Link>
                    <Link href="/spa">
                        <img src="/c10.png" />
                    </Link>
                    <Link href="/gym">
                        <img src="/c11.png" />
                    </Link>
                    <Link href="/tattoo">
                        <img src="/c12.png" />
                    </Link>
                    <Link href="">
                        <img src="/c1.png" />
                    </Link>
                    <Link href="">
                        <img src="/c2.png" />
                    </Link>
                    <Link href="/restaurant">
                        <img src="/c3.png" />
                    </Link>
                    <Link href="">
                        <img src="/c4.png" />
                    </Link>
                    <Link href="">
                        <img src="/c5.png" />
                    </Link>
                    <Link href="">
                        <img src="/c6.png" />
                    </Link>
                    <Link href="/law_firm">
                        <img src="/c7.png" />
                    </Link>
                    <Link href="">
                        <img src="/c8.png" />
                    </Link>
                    <Link href="">
                        <img src="/c9.png" />
                    </Link>
                    <Link href="/spa">
                        <img src="/c10.png" />
                    </Link>

                    <Link href="/gym">
                        <img src="/c11.png" />
                    </Link>
                    <Link href="/tattoo">
                        <img src="/c12.png" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
