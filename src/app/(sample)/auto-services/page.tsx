import React from "react";
import style from "./page.module.scss";
import Hero1 from "./components/Hero1";
import Review from "./components/Review";
import { home } from "../data/hero";
import Link from "next/link";
import Carousel from "./components/Carousel";
export default function page() {
    return (
        <div>
            <Hero1 data={home} />
            <Carousel />
            <div className={style.team}>
                <div>
                    <h5>
                        YOUR TRUSTED PARTNER IN RESTORING VEHICLE EXCELLENCE{" "}
                    </h5>
                    <p>
                        At GearGurus, our skilled team is committed to top-notch
                        service, providing careful care for your vehicle, from
                        minor dents to full collision repairs. We take pride in
                        restoring your car to its former glory, using modern
                        facilities and a passion for precision. GearGurus: Your
                        trusted partner in automotive excellence
                    </p>
                    <div>
                        <Link href="">Read more</Link>
                        <Link href="">Meet our technicians</Link>
                    </div>
                </div>
                <div>
                    <img src="/auto_services/trust.png" alt="trust" />
                </div>
            </div>
            <div>
                <Review />
            </div>
            {/* <div className={style.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.458860173218!2d-83.90784872436855!3d34.211300273097386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5f2ef33d693bd%3A0x7c5b4c5d4c2e1fe0!2s4337%20McBrayer%20Rd%20%23400%2C%20Oakwood%2C%20GA%2030566%2C%20USA!5e0!3m2!1sen!2sin!4v1713159678003!5m2!1sen!2sin"
                    // width="1920"
                    // height="348"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe> */}
            {/* 
                <div className={style.map_content}>
                    <div>
                        <h5>Contact Info</h5>
                        <div className={style.contact}>
                            <div>
                                <img src="/location.png" alt="location" />
                                <p>
                                    2605 Caton Hill Road, Woodbridge, VA 22192
                                </p>
                            </div>
                            <div>
                                <img src="/call.png" alt="number" />
                                <p>1-800-1234567</p>
                            </div>
                            <div>
                                <img src="/email.png" alt="email" />
                                <p>officeone@youremail.com</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5>Opening Hours</h5>
                        <div className={style.time}>
                            <img src="/time.png" alt="timing" />

                            <div>
                                <p>
                                    Mon-Fri: <span>7:00 AM - 6:00 PM</span>
                                </p>
                                <p>
                                    Saturday: <span>9:00 AM - 5:00 PM</span>
                                </p>
                                <p>
                                    Sunday: <span>Closed</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.copy}>
                <div>
                    <p>© 2022 Car Repair Services, All Rights Reserved</p>
                    <div>
                        <img src="/Frame.svg" alt="" />
                        <img src="/Frame1.svg" alt="" />
                        <img src="/Frame2.svg" alt="" />
                    </div>
                </div>
            </div> */}
        </div>
    );
}
