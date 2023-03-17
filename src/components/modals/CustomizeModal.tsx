import { Dispatch, SetStateAction, useState } from "react";
import { Palette, Plus } from "phosphor-react";

import { BaseModal } from "../headless-ui/BaseModal";
import { AnimalMessage } from "../AnimalMessage";
import { AnimalStylesType } from "@/pages/application";
import { GradientBox } from "../GradientBox";

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

    function updateAnimalColor(newColor: string) {
        setAnimalStyles((oldState: AnimalStylesType) => ({
            ...oldState,
            color: newColor,
        }));
    }

    const isGradient = animalStyles.background.includes("bg-clip-padding");

    const animalColorsList = [
        {
            className: "text-pink-500",
            iconColor: "from-pink-400 to-pink-500",
        },
        {
            className: "text-red-200",
            iconColor: "from-red-200 to-red-300",
        },
        {
            className: "text-white",
            iconColor: "bg-white",
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
            className: "border border-pink-500",
            iconColor: "from-pink-400 to-pink-500",
        },
        {
            className: "border border-white",
            iconColor: "from-white to-white",
        },
        {
            className: "border border-black",
            iconColor: "from-black to-black",
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
            className: "bg-white",
            iconColor: "bg-white",
        },
        {
            className: "bg-black",
            iconColor: "bg-black",
        },
    ];

    const AnimalColorTemplate = () => {
        return (
            <div className="rounded-3xl px-8 py-6">
                <h4 className="font-bold mb-3">Animal color</h4>
                <div className="flex items-center gap-3">
                    {animalColorsList.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => updateAnimalColor(item.className)}
                            className={`${item.iconColor} inline-flex p-0.5 rounded-md group bg-gradient-to-br`}
                        >
                            <span className="w-11 h-11 transition-all ease-in bg-d-primary rounded-md bg-opacity-0"></span>
                        </button>
                    ))}

                    <div
                        className="w-12 h-12 rounded-md bg-gray-200 cursor-pointer flex items-center justify-center text-d-primary"
                        title="Add custom color"
                    >
                        <Plus size={16} />
                    </div>
                </div>
            </div>
        );
    };

    const BorderColorTemplate = () => {
        return (
            <div className="rounded-3xl px-8 py-6">
                <h4 className="font-bold mb-3">Border color</h4>
                <div className="flex items-center gap-3">
                    {borderColorsList.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => updateBorderColor(item.className)}
                            className={`${item.iconColor} inline-flex p-0.5 rounded-md group bg-gradient-to-br`}
                        >
                            <span className="w-11 h-11 transition-all ease-in bg-d-primary rounded-md group-hover:bg-opacity-0"></span>
                        </button>
                    ))}

                    <div
                        className="w-12 h-12 rounded-md bg-gray-200 cursor-pointer flex items-center justify-center text-d-primary"
                        title="Add custom color"
                    >
                        <Plus size={16} />
                    </div>
                </div>
            </div>
        );
    };

    const BackgroundColorTemplate = () => {
        return (
            <div className="rounded-3xl px-8 py-6">
                <h4 className="font-bold mb-3">Background color</h4>
                <div className="flex items-center gap-3">
                    <GradientBox>
                        <div
                            onClick={() =>
                                updateBgColor(
                                    "border border-transparent bg-clip-padding transition-all",
                                )
                            }
                            className="w-12 h-12 cursor-pointer border border-transparent bg-clip-padding transition-all"
                            title="Add custom color"
                        ></div>
                    </GradientBox>
                    <GradientBox>
                        <div
                            onClick={() =>
                                updateBgColor(
                                    "border border-transparent bg-ghost bg-clip-padding transition-all",
                                )
                            }
                            className="w-12 h-12 rounded-md cursor-pointer border border-transparent bg-ghost bg-clip-padding transition-all"
                            title="Add custom color"
                        ></div>
                    </GradientBox>
                    {bgColorsList.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => updateBgColor(item.className)}
                            className={`${item.iconColor} w-12 h-12 rounded-md cursor-pointer`}
                        ></button>
                    ))}

                    <div
                        className="w-12 h-12 rounded-md bg-gray-200 cursor-pointer flex items-center justify-center text-d-primary"
                        title="Add custom color"
                    >
                        <Plus size={16} />
                    </div>
                </div>
            </div>
        );
    };

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

                    <AnimalColorTemplate />
                    <BorderColorTemplate />
                    <BackgroundColorTemplate />
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
