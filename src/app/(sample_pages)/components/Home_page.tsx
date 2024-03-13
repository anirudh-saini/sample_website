import React from "react";
import style from "./home_page.module.scss";
// import { data, review } from "../../(sample_pages)/data/personal";
import Link from "next/link";
interface HomeData {
    data: {
        img: string[];
        link: string[];
        text: string[];
        img_heading: string[];
        head: string;
    };
}
interface Homereview {
    review: [name: string, remark: string, para: string];
}
export default function Home_page({ data }: HomeData, { review }: Homereview) {
    const imgs = data.img.map((img, index) => {
        return (
            <div key={index} className={style.sample_page}>
                <div className={style.sample_page_img}>
                    <img src={img} />
                    <Link href={data.link[index]}>
                        <div className={style.view}>
                            <p>{data.text[index]}</p>
                        </div>
                    </Link>
                </div>
                <div className={style.sample_page_head}>
                    <h3>{data.img_heading[index]}</h3>
                </div>
            </div>
        );
    });
    const reviews = review.map((review) => {
        return (
            <div className={style.review_card}>
                <h4>{review.name}</h4>
                <h5>{review.remark}</h5>
                <p>{review.para}</p>
            </div>
        );
    });
    return (
        <div>
            <div className={style.personal_heading}>
                <h1>{data.head}</h1>
            </div>
            <div className={style.personal}>
                <div className={style.personal_img}>
                    <div className={style.img}>{imgs}</div>
                </div>
                <div className={style.personal_review}>
                    <h3>Client Reviews</h3>
                    <div className={style.review}>{reviews}</div>
                </div>
            </div>
        </div>
    );
}
