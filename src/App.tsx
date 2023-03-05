import { ThemeProvider } from "styled-components";
import { DownloadSimple, Share } from "phosphor-react";

import { AnimalContextProvider } from "./contexts/AnimalContext";
import { MessageContextProvider } from "./contexts/MessageContext";

import { AnimalMessage } from "./components/AnimalMessage";
import { NavBarComponent } from "./components/NavBar";
import { TextareaComponent } from "./components/Textarea";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { ShareModal } from "./components/ShareModal";

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <AnimalContextProvider>
                <MessageContextProvider>
                    <div className="flex flex-col items-center md:container mx-auto h-screen">
                        <NavBarComponent />
                        <div className="min-w-1/2 flex flex-col md:flex-row gap-4 md:gap-12">
                            <TextareaComponent />
                            <AnimalMessage />
                        </div>

                        <div className="mt-4 flex gap-4">
                            <ShareModal />

                            <button className="flex align-center justify-center gap-2 py-2 px-4 rounded bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition-colors">
                                <DownloadSimple size={24} />
                                <span>Download</span>
                            </button>
                        </div>
                    </div>
                </MessageContextProvider>
            </AnimalContextProvider>

            <GlobalStyle />
        </ThemeProvider>
    );
}
