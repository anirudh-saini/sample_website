"use client";
import { useState, useEffect } from "react";
import style from "./book.module.scss";
import Link from "next/link";
export default function Book() {
    const [time, setTime] = useState({
        hours: 23,
        mins: 59,
        sec: 59,
    });

    useEffect(() => {
        const initialTime = 24 * 60 * 60 - 1; // 24 hours in seconds

        let time = initialTime;

        function updateTimer() {
            const hours = Math.floor(time / 3600);
            const minutes = Math.floor((time % 3600) / 60);
            const seconds = time % 60;

            setTime({
                hours,
                mins: minutes,
                sec: seconds,
            });

            if (time > 0) {
                time--;
            } else {
                console.log("Timer expired!");
                clearInterval(timerInterval);
            }
        }

        const timerInterval = setInterval(updateTimer, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    return (
        <div className={style.book}>
            <div className={style.book_bg}>
                <img src="/bookbg.png" alt="" />
            </div>
            <div className={style.offer}>
                <div className={style.timer}>
                    <h3>Book your free</h3>
                    <h3>
                        trial <span>Today!</span>
                    </h3>
                    <p>
                        Offer ends in{" "}
                        <span>{`${
                            time.hours < 10 ? "0" + time.hours : time.hours
                        }:${time.mins < 10 ? "0" + time.mins : time.mins}:${
                            time.sec < 10 ? "0" + time.sec : time.sec
                        }`}</span>
                    </p>
                </div>
                <div className={style.link}>
                    <Link href="">Try Today</Link>
                </div>
            </div>
        </div>
    );
}
