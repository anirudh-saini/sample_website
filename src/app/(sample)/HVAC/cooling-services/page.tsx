import React from "react";
import style from "./page.module.scss";
export default function page() {
    return (
        <div className={style.cool}>
            <div>
                <h1>Cooling Services</h1>
            </div>
            <div>
                <div className={style.cool_img}>
                    <div className={style.img}>
                        <img src="/hvac/cool1.png" alt="service" />
                    </div>
                    <div className={style.content}>
                        <div>
                            <p>Central Air Coniditioning</p>
                        </div>
                        <div>
                            <p>Learn More</p>
                        </div>
                    </div>
                </div>
                <div className={style.cool_img}>
                    <div className={style.img}>
                        <img src="/hvac/cool2.png" alt="service" />
                    </div>
                    <div className={style.content}>
                        <div>
                            <p>Swamp Cooler Services</p>
                        </div>
                        <div>
                            <p>Learn More</p>
                        </div>
                    </div>
                </div>
                <div className={style.cool_img}>
                    <div className={style.img}>
                        <img src="/hvac/cool3.png" alt="service" />
                    </div>
                    <div className={style.content}>
                        <div>
                            <p>Unit Air Services</p>
                        </div>
                        <div>
                            <p>Learn More</p>
                        </div>
                    </div>
                </div>
                <div className={style.cool_img}>
                    <div className={style.img}>
                        <img src="/hvac/cool4.png" alt="service" />
                    </div>
                    <div className={style.content}>
                        <div>
                            <p>Rooftop Air Coniditioning</p>
                        </div>
                        <div>
                            <p>Learn More</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
