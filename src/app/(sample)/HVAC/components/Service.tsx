import React from "react";
import style from "./service.module.scss";
interface data {
    data: {
        heading: string;
        img: string[];
        img_head: string[];
    };
    type: "heat" | "area";
}
export default function Service({ data, type }: data) {
    const services = data.img.map((service, index) => {
        return (
            <div className={style.service_img}>
                <div className={style.img}>
                    <img src={service} alt="service" />
                </div>
                <div className={style.content}>
                    <div>
                        <p>{data.img_head[index]}</p>
                    </div>
                    <div>
                        <p>Learn More</p>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div className={style.service}>
            <div>
                <h1>{data.heading}</h1>
            </div>
            <div className={` ${type === "heat" ? style.heat : ""}`}>
                {services}
            </div>
        </div>
    );
}
