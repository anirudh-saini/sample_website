import React from "react";
import Link from "next/link";
import style from "./call.module.scss";
interface callprompt {
    data: {
        para: string;
    };
}
export default function Call({ data }: callprompt) {
    return (
        <div className={style.call}>
            <div className={style.call_para}>
                <p>{data.para}</p>
            </div>
            <div className={style.call_link}>
                <Link href="/pest-control">Book a Service</Link>
                <Link href="/pest-control">Call Us</Link>
            </div>
        </div>
    );
}
