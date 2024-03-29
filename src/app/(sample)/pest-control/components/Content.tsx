import React from "react";
import style from "./content.module.scss";
import Link from "next/link";
interface contentprompt {
    data: {
        head: string;
        sub_head?: string;
        para: string;
    }[];
}
export default function Content({ data }: contentprompt) {
    const cards = data.map((card) => {
        return (
            <div className={style.card}>
                <div>
                    <h4>{card.head}</h4>
                    {card.sub_head && <p>{card.sub_head}</p>}
                </div>
                <div>
                    <p>{card.para}</p>
                    {card.sub_head && (
                        <Link href="/pest-control/our-services">Book Now</Link>
                    )}
                </div>
            </div>
        );
    });
    return <div className={style.content}>{cards}</div>;
}
