import React from "react";
import style from "./team.module.scss";
export default function Team() {
    return (
        <div className={style.teambg}>
            <div className={style.team}>
                <div className={style.team_head}>
                    <h4>Our Professional Team</h4>
                    <p>
                        Empower your fitness journey with our elite team of
                        certified trainers, dedicated to maximizing your
                        potential.
                    </p>
                </div>
                <div className={style.team_img}>
                    <img src="/t1.png" alt=" trainer " />
                    <div>
                        <p>Lee Heath</p>
                        <p>Ex-CFA, Gold Gym</p>
                    </div>
                </div>
                <div className={style.team_img}>
                    <img src="/t2.png" alt=" trainer " />
                    <div>
                        <p>Lee Heath</p>
                        <p>Ex-CFA, Gold Gym</p>
                    </div>
                </div>

                <div className={style.team_img}>
                    <img src="/t3.png" alt=" trainer " />
                    <div>
                        <p>Lee Heath</p>
                        <p>Ex-CFA, Gold Gym</p>
                    </div>
                </div>
                <div className={style.team_img}>
                    <img src="/t4.png" alt=" trainer " />
                    <div>
                        <p>Lee Heath</p>
                        <p>Ex-CFA, Gold Gym</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
