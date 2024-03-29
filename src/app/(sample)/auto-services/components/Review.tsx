import React from "react";
import style from "./review.module.scss";
export default function Review() {
    return (
        <div>
            <div className={style.review}>
                <div>
                    <div>
                        <h3>CUSTOMER REVIEWS</h3>
                    </div>
                    <div>
                        <div className={style.item}>
                            <p>2K+</p>
                            <p>happy customers</p>
                        </div>
                        <div className={style.item}>
                            <p>4+</p>
                            <p>years of experience</p>
                        </div>
                        <div className={style.item}>
                            <p>99%</p>
                            <p>post-repair satisfaction</p>
                        </div>
                        <div className={style.item}>
                            <p>95%</p>
                            <p>communication satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.review2}>
                <div>
                    <div className={style.card}>
                        <div>
                            <img src="/auto_services/review1.png" alt="" />
                            <h4>Comprehensive Maintenance</h4>
                        </div>
                        <div>
                            <p>
                                - General auto repair and routine services for
                                overall vehicle well-being.
                            </p>
                            <p>
                                - Brake and transmission expertise for reliable
                                performance.
                            </p>
                            <p>
                                - Oil change, maintenance, and diagnostic
                                services to keep your engine in top condition.
                            </p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div>
                            <img src="/auto_services/review2.png" alt="" />
                            <h4>System-Specific Expertise</h4>
                        </div>
                        <div>
                            <p>
                                - Electrical system repairs and diagnostics for
                                a reliable drive.
                            </p>
                            <p>
                                - Tire services, exhaust system maintenance, and
                                climate control solutions.
                            </p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div>
                            <img src="/auto_services/review3.png" alt="" />
                            <h4>Customer-Centric Solutions</h4>
                        </div>
                        <div>
                            <p>
                                - Efficient timelines without compromising
                                quality.
                            </p>
                            <p>
                                - Transparent communication, accurate estimates,
                                and ongoing post-repair support.
                            </p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div>
                            <img src="/auto_services/review4.png" alt="" />
                            <h4>Collision and Restoration Services</h4>
                        </div>
                        <div>
                            <p>
                                - Specialized care for collision repairs, from
                                minor dents to major incidents.
                            </p>
                            <p>
                                - Precision in paint matching and finishing
                                touches for a polished look.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
