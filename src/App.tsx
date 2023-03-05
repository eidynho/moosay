import { ThemeProvider } from "styled-components";

import { AnimalContextProvider } from "./contexts/AnimalContext";
import { MessageContextProvider } from "./contexts/MessageContext";

import { AnimalMessage } from "./components/AnimalMessage";
import { InfoContent } from "./components/InfoContent";
import { NavBarComponent } from "./components/NavBar";
import { TextareaComponent } from "./components/Textarea";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <AnimalContextProvider>
                <MessageContextProvider>
                    <div className="flex flex-col items-center md:container mx-auto h-screen">
                        <NavBarComponent />
                        <TextareaComponent />
                        <AnimalMessage />
                    </div>
                    <div className="max-w-5xl mx-auto mb-8">
                        <InfoContent />
                    </div>
                </MessageContextProvider>
            </AnimalContextProvider>

            <GlobalStyle />
        </ThemeProvider>
    );
}
