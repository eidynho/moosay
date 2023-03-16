import { Dispatch, SetStateAction, useState } from "react";
import { Palette, Plus } from "phosphor-react";

import { BaseModal } from "../headless-ui/BaseModal";
import { AnimalMessage } from "../AnimalMessage";
import { AnimalStylesType } from "@/pages/application";

interface CustomizeModalProps {
    customStyles: string;
    setAnimalStyles: Dispatch<SetStateAction<AnimalStylesType>>;
}

export function CustomizeModal({
    customStyles,
    setAnimalStyles,
}: CustomizeModalProps) {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggleModal() {
        setIsOpen((state) => !state);
    }

    function updateAnimalColor(newColor: string) {
        setAnimalStyles((oldState: AnimalStylesType) => ({
            ...oldState,
            color: newColor,
        }));
    }
    const animalColorsList = [
        {
            className: "text-primary",
            iconColor: "bg-primary",
        },
        {
            className: "text-black",
            iconColor: "bg-black",
        },
    ];

    function updateBorderColor(newColor: string) {
        setAnimalStyles((oldState: AnimalStylesType) => ({
            ...oldState,
            border: newColor,
        }));
    }
    const borderColorsList = [
        {
            className: "border border-primary",
            iconColor: "bg-primary",
        },
        {
            className: "border border-black",
            iconColor: "bg-black",
        },
    ];

    function updateBgColor(newColor: string) {
        setAnimalStyles((oldState: AnimalStylesType) => ({
            ...oldState,
            background: newColor,
        }));
    }
    const bgColorsList = [
        {
            className: "bg-primary",
            iconColor: "bg-primary",
        },
        {
            className: "bg-black",
            iconColor: "bg-black",
        },
    ];

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
                size="max-w-2xl"
                title="Customize"
                isOpen={isOpen}
                toggleModal={handleToggleModal}
            >
                {/* Modal body */}
                <div className="p-6 flex flex-col items-center gap-6 text-d-primary">
                    <AnimalMessage
                        staticMessage="moo-la-la..."
                        customStyles={`${customStyles} px-4 pt-6 pb-8 max-w-xs text-start pointer-events-none rounded-lg border`}
                    />
                    <div className="bg-red-100 rounded-3xl px-8 py-6">
                        <h4 className="font-bold mb-3">Animal color</h4>
                        <div className="flex items-center gap-3">
                            {animalColorsList.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        updateAnimalColor(item.className)
                                    }
                                    className={`${item.iconColor} w-10 h-10 rounded-full cursor-pointer`}
                                ></button>
                            ))}
                            <div
                                className="w-10 h-10 rounded-full bg-gray-200 cursor-pointer flex items-center justify-center text-d-primary"
                                title="Add custom color"
                            >
                                <Plus size={16} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-100 rounded-3xl px-8 py-6">
                        <h4 className="font-bold mb-3">Border color</h4>
                        <div className="flex items-center gap-3">
                            {borderColorsList.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        updateBorderColor(item.className)
                                    }
                                    className={`${item.iconColor} w-10 h-10 rounded-full cursor-pointer`}
                                ></button>
                            ))}
                            <div
                                className="w-10 h-10 rounded-full bg-gray-200 cursor-pointer flex items-center justify-center text-d-primary"
                                title="Add custom color"
                            >
                                <Plus size={16} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-100 rounded-3xl px-8 py-6">
                        <h4 className="font-bold mb-3">Background color</h4>
                        <div className="flex items-center gap-3">
                            {bgColorsList.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        updateBgColor(item.className)
                                    }
                                    className={`${item.iconColor} w-10 h-10 rounded-full cursor-pointer`}
                                ></button>
                            ))}
                            <div
                                className="w-10 h-10 rounded-full bg-gray-200 cursor-pointer flex items-center justify-center text-d-primary"
                                title="Add custom color"
                            >
                                <Plus size={16} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-end text-d-primary">
                    <button
                        onClick={handleToggleModal}
                        className="bg-gray-300 py-2 px-4 rounded-lg"
                    >
                        Fechar
                    </button>
                </div>
            </BaseModal>
        </>
    );
}
