import "./globals.css";
import "antd/dist/reset.css";

import { Inter } from "next/font/google";
import ClientEntry from "./clientEntry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "ScalaPay Checkout Demo",
    description: "Assessment",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <ClientEntry></ClientEntry>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
