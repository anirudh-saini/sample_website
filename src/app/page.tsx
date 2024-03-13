import style from "./page.module.scss";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
export default function Home() {
    return (
        <main className={style.main}>
            <Nav type="normal" />
            <div className={style.head}>
                <h1>Mennr Sample Pages</h1>
                <p>Client Showcase </p>
            </div>
            <Carousel />
            <div className={style.button}>
                <button>Demo Gallery </button>
                <button>Success Stories</button>
            </div>
            <Footer type="normal" />
        </main>
    );
}
