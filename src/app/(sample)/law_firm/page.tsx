import styles from "./page.module.scss";
import Get_help from "./components/Get_help";
import Team from "../law_firm/components/Team";
import Review from "./components/Review";
import Services from "./components/services/Services";
export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.hero}>
                <div className={styles.textContainer}>
                    <h1>Your Legal Shield Unveiled</h1>
                    <p>Do you see us laughing?</p>
                </div>

                <div className={styles.incident}>
                    <Services />
                </div>
            </div>
            <Team />
            <Get_help />
            <div className={styles.review_head}>
                <h3>Reviews of our Clients Speak Millions!</h3>
            </div>
            <Review />
        </main>
    );
}
