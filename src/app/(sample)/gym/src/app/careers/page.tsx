import React from "react";
import style from "./careers.module.scss";
import Book from "../components/Book";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Career_table from "../components/Career_table";
export default function page() {
    return (
        <div>
            <div className={style.nav}>
                <div className={style.component}>
                    <Nav />
                </div>
                <div className={style.nav_cantent}>
                    <div>
                        <h1>
                            Embark on Your Fitness Odyssey: Join Our Empowering{" "}
                            <span>Gym Community Today!</span>
                        </h1>
                        <p>
                            Be part of a vibrant community that goes beyond
                            traditional workouts. Experience top-notch
                            equipment, guided by expert trainers, in a pristine
                            and welcoming environment. Our diverse fitness
                            classes cater to every interest, ensuring an
                            engaging and effective routine. Join our supportive
                            fitness family, where a positive atmosphere propels
                            you towards your goals. With flexible hours and
                            convenient accessibility, we make prioritizing your
                            well-being effortless. Elevate your fitness
                            experience &#8212; join us and unleash the best
                            version of yourself!
                        </p>
                    </div>
                </div>
            </div>
            <Career_table />
            <div className={style.booking}>
                <Book />
            </div>
            <div className={style.footer}>
                <Footer />
                <div className={style.copy}>
                    <p>©2024 Copyright owned by Iron Forge Fitness</p>
                </div>
            </div>
        </div>
    );
}
