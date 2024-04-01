import React from "react";
import style from "./footer.module.scss";
import Link from "next/link";
export default function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.content}>
                <div className={style.item1}>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164638.5844994535!2d-118.51107216924441!3d37.35035781446454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80be17c4f154d70f%3A0x274aa27315444dfc!2sWest%20Bishop%2C%20CA%2093514%2C%20USA!5e0!3m2!1sen!2sin!4v1708508121098!5m2!1sen!2sin"
                            width="200"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="eager"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className={style.address}>
                        <p>A-98, West Bishop California 93514 USA</p>
                        <p>(0123) 456 789</p>
                        <p>info@devilztatooo.com</p>
                    </div>
                </div>

                <div className={style.navigation}>
                    <div>
                        <h5>Navigation</h5>
                    </div>
                    <div className={style.links}>
                        <div>
                            <Link href="/tattoo/">Home</Link>
                        </div>
                        <div>
                            <Link href="/tattoo/artists">Artists</Link>
                        </div>
                        <div>
                            <Link href="/tattoo/about_us">About Us</Link>
                        </div>
                        <div>
                            <Link href="/tattoo/contact_us">Contact Us</Link>
                        </div>
                    </div>
                </div>

                <div className={style.connect}>
                    <div>
                        <h5>Connect with Us</h5>
                    </div>
                    <div className={style.img}>
                        <img src="/tattoo/face.png" alt="facebook" />
                        <img src="/tattoo/twitter.png" alt="twitter" />
                        <img src="/tattoo/linked.png" alt="linkedin" />
                        <img src="/tattoo/Insta.png" alt="insta" />
                    </div>
                </div>

                <div className={style.news}>
                    <div>
                        <h5>Newsletter</h5>
                    </div>
                    <div>
                        <p>
                            Subscribe to our tattoo newsletter for expert tips
                            on leveraging the power of the internet to enhance
                            your online presence and attract more clients to
                            your studio.
                        </p>
                    </div>

                    <div className={style.news_form}>
                        <form>
                            <input type="text" placeholder="Email" />
                            <button>Join</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={style.copy}>
                <p>©2024 Copyright Mennr</p>
            </div>
        </div>
    );
}
