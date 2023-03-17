import { Dispatch, SetStateAction, useState } from "react";
import { Palette, Plus } from "phosphor-react";

import { BaseModal } from "../../headless-ui/BaseModal";
import { AnimalMessage } from "../../AnimalMessage";
import { AnimalStylesType } from "@/pages/application";
import { GradientBox } from "../../GradientBox";
import { AnimalColor } from "./animalColor";
import { BorderColor } from "./BorderColor";
import { BackgroundColor } from "./BackgroundColor";

interface CustomizeModalProps {
    customStyles: string;
    animalStyles: AnimalStylesType;
    setAnimalStyles: Dispatch<SetStateAction<AnimalStylesType>>;
}

export function CustomizeModal({
    customStyles,
    animalStyles,
    setAnimalStyles,
}: CustomizeModalProps) {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggleModal() {
        setIsOpen((state) => !state);
    }

    const isGradient = animalStyles.background.includes("bg-clip-padding");

    function updateAnimalColor(newColor: string) {
        setAnimalStyles((oldState: AnimalStylesType) => ({
            ...oldState,
            color: newColor,
        }));
    }

    function updateBorderColor(newColor: string) {
        setAnimalStyles((oldState: AnimalStylesType) => ({
            ...oldState,
            border: newColor,
        }));
    }

    function updateBgColor(newColor: string) {
        setAnimalStyles((oldState: AnimalStylesType) => ({
            ...oldState,
            background: newColor,
        }));
    }

    return (
        <>
            <button
                onClick={handleToggleModal}
                className="flex items-center gap-2 py-3 px-5 rounded-lg text-sm font-medium text-secondary border border-secondary transition-all
                hover:enabled:bg-secondary hover:enabled:text-d-primary
                disabled:cursor-not-allowed disabled:brightness-75"
            >
                <Palette size={24} />
                <span>Customize</span>
            </button>

            <BaseModal
                size="max-w-4xl"
                title="Customize"
                isOpen={isOpen}
                toggleModal={handleToggleModal}
            >
                {/* Modal body */}
                <div className="p-6 flex flex-col items-center gap-6 text-l-primary">
                    {isGradient ? (
                        <GradientBox>
                            <AnimalMessage
                                staticMessage="moo-la-la..."
                                customStyles={`${customStyles} px-4 pt-6 pb-8 max-w-xs text-start pointer-events-none rounded-lg border`}
                            />
                        </GradientBox>
                    ) : (
                        <AnimalMessage
                            staticMessage="moo-la-la..."
                            customStyles={`${customStyles} px-4 pt-6 pb-8 max-w-xs text-start pointer-events-none rounded-lg border`}
                        />
                    )}

                    <AnimalColor updateAnimalColor={updateAnimalColor} />
                    <BorderColor updateBorderColor={updateBorderColor} />
                    <BackgroundColor updateBgColor={updateBgColor} />
                </div>
                <div className="w-full flex justify-end text-d-primary">
                    <button
                        onClick={handleToggleModal}
                        className="bg-l-primary py-2 px-4 rounded-md transition-colors hover:bg-d-secondary hover:text-l-primary"
                    >
                        Close
                    </button>
                </div>
            </BaseModal>
        </>
    );
}
