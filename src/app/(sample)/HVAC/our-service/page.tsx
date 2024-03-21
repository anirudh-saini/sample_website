import React from "react";
import Book from "../components/Book";
import Service from "../components/Service";
import { area } from "../../data/service";
export default function page() {
    return (
        <div>
            <Service data={area} type="area" />
            <Book />
        </div>
    );
}
