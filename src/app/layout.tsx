import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Naeman Khatib - Mechanical Engineer",
    description: "Mechanical Engineering student at Purdue University. Interested in design, simulation, and robotics.",
    keywords: ["Naeman Khatib", "Mechanical Engineer", "Purdue University", "CAD", "MATLAB", "Robotics", "Design"],
    authors: [{ name: "Naeman Khatib" }],
    creator: "Naeman Khatib",
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        title: 'Naeman Khatib - Mechanical Engineer',
        description: 'Mechanical Engineering student at Purdue University.',
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
} as const;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-neutral-900`}
            >
                <Nav />
                {children}
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
