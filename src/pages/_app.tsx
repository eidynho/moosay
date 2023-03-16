import { AppProps } from "next/app";
import Head from "next/head";
import { Manrope, Space_Mono } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { AnimalContextProvider } from "@/contexts/AnimalContext";
import { MessageContextProvider } from "@/contexts/MessageContext";

import { Announcement } from "@/components/Layout/Announcement";
import { NavBarComponent } from "@/components/Layout/NavBar";

import "@/styles/tailwind.css";
import { globalStyles } from "../styles/global";

globalStyles();

export const manrope = Manrope({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-manrope",
});

export const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-space-mono",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>
                    Moosay | Cowsay Generator - Create Funny ASCII Art in
                    Seconds
                </title>
            </Head>
            <AnimalContextProvider>
                <MessageContextProvider>
                    <main
                        className={`${manrope.variable} font-manrope ${spaceMono.variable} font-space-mono`}
                    >
                        <Announcement />
                        <NavBarComponent />
                        <Component {...pageProps} />
                        <Analytics />
                    </main>
                </MessageContextProvider>
            </AnimalContextProvider>
        </>
    );
}
