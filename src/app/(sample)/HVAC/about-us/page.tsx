import React from "react";
import style from "./page.module.scss";
import Book from "../components/Book";
export default function page() {
    return (
        <div className={style.about}>
            <div className={style.about_us}>
                <div className={style.content}>
                    <div>
                        <h1>About Us</h1>
                    </div>
                    <div>
                        <p>
                            Welcome to ChillMasters & Co, where comfort meets
                            expertise! With a passion for perfecting your indoor
                            climate, we are your go-to HVAC specialists
                            committed to providing unparalleled heating,
                            ventilation, and air conditioning solutions. At
                            ChillMasters & Co, we pride ourselves on a team of
                            skilled professionals dedicated to ensuring your
                            home or business stays at the ideal temperature
                            year-round. Our journey began with a simple goal –
                            to transform spaces into havens of comfort. With
                            years of industry experience, cutting-edge
                            technology, and a customer-centric approach, we've
                            become the trusted name for all your HVAC needs.
                            Join us in embracing a world of ultimate comfort
                            with ChillMasters & Co.
                        </p>
                    </div>
                </div>
                <div className={style.story}>
                    <div>
                        <h2>Our Story</h2>
                    </div>
                    <div>
                        <p>
                            Starting from the grassroots, we faced challenges
                            head-on, learning and evolving with each obstacle.
                            Our commitment to innovation and customer
                            satisfaction fueled our ascent. Through hard work
                            and dedication, ChillMasters & Co transformed into a
                            trusted name, exceeding expectations in heating,
                            ventilation, and air conditioning. Today, our story
                            resonates with resilience, growth, and an unwavering
                            commitment to enhancing your environment.
                        </p>
                        <img src="/hvac/story.png " alt="story" />
                    </div>
                </div>
            </div>
            <div className={style.team}>
                <div className={style.heading}>
                    <h2>Our Team</h2>
                </div>
                <div className={style.img}>
                    <img src="/hvac/team1.png" alt="team" />
                    <img src="/hvac/team2.png" alt="team" />
                    <img src="/hvac/team3.png" alt="team" />
                </div>
            </div>
            <Book />
        </div>
    );
}
