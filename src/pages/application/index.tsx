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
            <div className="flex flex-col items-center">
                <div className="min-w-1/2">
                    <div className="flex flex-col md:flex-row items-start md:gap-2 lg:gap-6">
                        <div>
                            <MessageField />
                            <div className="flex items-center gap-2 ml-2 mt-2">
                                {/* <BaseListbox
                                    listItems={listAnimals}
                                    selected={animal}
                                    updateSelected={updateAnimal}
                                    customClasses="w-[12rem] mb-2"
                                /> */}
                                <CustomizeModal
                                    customStyles={animalStylesInClassFormat}
                                    setAnimalStyles={setAnimalStyles}
                                />
                                <AppOptionsDropdown />
                            </div>
                        </div>
                        <AnimalMessage
                            customStyles={`${animalStylesInClassFormat} px-4 pt-6 pb-8 max-w-xs text-start pointer-events-none rounded-lg border`}
                        />
                    </div>
                </div>
                <div className="mt-4 flex gap-4"></div>
            </div>
        </main>
    );
}
