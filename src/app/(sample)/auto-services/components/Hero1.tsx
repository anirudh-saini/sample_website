import React from "react";
import style from "./hero1.module.scss";
interface heropropt {
    data: {
        para?: string;
        button?: string;
    };
}
export default function Hero1({ data }: heropropt) {
    return (
        <div className={style.hero}>
            {data.para && (
                <div className={style.para}>
                    <p>{data.para}</p>
                </div>
            )}
            {data.button && (
                <div className={style.button}>
                    <button>{data.button}</button>
                </div>
            )}
        </div>
    );
}
