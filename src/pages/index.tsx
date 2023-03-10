import { useContext } from "react";

import { AnimalContext } from "@/contexts/AnimalContext";

import { AnimalMessage } from "@/components/AnimalMessage";
import { TextareaComponent } from "@/components/Textarea";
import { ShareModal } from "@/components/ShareModal";
import { DownloadModal } from "@/components/DownloadModal";
import { BaseListbox } from "@/components/headless-ui/BaseListbox";

export default function Home() {
    const { animal, updateAnimal } = useContext(AnimalContext);

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
        <div className="flex flex-col items-center">
            <div className="min-w-1/2">
                <BaseListbox
                    listItems={listAnimals}
                    selected={animal}
                    updateSelected={updateAnimal}
                    customClasses="w-[21.5rem] mb-2"
                />
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <TextareaComponent />
                    <AnimalMessage />
                </div>
            </div>
            <div className="mt-4 flex gap-4">
                <ShareModal />

                <DownloadModal />
            </div>
        </div>
    );
}
