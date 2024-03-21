import React from "react";
import style from "./page.module.scss";
import Book from "../components/Book";
import Contact from "../../law_firm/components/Contact";
import { hvac } from "../../data/contact";
export default function page() {
    return (
        <div>
            <Contact data={hvac} type="blue" />
            <Book />
        </div>
    );
}
