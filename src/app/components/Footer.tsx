import React from "react";
import style from "./footer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faXTwitter,
    faLinkedinIn,
    faInstagram,
    faThreads,
} from "@fortawesome/free-brands-svg-icons";
interface FooterProps {
    type: "normal" | "blue";
}
export default function Footer({ type }: FooterProps) {
    return (
        <div className={`${style.footer} ${type === "blue" ? style.blue : ""}`}>
            <div className={style.footer_cont}>
                <div className={style.footer1}>
                    <img src="/home_logo2.svg" />
                    <p className={style.footerpara}>
                        ©2024 Mennr Inc. All rights reserved. Mennr and the
                        Mennr logo are trademarks of Mennr Inc.
                    </p>
                    <div className={style.img2}>
                        <div>
                            <Link
                                href="https://www.facebook.com/mennr.tech/"
                                className={style.face}
                            >
                                <FontAwesomeIcon icon={faFacebookF} />
                            </Link>
                        </div>
                        <div>
                            <Link
                                href="https://www.instagram.com/mennr.tech/"
                                className={style.insta}
                            >
                                {" "}
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                        </div>
                        <div>
                            <Link
                                href="https://www.linkedin.com/company/mennr/"
                                className={style.link}
                            >
                                {" "}
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </Link>
                        </div>
                        <div>
                            <Link
                                href="https://www.threads.net/@mennr.tech"
                                className={style.thread}
                            >
                                {" "}
                                <FontAwesomeIcon icon={faThreads} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={style.footer2}>
                    <p>
                        ©2024 Mennr Inc. All rights reserved. Mennr and the
                        Mennr logo are trademarks of Mennr Inc.
                    </p>
                </div>
            </div>
            <div className={style.img1}>
                <div>
                    <Link
                        href="https://www.facebook.com/mennr.tech/"
                        className={style.face}
                    >
                        <FontAwesomeIcon icon={faFacebookF} />
                    </Link>
                </div>
                <div>
                    <Link
                        href="https://www.instagram.com/mennr.tech/"
                        className={style.insta}
                    >
                        {" "}
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </div>
                <div>
                    <Link
                        href="https://www.linkedin.com/company/mennr/"
                        className={style.link}
                    >
                        {" "}
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                </div>
                <div>
                    <Link
                        href="https://www.threads.net/@mennr.tech"
                        className={style.thread}
                    >
                        {" "}
                        <FontAwesomeIcon icon={faThreads} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
