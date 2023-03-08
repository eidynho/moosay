import { AnimalContextProvider } from "../contexts/AnimalContext";
import { MessageContextProvider } from "../contexts/MessageContext";

import { AnimalMessage } from "../components/AnimalMessage";
import { NavBarComponent } from "../components/NavBar";
import { TextareaComponent } from "../components/Textarea";

import { ShareModal } from "../components/ShareModal";
import { DownloadModal } from "../components/DownloadModal";

export default function Home() {
    return (
        <AnimalContextProvider>
            <MessageContextProvider>
                <div className="flex flex-col items-center md:container mx-auto h-screen">
                    <NavBarComponent />
                    <div className="min-w-1/2 flex flex-col md:flex-row gap-4 md:gap-8">
                        <TextareaComponent />
                        <AnimalMessage />
                    </div>

                    <div className="mt-4 flex gap-4">
                        <ShareModal />

                        <DownloadModal />
                    </div>
                </div>
            </MessageContextProvider>
        </AnimalContextProvider>
    );
}
