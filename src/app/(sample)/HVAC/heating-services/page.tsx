import React from "react";
import Book from "../components/Book";
import Service from "../components/Service";
import { heat } from "../../data/service";
export default function page() {
    return (
        <div>
            <Service data={heat} type="heat" />
            <Book />
        </div>
    );
}
