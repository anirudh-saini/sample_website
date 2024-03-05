import styles from "./page.module.scss";
import Get_help from "./components/Get_help";
import Team from "../law_firm/components/Team";
import Review from "./components/Review";
export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.hero}>
                <h1>Your Legal Shield Unveiled</h1>
                <p>Do you see us laughing?</p>
                <div className={styles.incident}>
                    <div>
                        <div>
                            <img src="./law_firm/icon1.png" alt="" />
                            <h3>Personal </h3>
                            <h3>Injury</h3>
                            <p>
                                These cases encompass errors in diagnosis,
                                treatment, surgery, or inadequate patient care.
                            </p>
                        </div>
                        <div>
                            <img src="./law_firm/icon1.png" alt="" />
                            <h3>Personal </h3>
                            <h3>Injury</h3>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="./law_firm/icon1.png" alt="" />
                            <h3>Personal </h3>
                            <h3>Injury</h3>
                            <p>
                                These cases encompass errors in diagnosis,
                                treatment, surgery, or inadequate patient care.
                            </p>
                        </div>
                        <div>
                            <img src="./law_firm/icon1.png" alt="" />
                            <h3>Personal </h3>
                            <h3>Injury</h3>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="./law_firm/icon1.png" alt="" />
                            <h3>Personal </h3>
                            <h3>Injury</h3>
                            <p>
                                These cases encompass errors in diagnosis,
                                treatment, surgery, or inadequate patient care.
                            </p>
                        </div>
                        <div>
                            <img src="./law_firm/icon1.png" alt="" />
                            <h3>Personal </h3>
                            <h3>Injury</h3>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="./law_firm/icon1.png" alt="" />
                            <h3>Personal </h3>
                            <h3>Injury</h3>
                            <p>
                                These cases encompass errors in diagnosis,
                                treatment, surgery, or inadequate patient care.
                            </p>
                        </div>
                        <div>
                            <img src="./law_firm/icon1.png" alt="" />
                            <h3>Personal </h3>
                            <h3>Injury</h3>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="./law_firm/icon1.png" alt="" />
                            <h3>Personal </h3>
                            <h3>Injury</h3>
                        </div>
                        <div>
                            <img src="./law_firm/icon1.png" alt="" />
                            <h3>Personal </h3>
                            <h3>Injury</h3>
                            <p>
                                These cases encompass errors in diagnosis,
                                treatment, surgery, or inadequate patient care.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Team />
            <Get_help />
            <div>
                <h3>Reviews of our Clients Speak Millions!</h3>
            </div>
            <Review />
        </main>
    );
}
