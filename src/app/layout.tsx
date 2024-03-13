import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
const inter = Inter({ subsets: ["latin"] });
config.autoAddCss = false;
export const metadata: Metadata = {
    title: "Sample Websites",
    description: "Sample websites build my mennr",
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
