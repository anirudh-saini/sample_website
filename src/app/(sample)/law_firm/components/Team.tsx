import React from "react";
import style from "./team.module.scss";
export default function team() {
    return (
        <div className={style.team}>
            <div className={style.head}>
                <h3>Meet Our Legal Team</h3>
                <p>
                    Empowering justice with a dynamic team of legal experts. Our
                    law firm combines passion and expertise to deliver
                    unparalleled legal solutions tailored to your needs.
                </p>
            </div>
            <div className={style.img}>
                <div>
                    <img src="./law_firm/team1.png" alt="" />
                    <div>
                        <h5>Williams </h5>
                        <p>Founding Partner</p>
                    </div>
                </div>
                <div>
                    <img src="./law_firm/team2.png" alt="" />
                    <div>
                        <h5> Tran</h5>
                        <p>Founding Partner</p>
                    </div>
                </div>
                <div>
                    <img src="./law_firm/team3.png" alt="" />
                    <div>
                        <h5>Wong</h5>
                        <p>Founding Partner</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
