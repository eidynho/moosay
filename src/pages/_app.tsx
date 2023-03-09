import "@/styles/tailwind.css";
import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import { AnimalContextProvider } from "@/contexts/AnimalContext";
import { MessageContextProvider } from "@/contexts/MessageContext";
import { NavBarComponent } from "@/components/NavBar";

globalStyles();

function App({ Component, pageProps }: AppProps) {
    return (
        <AnimalContextProvider>
            <MessageContextProvider>
                <div className="md:container mx-auto h-screen">
                    <NavBarComponent />
                    <Component {...pageProps} />
                </div>
            </MessageContextProvider>
        </AnimalContextProvider>
    );
}

export default App;
