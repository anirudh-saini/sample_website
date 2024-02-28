import Image from "next/image";
import styles from "./page.module.scss";
import Nav from "./components/Nav";
import Why_choose_us from "./components/Why_choose_us";
import Team from "./components/Team";
import Book from "./components/Book";
import Footer from "./components/Footer";
export default function Home() {
    return (
        <main>
            <div className={styles.nav}>
                <div className={styles.component}>
                    <Nav />
                </div>
                <div className={styles.nav_cantent}>
                    <p>Sweat</p>
                    <p>Sculpt</p>
                    <p>Succeed.</p>
                </div>
            </div>
            <div className={styles.whyusmain}>
                <Why_choose_us />
            </div>
            <Team />
            <div className={styles.booking}>
                <Book />
            </div>
            <div className={styles.footer}>
                <Footer />
                <div className={styles.copy}>
                    <p>©2024 Copyright owned by Iron Forge Fitness</p>
                </div>
            </div>
        </main>
    );
}
