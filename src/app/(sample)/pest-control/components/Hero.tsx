import React from "react";
import style from "./hero.module.scss";
interface heroprompt {
    data: {
        head: string;
        para: string;
    };
}
export default function Hero({ data }: heroprompt) {
    return (
        <div className={style.hero}>
            <div className={style.heading}>
                <div>
                    <h1>Bug Catchers</h1>
                    <h2>{data.head}</h2>
                    <p>{data.para}</p>
                </div>
            </div>
            <div className={style.para}>
                <div>
                    <p>{data.para}</p>
                </div>
            </div>
        </div>
    );
}
