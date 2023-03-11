import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import { AnimalContextProvider } from "@/contexts/AnimalContext";
import { MessageContextProvider } from "@/contexts/MessageContext";
import { NavBarComponent } from "@/components/NavBar";

import "@/styles/tailwind.css";
import { globalStyles } from "../styles/global";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AnimalContextProvider>
            <MessageContextProvider>
                <div className="md:container mx-auto h-screen">
                    <NavBarComponent />
                    <Component {...pageProps} />
                    <Analytics />
                </div>
            </MessageContextProvider>
        </AnimalContextProvider>
    );
}
