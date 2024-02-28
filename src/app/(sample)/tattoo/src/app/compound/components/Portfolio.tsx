import React from "react";
import style from "./portfolio.module.scss";
import Link from "next/link";
export default function Portfolio() {
    return (
        <div className={style.container}>
            <div className={style.heading}>
                <h3>Portfolio</h3>
            </div>
            <div className={style.portfolio}>
                <div className={style.item1}>
                    <h3>Portfolio</h3>
                </div>
                <div className={style.item2}>
                    <img src="/p1.png" alt="image" />
                </div>
                <div className={style.item3}>
                    <img src="/p2.png" alt="image" />
                </div>
                <div className={style.item4}>
                    <img src="/p3.png" alt="image" />
                </div>
                <div className={style.item5}>
                    <img src="/p4.png" alt="image" />
                </div>
                <div className={style.item6}>
                    <img src="/p5.png" alt="image" />
                </div>
                <div className={style.item7}>
                    <img src="/p6.png" alt="image" />
                </div>
                <div className={style.item8}>
                    <img src="/p7.png" alt="image" />
                </div>
                <div className={style.item9}>
                    <img src="/p8.png" alt="image" />
                </div>
                <div className={style.item10}>
                    <img src="/p9.png" alt="image" />
                </div>
                <div className={style.item11}>
                    <img src="/p10.png" alt="image" />
                </div>
                <div className={style.item12}>
                    <img src="/p11.png" alt="image" />
                </div>
                <div className={style.item13}>
                    <img src="/p12.png" alt="image" />
                </div>
            </div>
            <div className={style.link}>
                <Link href="/">View all</Link>
            </div>
        </div>
    );
}
