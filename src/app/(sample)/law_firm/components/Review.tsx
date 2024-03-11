"use client";
import React, { useState, useRef, useEffect } from "react";
import style from "./review.module.scss";
const data = [
    {
        img: "/law_firm/review1.png",
        text: "Exceptional craftsmanship! The construction team delivered our project with precision and professionalism. From start to finish, they exceeded our expectations. Highly recommend for quality work and attention to detail.",
        name: "John",
    },
    {
        img: "/law_firm/review2.png",
        text: "Incredible experience working with this construction company! The team's expertise and dedication were evident in every phase of our project. Transparent communication, on-time delivery, and top-notch results. Our dream space has become a reality!",
        name: "Rachel",
    },
    {
        img: "/law_firm/review3.png",
        text: "Choosing this construction company was the best decision for our home renovation. Courteous and skilled professionals, they turned our vision into a stunning reality. The quality of work and commitment to customer satisfaction were outstanding.",
        name: "Sudhama",
    },
    {
        img: "/law_firm/review4.png",
        text: "Outstanding service from the initial consultation to project completion. The construction team demonstrated a high level of expertise and worked efficiently to bring our ideas to life. We are thrilled with the results and grateful for their exceptional work ethic.",
        name: "Rachel",
    },
    {
        img: "/law_firm/review1.png",
        text: "Exceptional craftsmanship! The construction team delivered our project with precision and professionalism. From start to finish, they exceeded our expectations. Highly recommend for quality work and attention to detail.",
        name: "John",
    },
];
export default function Review() {
    const parentRef = useRef<HTMLDivElement | null>(null);
    const handlePrevClick = () => {
        if (!parentRef.current) return;
        parentRef.current.scrollLeft -= 250;
    };

    const handleNextClick = () => {
        if (!parentRef.current) return;
        parentRef.current.scrollLeft += 250;
    };
    const items = data.map((item) => {
        return (
            <div className={style.item1}>
                <div>
                    <img src={item.img} alt="" />
                </div>
                <p>{item.text}</p>
                <h4>{item.name}</h4>
            </div>
        );
    });
    return (
        <div className={style.review}>
            <button onClick={handlePrevClick}>
                {" "}
                <img src="/law_firm/arrow_pre.png" />
            </button>
            <div className={style.item} ref={parentRef}>
                {items}
            </div>
            <button onClick={handleNextClick}>
                <img src="/law_firm/arrow_next.png" />
            </button>
        </div>
    );
}
