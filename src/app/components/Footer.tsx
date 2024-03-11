import React from "react";
import style from "./footer.module.scss";
export default function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.footer_cont}>
                <img src="/home_logo2" />
                <p>
                    ©2024 Mennr Inc. All rights reserved. Mennr and the Mennr
                    logo are trademarks of Mennr Inc.
                </p>
            </div>
            <div className={style.img}>
                <img src="/facebook.png" />
                <img src="/instagram.png" />
                <img src="/linkedin.png" />
                <img src="/x.png" />
            </div>
        </div>
    );
}
