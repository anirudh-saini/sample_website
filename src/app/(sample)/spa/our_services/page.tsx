import React from "react";
import style from "./service.module.scss";
import Nav from "../components/Nav";
import { snav } from "../data/nav";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Service_with_price from "../components/Service_with_price";
export default function page() {
    return (
        <div>
            <div className={style.nav}>
                <Nav data={snav} />
            </div>
            <div className={style.sub_heading}>
                <p>
                    At Haven of Harmony, we believe in providing a sanctuary for
                    your mind, body, and soul. Our comprehensive range of
                    services is meticulously curated to promote relaxation,
                    rejuvenation, and inner harmony. Step into our tranquil
                    haven and discover the perfect treatment to suit your needs.
                </p>
            </div>
            <div className={style.bg}>
                {/* <div className={style.bg1}>
                    <picture>
                        <source
                            media="(min-width: 2000px)"
                            srcSet="/spa/bg1536.png"
                        />
                        <source
                            media="(min-width: 48em)"
                            srcSet="/spa/bg1440.png"
                        />
                        <source
                        media="(min-width: 1440px)"
                        srcSet="/spa/form_1024.png"
                    />
                        <source
                        media="(min-width: 1024px)"
                        srcSet="/spa/form_768.png"
                    />
                        <source
                        media="(min-width: 768px)"
                        srcSet="/spa/form_640.png"
                    />
                        <source
                            media="(min-width: 641px)"
                            srcSet="/spa/bg640.png"
                        />
                        <img src="/spa/bg375.png" />
                    </picture>
                </div> */}

                <Service_with_price />
                {/* <div className={style.bg2}>
                    <picture>
                        <source
                            media="(min-width: 2000px)"
                            srcSet="/spa/bg1536.png"
                        />
                        <source
                            media="(min-width: 1900px)"
                            srcSet="/spa/bg1440.png"
                        />
                        <source
                            media="(min-width: 1500px)"
                            srcSet="/spa/bg1024.png"
                        />
                        <source
                            media="(min-width: 1024px)"
                            srcSet="/spa/bg768.png"
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet="/spa/bg640.png"
                        />
                        <source
                            media="(min-width: 641px)"
                            srcSet="/spa/bg640.png"
                        />
                        <img src="/spa/bg375.png" />
                    </picture>
                </div> */}
            </div>
            <div className={style.service_content}>
                <p>
                    Ready to experience the serenity for yourself? Book your
                    appointment today and discover the Haven of Harmony
                    difference.
                </p>
            </div>
            <Form />
            <Footer />
        </div>
    );
}
