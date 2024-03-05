import React from "react";
import style from "./get_help.module.scss";
import Link from "next/link";
export default function Get_help() {
    return (
        <div className={style.help}>
            <div className={style.head}>
                <h2>Get Help Today!</h2>
                <p>
                    Empowering justice with a dynamic team of legal experts. Our
                    law firm combines passion and expertise to deliver
                    unparalleled legal solutions tailored to your needs.
                </p>
            </div>
            <div className={style.button}>
                <Link href="">Evaluate Case</Link>
                <Link href="">Call Now</Link>
                <Link href="">Chat Live</Link>
            </div>
        </div>
    );
}
