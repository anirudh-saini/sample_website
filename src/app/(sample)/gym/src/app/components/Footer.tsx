import React from "react";
import style from "./footer.module.scss";
export default function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.icon}>
                <img src="/icon.png" alt="logo" />
            </div>
            <div className={style.reach_us}>
                <div>
                    <h4>How to reach us</h4>
                </div>
                <div>
                    <p>A-98, Amazon World Noida Spectrum New Earth- 9811666</p>
                    <p>(0123) 456 789</p>
                    <p>info@ironforgefitness.com</p>
                </div>
            </div>
            <div className={style.nav}>
                <div>
                    <h4>Navigation</h4>
                </div>
                <div>
                    <div>
                        <p>About Us</p>
                        <p>Team</p>
                        <p>Careers</p>
                    </div>
                    <div>
                        <p>Contact Us</p>
                        <p>FAQ</p>
                    </div>
                </div>
            </div>
            <div className={style.connect}>
                <div>
                    <h4>Connect with us</h4>
                </div>
                <div>
                    <img src="/face.png" alt="" />
                    <img src="/twitter.png" alt="" />
                    <img src="/linked.png" alt="" />
                    <img src="/Insta.png" alt="" />
                </div>
            </div>
        </div>
    );
}
