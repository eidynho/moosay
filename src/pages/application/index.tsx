import { useContext, useEffect, useState } from "react";

import { MessageContext } from "@/contexts/MessageContext";
import { AnimalContext } from "@/contexts/AnimalContext";

import { AnimalMessage } from "@/components/AnimalMessage";
import { MessageField } from "@/components/MessageField";
import { CustomizeModal } from "@/components/modals/CustomizeModal";
import { AppOptionsDropdown } from "@/components/AppOptionsDropdown";

import { BaseListbox } from "@/components/headless-ui/BaseListbox";

export type AnimalStylesType = {
    color: string;
    border: string;
    background: string;
};

export default function Application() {
    const { updateMessage } = useContext(MessageContext);
    const { animal, updateAnimal } = useContext(AnimalContext);

    const [animalStyles, setAnimalStyles] = useState<AnimalStylesType>({
        color: "text-l-primary",
        border: "border-d-primary",
        background: "bg-d-primary",
    });

    const animalStylesInClassFormat = Object.values(animalStyles).join(" ");

    useEffect(() => {
        updateMessage("");
        updateAnimal("cow");
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
        <main className="md:container mx-auto">
            <div className="flex flex-col items-center justify-center">
                <div className="min-w-1/2 mb-8 flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-2 lg:gap-6">
                    <div>
                        <MessageField />
                        <div className="flex items-center justify-between lg:justify-start gap-2 mx-2 mt-2 mb-4 md:mb-0">
                            <CustomizeModal
                                customStyles={animalStylesInClassFormat}
                                animalStyles={animalStyles}
                                setAnimalStyles={setAnimalStyles}
                            />
                            <BaseListbox
                                listItems={listAnimals}
                                selected={animal}
                                updateSelected={updateAnimal}
                                customClasses="w-[9rem]"
                            />
                            <AppOptionsDropdown />
                        </div>
                    </div>
                    <AnimalMessage
                        customStyles={`${animalStylesInClassFormat} px-4 pt-6 pb-8 max-w-xs text-start rounded-md border`}
                    />
                </div>
            </div>
        </main>
    );
}
