import styles from "./page.module.scss";
import Nav from "./components/Nav";
export default function Home() {
    return (
        <main className={styles.main}>
            <Nav />
        </main>
    );
}
