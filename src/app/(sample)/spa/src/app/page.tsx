import styles from "./page.module.scss";
import Nav from "./components/Nav";
import Service from "./components/Service";
import Experience from "./components/Experience";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { hnav } from "@/app/data/nav";
export default function Home() {
    return (
        <main>
            <div className={styles.nav}>
                <Nav data={hnav} />
            </div>
            <div className={styles.sub_heading} id="scroll">
                <p>
                    At Haven of Harmony, we invite you to escape the ordinary
                    and embrace a world of tranquility. Immerse yourself in the
                    luxurious ambiance, expert care, and rejuvenating
                    experiences that await you. Welcome to a haven of
                    relaxation—welcome to
                </p>
                <p>Haven of Harmony</p>
            </div>
            <div className={styles.service}>
                <img
                    className={styles.bgImage}
                    src="/service_bg.png"
                    alt="services"
                />
                <Service />
            </div>
            <div>
                <Experience />
            </div>

            <Form />

            <Footer />
        </main>
    );
}
