import React from "react";
import style from "./review.module.scss";
import Review from "../components/Review";
export default function page() {
    return (
        <div>
            <div className={style.review_head}>
                <h1>Reviews</h1>
            </div>
            <Review />
            <div className={style.google}>
                <img src="/law_firm/review_google.png" alt="google" />
            </div>
        </div>
    );
}
