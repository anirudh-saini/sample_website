import React from "react";
import style from "./page.module.scss";
import Hero2 from "../components/Hero2";
import { about } from "../../data/hero";
export default function page() {
    return (
        <div>
            <Hero2 data={about} />
            <div className={style.about}>
                <div className={style.content}>
                    <p>
                        At Gear Gurus, we are more than just an automobile
                        service provider; we're your trusted partner in
                        maintaining the performance and safety of your vehicle.
                        With a team of highly skilled technicians and
                        state-of-the-art equipment, we deliver exceptional
                        service and repairs tailored to your needs. Our
                        commitment to excellence extends beyond fixing cars;
                        it's about building lasting relationships with our
                        customers based on integrity, transparency, and
                        reliability. Whether it's routine maintenance or complex
                        repairs, you can rely on us to keep your vehicle running
                        smoothly and efficiently, ensuring peace of mind on
                        every journey.
                    </p>
                </div>

                <div className={style.story}>
                    <h3>Our Story</h3>
                    <div>
                        <div>
                            <img src="/auto_services/story.png" alt="" />
                        </div>
                        <div>
                            <p>
                                Our history is rooted in a passion for
                                automotive excellence. Since our inception,
                                we've dedicated ourselves to providing top-notch
                                service, earning trust through skilled repairs,
                                innovative solutions, and unwavering commitment.
                                With a legacy of reliability and expertise, we
                                continue to drive forward, serving our customers
                                with pride and dedication.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
