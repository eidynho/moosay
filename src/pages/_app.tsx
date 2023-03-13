import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import { AnimalContextProvider } from "@/contexts/AnimalContext";
import { MessageContextProvider } from "@/contexts/MessageContext";

import { Announcement } from "@/components/Layout/Announcement";
import { NavBarComponent } from "@/components/Layout/NavBar";

import "@/styles/tailwind.css";
import { globalStyles } from "../styles/global";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AnimalContextProvider>
            <MessageContextProvider>
                <Announcement />
                <NavBarComponent />
                <Component {...pageProps} />
                <Analytics />
            </MessageContextProvider>
        </AnimalContextProvider>
    );
}
