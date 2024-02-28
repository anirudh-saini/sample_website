import React from "react";
import style from "./career_table.module.scss";

export default function Career_table() {
    return (
        <div className={style.container}>
            <div className={style.career}>
                <div className={style.head}>
                    <h2>Open Roles</h2>
                </div>
                <div className={style.table}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Gym Manager</td>
                                <td>Connecticut</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Maintenance and Equipment Technician</td>
                                <td>Denver</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Nutritionist/Dietitian</td>
                                <td>Denver</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Fitness Trainers</td>
                                <td>Connecticut</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Fitness Trainers</td>
                                <td>Denver</td>
                                <td>7</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
