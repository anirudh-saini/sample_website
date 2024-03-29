import React from "react";
import style from "./page.module.scss";
import Hero from "../components/Hero";
import Call from "../components/Call";
import { we_do_it } from "../../data/hero_pest";
import { test } from "../../data/call_pest";
import { how_we_do_it } from "../../data/pest_service";
import Content from "../components/Content";
export default function page() {
    return (
        <div className={style.we_do_it}>
            <Hero data={we_do_it} />
            <Content data={how_we_do_it} />
            <Call data={test} />
        </div>
    );
}
