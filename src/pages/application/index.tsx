import { useContext, useEffect, useState } from "react";

import { AnimalContext } from "@/contexts/AnimalContext";

import { AnimalMessage } from "@/components/AnimalMessage";
import { MessageField } from "@/components/MessageField";
import { ShareModal } from "@/components/ShareModal";
import { DownloadModal } from "@/components/DownloadModal";
import { BaseListbox } from "@/components/headless-ui/BaseListbox";

export default function Application() {
    const [isMounted, setIsMounted] = useState(false);

    const { animal, updateAnimal } = useContext(AnimalContext);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const listAnimals = [
        { value: "cow", text: "cow" },
        { value: "bat", text: "bat" },
        { value: "cat", text: "cat" },
        { value: "dog", text: "dog" },
        { value: "dolphin", text: "dolphin" },
        { value: "ducks", text: "ducks" },
        { value: "fish", text: "fish" },
        { value: "tux", text: "tux" },
    ];

    return (
        isMounted && (
            <main className="flex flex-col items-center">
                <div className="min-w-1/2">
                    <BaseListbox
                        listItems={listAnimals}
                        selected={animal}
                        updateSelected={updateAnimal}
                        customClasses="w-[21.5rem] mb-2"
                    />
                    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
                        <MessageField />
                        <AnimalMessage />
                    </div>
                </div>
                <div className="mt-4 flex gap-4">
                    <ShareModal />

                    <DownloadModal />
                </div>
            </main>
        )
    );
}