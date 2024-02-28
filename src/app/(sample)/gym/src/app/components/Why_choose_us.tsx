import React from "react";
import style from "./why_choose_us.module.scss";
export default function Why_choose_us() {
    return (
        <div className={style.whyus}>
            <div className={style.head}>
                <h3>Why Choose Us?</h3>
                <p>
                    Transform with us: Expert trainers, state-of-the-art
                    equipment, and personalized programs for your fitness
                    journey. Choose excellence, choose us.
                </p>
            </div>
            <div className={style.whyus_img}>
                <div className={style.item}>
                    <img src="/why_choose_us1.png" alt="" />
                    <div>
                        <p>Training Variety</p>
                    </div>
                </div>
                <div className={style.item}>
                    <img src="/why_choose_us2.png" alt="" />
                    <div>
                        <p>Personal Trainers</p>
                    </div>
                </div>
                <div className={style.item}>
                    <img src="/why_choose_us3.png" alt="" />
                    <div>
                        <p>Modern Equipments</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
