import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CaretDoubleDown, Check } from "phosphor-react";

interface listItemsOption {
    value: string;
    text: string;
}

interface BaseListboxTypes {
    listItems: listItemsOption[];
    selected: string;
    updateSelected: (item: string) => void;
    customClasses: string;
}

export function BaseListbox({
    listItems,
    selected,
    updateSelected,
    customClasses,
}: BaseListboxTypes) {
    function handleUpdateSelected(selected: string) {
        updateSelected(selected);
    }

    return (
        <Listbox value={selected} onChange={handleUpdateSelected}>
            <div className={`relative ${customClasses}`}>
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white text-gray-900 py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-yellow-500 sm:text-base">
                    <span className="block truncate">{selected}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <CaretDoubleDown size={16} />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {listItems.map((item, index) => (
                            <Listbox.Option
                                key={index}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active
                                            ? "bg-amber-200 text-yellow-900"
                                            : "text-gray-900"
                                    }`
                                }
                                value={item.value}
                            >
                                {({ selected }) => (
                                    <>
                                        <span
                                            className={`block truncate ${
                                                selected
                                                    ? "font-medium"
                                                    : "font-normal"
                                            }`}
                                        >
                                            {item.text}
                                        </span>
                                        {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-700">
                                                <Check size={16} />
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
}
