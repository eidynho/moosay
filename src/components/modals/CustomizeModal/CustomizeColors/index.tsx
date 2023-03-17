import { Disclosure, Transition } from "@headlessui/react";
import { CaretUp } from "phosphor-react";
import { AnimalColor } from "./AnimalColor";
import { BackgroundColor } from "./BackgroundColor";
import { BorderColor } from "./BorderColor";

interface CustomizeColorsProps {
    updateAnimalColor: (newValue: string) => void;
    updateBorderColor: (newValue: string) => void;
    updateBgColor: (newValue: string) => void;
}

export function CustomizeColors({
    updateAnimalColor,
    updateBorderColor,
    updateBgColor,
}: CustomizeColorsProps) {
    const disclosureItems = [
        {
            title: "Animal colors",
            component: <AnimalColor updateAnimalColor={updateAnimalColor} />,
        },
        {
            title: "Border colors",
            component: <BorderColor updateBorderColor={updateBorderColor} />,
        },
        {
            title: "Background colors",
            component: <BackgroundColor updateBgColor={updateBgColor} />,
        },
    ];

    return (
        <div className="mx-auto w-full p-2">
            {disclosureItems.map((item, index) => (
                <Disclosure defaultOpen key={index}>
                    {({ open }) => (
                        <div className="flex flex-col items-center">
                            <Disclosure.Button className="mt-3 flex w-full justify-between rounded-lg bg-purple-100/80 px-4 py-2 max-w-2xl text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>{item.title}</span>
                                <CaretUp
                                    className={`${
                                        open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Transition
                                enter="transition duration-200 ease-in"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-in"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                                    {item.component}
                                </Disclosure.Panel>
                            </Transition>
                        </div>
                    )}
                </Disclosure>
            ))}
        </div>
    );
}
