import React from "react";
import style from "./contact.module.scss";
import Contact from "../components/Contact";
import { law } from "../../data/contact";
export default function page() {
    return (
        <div>
            <Contact data={law} type="normal" />
        </div>
    );
}
