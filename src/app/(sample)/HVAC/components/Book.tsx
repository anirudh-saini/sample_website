import React from "react";
import Link from "next/link";
import style from "./book.module.scss";
export default function Book() {
    return (
        <div className={style.book}>
            <div>
                <h2>Need AC or heating help? We've got you covered! </h2>
            </div>
            <div>
                <Link href="">Book Today</Link>
            </div>
        </div>
    );
}
