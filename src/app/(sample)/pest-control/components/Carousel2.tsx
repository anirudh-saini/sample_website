"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import style from "./carousel2.module.scss";
interface servicepropt {
    data: {
        button?: string;
        link?: string;
        img: string[];
        head: string[];
        para: string[];
        name?: string[];
        title?: string[];
    };
}
export default function Carousel2({ data }: servicepropt) {
    const parentRef = useRef<HTMLDivElement | null>(null);
    const [selectedRadio, setSelectedRadio] = useState<number>(0);
    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: "0px",
            threshold: 0.5, // Adjust threshold as needed
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const targetElement = entry.target as HTMLElement;
                    const index = parseInt(
                        targetElement.getAttribute("data-index") || "0",
                        10
                    );

                    setSelectedRadio(index);
                    console.log(index); // Check if index is logged
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        const innerContentElements = document.querySelectorAll(
            `.${style.carousel}`
        );
        console.log(innerContentElements); // Check if elements are selected

        innerContentElements.forEach((element, index) => {
            observer.observe(element);
            element.setAttribute("data-index", index.toString());
        });

        return () => {
            observer.disconnect();
        };
    }, [parentRef.current]);
    const lastIndex = data.img.length - 1;
    const radio = data.img.map((img, index) => {
        return (
            <div key={index}>
                <input
                    key={index}
                    type="radio"
                    checked={selectedRadio === index}
                />
            </div>
        );
    });
    const carousels = data.img.map((carousel, index) => {
        return (
            <div className={style.carousel}>
                <div className={style.img}>
                    <img src={carousel} />
                    {index === lastIndex && data.link && (
                        <div className={style.button}>
                            <Link href={data.link}>{data.button}</Link>
                        </div>
                    )}
                </div>

                <h5>{data.head[index]}</h5>
                <p>{data.para[index]}</p>
                {data.name !== undefined && <p>{data.name[index]}</p>}
                {data.title !== undefined && <p>{data.title[index]}</p>}
            </div>
        );
    });
    return (
        <div className={style.main_container}>
            <div className={style.container} ref={parentRef}>
                {carousels}
            </div>
            <div className={style.radio}>{radio}</div>
        </div>
    );
}
