import React from "react";
import style from "./about.module.scss";
export default function About() {
    return (
        <div className={style.about_component}>
            <div className={style.card1}>
                <div>
                    <div className={style.head}>
                        <h3>
                            State-of-the-Art <span>Equipments</span>
                        </h3>
                    </div>
                    <div className={style.content}>
                        <h3>State-of-the-Art Equipments</h3>
                        <p>
                            A good gym should offer a wide range of modern and
                            well-maintained exercise equipment, catering to
                            various workout preferences and fitness levels. From
                            cardio machines to strength training equipment,
                            diversity in equipment ensures members have the
                            tools they need for effective workouts.
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.card1}>
                <div>
                    <div className={style.head}>
                        <h3>
                            Expert <span>Trainers</span>
                        </h3>
                    </div>
                    <div className={style.content}>
                        <h3>Expert Trainers</h3>
                        <p>
                            Highly skilled trainers with extensive expertise,
                            delivering tailored and impactful training sessions.
                            Our experts bring a wealth of knowledge, fostering
                            growth, development, and success in diverse fields
                            and industries.
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.card1}>
                <div>
                    <div className={style.head}>
                        <h3>
                            Clean and Well-Maintained <span>Facilities</span>
                        </h3>
                    </div>
                    <div className={style.content}>
                        <h3>Clean and Well-Maintained Facilities</h3>
                        <p>
                            Impeccably maintained facilities providing a
                            pristine environment. Our commitment to cleanliness
                            ensures a welcoming space. Experience excellence in
                            every detail for a comfortable and enjoyable
                            atmosphere.
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.card1}>
                <div>
                    <div className={style.head}>
                        <h3>
                            Varied Fitness <span>Classes</span>
                        </h3>
                    </div>
                    <div className={style.content}>
                        <h3>Varied Fitness Classes</h3>
                        <p>
                            Offering a diverse range of fitness classes caters
                            to different interests and skill levels. Whether
                            it's yoga, spin, HIIT, or dance, varied classes
                            enhance the overall gym experience, keeping workouts
                            engaging and motivating for members.
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.card1}>
                <div>
                    <div className={style.head}>
                        <h3>
                            Supportive Community and <span>Atmosphere</span>
                        </h3>
                    </div>
                    <div className={style.content}>
                        <h3>Supportive Community and Atmosphere</h3>
                        <p>
                            Join a thriving community fostering support and
                            camaraderie. Our welcoming atmosphere encourages
                            growth and connection. Engage with like-minded
                            individuals in a space designed to uplift and
                            empower.
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.card1}>
                <div>
                    <div className={style.head}>
                        <h3>
                            Flexible Hours and <span>Accessibility</span>
                        </h3>
                    </div>
                    <div className={style.content}>
                        <h3>Flexible Hours and Accessibility</h3>
                        <p>
                            Enjoy the convenience of flexible hours tailored to
                            your schedule. Our accessible locations make it easy
                            to engage in enriching experiences, ensuring a
                            seamless and accommodating environment for all.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
