import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <Nav type="white" />
            {children}
            <Footer type="blue" />
        </section>
    );
}
