import React from "react";
import styles from "./about.module.scss";
interface About {
    heading: string;
    heading1: string;
    heading2: string;
    sub_heading: string;
    data: {
        img: string;
        heading: string;
        para: string;
        name?: string;
    }[];
}

interface AboutProps {
    about: About;
}

export default function About({ about }: AboutProps) {
    const cards = about.data.map((items) => {
        return (
            <div>
                <div className={styles.heading}>
                    <h3>{items.heading}</h3>
                    <p>{items.para}</p>
                    {items.name && <p>{items.name}</p>}
                </div>
                <div className={styles.img}>
                    <img src={items.img} alt="card_img" />
                </div>
            </div>
        );
    });
    return (
        <div className="container">
            <div className={styles.heading}>
                <p className={styles.heading_1}>{about.heading1}</p>
                <p className={styles.heading_2}>{about.heading2}</p>
                <p className={styles.heading_3}>{about.sub_heading}</p>
            </div>
            <div className={styles.card}>{cards}</div>
        </div>
    );
}
