import React from "react";
import style from "./review.module.scss";
export default function Review() {
    return (
        <div className={style.review}>
            <div className={style.item}>
                <div className={style.item1}>
                    <div>
                        <img src="./law_firm/review1.png" alt="" />
                    </div>
                    <p>
                        Exceptional craftsmanship! The construction team
                        delivered our project with precision and
                        professionalism. From start to finish, they exceeded our
                        expectations. Highly recommend for quality work and
                        attention to detail.
                    </p>
                    <h4>John</h4>
                </div>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={style.background}>
                <div className={style.bg1}></div>
                <div className={style.bg2}></div>
            </div>
        </div>
    );
}
