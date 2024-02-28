import React from "react";
import style from "./menu.module.scss";

interface menu {
    heading: string;
    data: {
        heading: string;
        menu: {
            heading: string;
            price: string;
            content: string;
        }[];
    }[];
}

interface itemProps {
    item: menu;
}

export default function Menu({ item }: itemProps) {
    const card = item.data.map((items) => {
        return (
            <div key={items.heading} className={` ${style.menu}`}>
                <div className={style.heading}>
                    <p>{items.heading}</p>
                </div>
                {items.menu.map((menuItem) => (
                    <div key={menuItem.heading} className={style.card}>
                        <div className={style.card_heading}>
                            <p>{menuItem.heading}</p>
                            <p>{menuItem.price}</p>
                        </div>
                        <p>{menuItem.content}</p>
                    </div>
                ))}
            </div>
        );
    });
    return <div className={`container ${style.select}`}>{card}</div>;
}
