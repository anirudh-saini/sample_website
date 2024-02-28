import Image from "next/image";
import styles from "./page.module.scss";
import Nav from "./compound/Nav";
import Experience from "./compound/Experience";
import Owner from "./compound/components/Owner";
import Portfolio from "./compound/components/Portfolio";
import Form from "./compound/components/Form";
import Footer from "./compound/components/Footer";
import Link from "next/link";
export default function Home() {
	return (
		<main>
			<div className={styles.nav_bg}>
				<div className={styles.nav}>
					<Nav />
				</div>
				<div className={styles.main}>
					<p>Bookings Available Now!</p>
					<div className={styles.main_link}>
						<Link href="/tattoo">Book Today</Link>
						<Link href="/tattoo">Enquire Now</Link>
					</div>
				</div>
			</div>
			<Experience />
			<div className={styles.own}>
				<Owner />
			</div>
			<Portfolio />
			<Form />
			<div className={styles.main_footer}>
				<Footer />
			</div>
		</main>
	);
}
