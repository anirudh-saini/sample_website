import React from "react";
import style from "./about.module.scss";
import Nav from "../components/Nav";
import Book from "../components/Book";
import Footer from "../components/Footer";
import About from "../components/About";
export default function page() {
    return (
        <div>
            <div className={style.nav}>
                <div className={style.component}>
                    <Nav />
                </div>
                <div className={style.nav_cantent}>
                    <h1>About Us</h1>
                    <p>
                        At Iron Forge Fitness, we are more than just a fitness
                        facility; we are a community dedicated to empowering
                        individuals on their journey to a healthier and stronger
                        self. With state-of-the-art equipment, expert trainers,
                        and a supportive atmosphere, we strive to create an
                        inclusive space where fitness goals are not only
                        achieved but exceeded. Our passion lies in fostering a
                        sense of belonging and inspiring a lifestyle centered
                        around well-being. Join us in sculpting not just your
                        body but a resilient mindset that transcends the gym,
                        making each workout a step towards a better, more
                        vibrant life.
                    </p>
                </div>
            </div>
            <div className={style.about}>
                <About />
            </div>
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
