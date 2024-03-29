import React from "react";
import style from "./hero2.module.scss";
interface heropropt {
    data: {
        para: string;
        img: string;
    };
}
export default function Hero2({ data }: heropropt) {
    return (
        <div
            className={style.hero2}
            style={{ backgroundImage: `url(${data.img})` }}
        >
            <h1>{data.para}</h1>
        </div>
    );
}
