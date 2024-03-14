import React from "react";
import style from "./page.module.scss";
import Home_page from "../components/Home_page";
import { data, review } from "../../(sample_pages)/data/other";

export default function page() {
    return (
        <div>
            <Home_page data={data} review={review} />
        </div>
    );
}
