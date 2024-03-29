import React from "react";
import style from "./page.module.scss";
import Hero from "../components/Hero";
import Call from "../components/Call";
import { service } from "../../data/hero_pest";
import { service_call } from "../../data/call_pest";
import Content from "../components/Content";
import { main_service } from "../../data/pest_service";
export default function page() {
    return (
        <div className={style.service}>
            <Hero data={service} />
            <Content data={main_service} />
            <Call data={service_call} />
        </div>
    );
}
